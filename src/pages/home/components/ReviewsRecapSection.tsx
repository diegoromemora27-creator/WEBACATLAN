import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import participantsData from '../../analisis-equipos/data/courseid_21860_participants.json';
import { isSupabaseConfigured, supabase } from '../../../lib/supabase';

type ParticipantRecord = {
  apellidos?: string;
  direccinemail?: string;
};

type ReviewRow = {
  id: string;
  full_name: string;
  linkedin_url: string | null;
  class_impact: string;
  events_attended: string | null;
  created_at: string;
};

type ReviewFormState = {
  full_name: string;
  email: string;
  linkedin_url: string;
  class_impact: string;
  events_attended: string;
};

const extractParticipants = (): ParticipantRecord[] => {
  const rawData = participantsData as unknown;

  if (Array.isArray(rawData) && Array.isArray(rawData[0])) {
    return rawData[0] as ParticipantRecord[];
  }

  if (Array.isArray(rawData)) {
    return rawData as ParticipantRecord[];
  }

  return [];
};

const participants = extractParticipants();

const participantByEmail = new Map(
  participants
    .filter((item) => typeof item.direccinemail === 'string')
    .map((item) => [item.direccinemail!.trim().toLowerCase(), item]),
);

const allowedEmails = new Set(participantByEmail.keys());

const initialFormState: ReviewFormState = {
  full_name: '',
  email: '',
  linkedin_url: '',
  class_impact: '',
  events_attended: '',
};

const MAX_IMPACT_CHARS = 200;
const MAX_EVENTS_CHARS = 200;
const IMPACT_PREVIEW_CHARS = 110;

const sanitizeInput = (value: string, maxLength: number): string =>
  value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maxLength);

const normalizeLinkedInUrl = (value: string): string => {
  const sanitized = sanitizeInput(value, 300);
  if (!sanitized) {
    return '';
  }

  const withProtocol = sanitized.startsWith('http://') || sanitized.startsWith('https://')
    ? sanitized
    : `https://${sanitized}`;

  try {
    const parsed = new URL(withProtocol);
    const host = parsed.hostname.toLowerCase();
    const isLinkedinDomain = host === 'linkedin.com' || host.endsWith('.linkedin.com');

    if (!isLinkedinDomain) {
      return '';
    }

    parsed.protocol = 'https:';
    parsed.hash = '';
    return parsed.toString();
  } catch {
    return '';
  }
};

export default function ReviewsRecapSection() {
  const [emailToValidate, setEmailToValidate] = useState('');
  const [validatedEmail, setValidatedEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [formState, setFormState] = useState<ReviewFormState>(initialFormState);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [includePersonalName, setIncludePersonalName] = useState(true);

  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState('');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedReview, setSelectedReview] = useState<ReviewRow | null>(null);
  const [reviewsPage, setReviewsPage] = useState(0);

  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(reviews.length / pageSize));

  const reviewsToRender = useMemo(
    () => (showAllReviews ? reviews : reviews.slice(reviewsPage * pageSize, reviewsPage * pageSize + pageSize)),
    [reviews, showAllReviews, reviewsPage],
  );

  const hasValidStudent = Boolean(validatedEmail);
  const verifiedParticipantName = participantByEmail.get(validatedEmail)?.apellidos || '';

  const loadPublishedReviews = useCallback(async () => {
    if (!supabase) {
      setReviewsError('Configura Supabase para cargar reseñas publicadas.');
      setIsLoadingReviews(false);
      return;
    }

    setIsLoadingReviews(true);
    setReviewsError('');

    const { data, error } = await supabase
      .from('reviews')
      .select('id, full_name, linkedin_url, class_impact, events_attended, created_at')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(12);

    if (error) {
      const authLikeError = /401|unauthorized|invalid api key|jwt/i.test(error.message || '');
      setReviewsError(
        authLikeError
          ? 'No autorizado por Supabase (401). Revisa URL del proyecto y la public key (anon/publishable).'
          : 'No se pudieron cargar las reseñas por ahora.',
      );
      setIsLoadingReviews(false);
      return;
    }

    setReviews(data ?? []);
    setIsLoadingReviews(false);
  }, []);

  useEffect(() => {
    loadPublishedReviews();
  }, [loadPublishedReviews]);

  useEffect(() => {
    if (showAllReviews) {
      return;
    }

    if (reviewsPage > totalPages - 1) {
      setReviewsPage(0);
    }
  }, [reviewsPage, showAllReviews, totalPages]);

  const goPrevReviewsPage = () => {
    if (totalPages <= 1 || showAllReviews) {
      return;
    }

    setReviewsPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goNextReviewsPage = () => {
    if (totalPages <= 1 || showAllReviews) {
      return;
    }

    setReviewsPage((prev) => (prev + 1) % totalPages);
  };

  const handleValidateEmail = () => {
    const normalizedEmail = emailToValidate.trim().toLowerCase();

    setSubmitStatus('');

    if (!normalizedEmail) {
      setEmailError('Ingresa tu correo institucional o correo registrado.');
      setValidatedEmail('');
      return;
    }

    if (!allowedEmails.has(normalizedEmail)) {
      setEmailError('Este correo no aparece en la lista del grupo. Verifica y vuelve a intentar.');
      setValidatedEmail('');
      return;
    }

    setEmailError('');
    setValidatedEmail(normalizedEmail);
    setFormState((prev) => ({
      ...prev,
      email: normalizedEmail,
      full_name: prev.full_name || sanitizeInput(participantByEmail.get(normalizedEmail)?.apellidos || '', 120),
    }));
  };

  const resetValidation = () => {
    setValidatedEmail('');
    setEmailError('');
    setSubmitStatus('');
    setIncludePersonalName(true);
    setFormState(initialFormState);
  };

  const handleSubmitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasValidStudent) {
      setSubmitStatus('Primero valida tu correo para poder enviar la reseña.');
      return;
    }

    if (!supabase || !isSupabaseConfigured) {
      setSubmitStatus('Falta configurar las variables de Supabase.');
      return;
    }

    const payload: ReviewFormState = {
      ...formState,
      full_name: sanitizeInput(formState.full_name, 120),
      email: validatedEmail,
      linkedin_url: normalizeLinkedInUrl(formState.linkedin_url),
      class_impact: sanitizeInput(formState.class_impact, MAX_IMPACT_CHARS),
      events_attended: sanitizeInput(formState.events_attended, MAX_EVENTS_CHARS),
    };

    if (!payload.class_impact) {
      setSubmitStatus('El impacto de la clase es obligatorio.');
      return;
    }

    if (formState.linkedin_url.trim() && !payload.linkedin_url) {
      setSubmitStatus('El perfil de LinkedIn debe ser una URL valida de linkedin.com.');
      return;
    }

    const safeFullName = includePersonalName && verifiedParticipantName
      ? sanitizeInput(verifiedParticipantName, 120)
      : 'Reseña anónima';

    setIsSubmitting(true);
    setSubmitStatus('');

    const { error } = await supabase.from('reviews').insert({
      full_name: safeFullName,
      email: payload.email,
      linkedin_url: payload.linkedin_url || null,
      class_impact: payload.class_impact.slice(0, MAX_IMPACT_CHARS),
      events_attended: payload.events_attended.slice(0, MAX_EVENTS_CHARS) || null,
    });

    if (error) {
      const authLikeError = /401|unauthorized|invalid api key|jwt/i.test(error.message || '');
      setSubmitStatus(
        authLikeError
          ? 'No autorizado por Supabase (401). Verifica URL y public key (anon/publishable).'
          : 'No se pudo guardar tu reseña. Intenta de nuevo en unos minutos.',
      );
      setIsSubmitting(false);
      return;
    }

    setSubmitStatus('Reseña enviada. Gracias por compartir tu experiencia.');
    setIsSubmitting(false);
    setEmailToValidate('');
    setValidatedEmail('');
    setIncludePersonalName(true);
    setFormState(initialFormState);

    await loadPublishedReviews();
  };

  return (
    <section id="recap" className="bg-gradient-to-br from-[#0f2d55] via-[#1f4f8b] to-[#0b1f3e] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center text-white">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.18em] text-white/90">
            Recap de la generación
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Comparte cómo esta clase impactó tu carrera</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-white/85 md:text-base">
            Valida primero tu email registrado en el grupo. Después podrás publicar tu reseña con tu experiencia, eventos a los que asististe y tu perfil de LinkedIn.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <article className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsFormOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:bg-slate-100"
              aria-expanded={isFormOpen}
            >
              <div>
                <h3 className="text-lg font-bold text-[#0f2d55]">Quiero compartir mi experiencia</h3>
                <p className="mt-1 text-sm text-slate-600">Abre este formulario para validar tu correo y enviar tu reseña.</p>
              </div>
              <i className={`ri-arrow-down-s-line text-2xl text-[#1f4f8b] transition-transform ${isFormOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isFormOpen && (
              <>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email-validation">
                    Correo registrado
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="email-validation"
                      type="email"
                      value={emailToValidate}
                      onChange={(event) => setEmailToValidate(event.target.value)}
                      placeholder="tu_correo@pcpuma.acatlan.unam.mx"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#1f4f8b] focus:ring-2 focus:ring-[#1f4f8b]/20"
                    />
                    <button
                      type="button"
                      onClick={handleValidateEmail}
                      className="rounded-xl bg-[#1f4f8b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173f70]"
                    >
                      Validar
                    </button>
                    {hasValidStudent && (
                      <button
                        type="button"
                        onClick={resetValidation}
                        className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Cambiar
                      </button>
                    )}
                  </div>

                  {emailError && <p className="mt-3 text-sm font-medium text-red-600">{emailError}</p>}
                  {hasValidStudent && <p className="mt-3 text-sm font-medium text-emerald-700">Email validado correctamente.</p>}
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmitReview}>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-slate-700">Nombre para mostrar</p>
                    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                      <div className="flex items-center justify-between gap-3">
                        <span>
                          Se mostrará como:{' '}
                          <strong>
                            {includePersonalName && verifiedParticipantName
                              ? sanitizeInput(verifiedParticipantName, 120)
                              : 'Reseña anónima'}
                          </strong>
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={includePersonalName}
                          onClick={() => setIncludePersonalName((prev) => !prev)}
                          disabled={!hasValidStudent || !verifiedParticipantName}
                          className={`relative h-7 w-12 rounded-full transition ${
                            includePersonalName ? 'bg-[#1f4f8b]' : 'bg-slate-300'
                          } disabled:cursor-not-allowed disabled:opacity-50`}
                        >
                          <span
                            className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
                              includePersonalName ? 'left-[22px]' : 'left-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="linkedin-url">
                      Link de LinkedIn (opcional)
                    </label>
                    <input
                      id="linkedin-url"
                      type="url"
                      value={formState.linkedin_url}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          linkedin_url: event.target.value,
                        }))
                      }
                      disabled={!hasValidStudent}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#1f4f8b] focus:ring-2 focus:ring-[#1f4f8b]/20 disabled:cursor-not-allowed disabled:bg-slate-100"
                      placeholder="linkedin.com/in/tu-perfil"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="class-impact">
                      ¿Cómo ayudó esta clase a tu carrera profesional?
                    </label>
                    <textarea
                      id="class-impact"
                      value={formState.class_impact}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          class_impact: event.target.value.slice(0, MAX_IMPACT_CHARS),
                        }))
                      }
                      disabled={!hasValidStudent}
                      rows={4}
                      maxLength={MAX_IMPACT_CHARS}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1f4f8b] focus:ring-2 focus:ring-[#1f4f8b]/20 disabled:cursor-not-allowed disabled:bg-slate-100"
                      placeholder="Ejemplo: me ayudó a conseguir mejores prácticas de backend, mejorar mi portafolio y prepararme para entrevistas."
                    />
                    <div className="mt-1 text-right text-xs text-slate-500">
                      {formState.class_impact.length}/{MAX_IMPACT_CHARS}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="events-attended">
                      Eventos / Cursos a los que asististe (opcional)
                    </label>
                    <textarea
                      id="events-attended"
                      value={formState.events_attended}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          events_attended: event.target.value.slice(0, MAX_EVENTS_CHARS),
                        }))
                      }
                      disabled={!hasValidStudent}
                      rows={3}
                      maxLength={MAX_EVENTS_CHARS}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#1f4f8b] focus:ring-2 focus:ring-[#1f4f8b]/20 disabled:cursor-not-allowed disabled:bg-slate-100"
                      placeholder="Meetups, hackatones, talleres o charlas relacionadas con la clase."
                    />
                    <div className="mt-1 text-right text-xs text-slate-500">
                      {formState.events_attended.length}/{MAX_EVENTS_CHARS}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!hasValidStudent || isSubmitting}
                    className="inline-flex items-center rounded-xl bg-[#bb8800] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9f7300] disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar reseña'}
                  </button>

                  {submitStatus && <p className="text-sm font-medium text-slate-700">{submitStatus}</p>}
                  {!isSupabaseConfigured && (
                    <p className="text-xs text-amber-700">
                      Falta configurar VITE_SUPABASE_URL y una key publica: VITE_SUPABASE_ANON_KEY o VITE_SUPABASE_PUBLISHABLE_KEY.
                    </p>
                  )}
                </form>
              </>
            )}
          </article>

          <section className="mt-8 rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-lg font-bold text-[#0f2d55]">Reseñas recientes</h4>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevReviewsPage}
                  disabled={showAllReviews || totalPages <= 1}
                  className="h-8 w-8 rounded-full border border-[#1f4f8b]/30 text-[#1f4f8b] transition hover:bg-[#1f4f8b]/10 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Página anterior de reseñas"
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button
                  type="button"
                  onClick={goNextReviewsPage}
                  disabled={showAllReviews || totalPages <= 1}
                  className="h-8 w-8 rounded-full border border-[#1f4f8b]/30 text-[#1f4f8b] transition hover:bg-[#1f4f8b]/10 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Página siguiente de reseñas"
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAllReviews((prev) => !prev)}
                  className="rounded-full border border-[#1f4f8b]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#1f4f8b] transition hover:bg-[#1f4f8b]/10"
                >
                  {showAllReviews ? 'Ver recientes' : 'Ver todos'}
                </button>
              </div>
            </div>

            {!showAllReviews && reviews.length > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                Página {Math.min(reviewsPage + 1, totalPages)} de {totalPages}
              </p>
            )}

            <div className="mt-4">
              {isLoadingReviews && <p className="text-sm text-slate-600">Cargando reseñas...</p>}

              {!isLoadingReviews && reviewsError && <p className="text-sm text-red-600">{reviewsError}</p>}

              {!isLoadingReviews && !reviewsError && reviews.length === 0 && (
                <p className="text-sm text-slate-600">
                  Aún no hay reseñas publicadas. Cuando una reseña sea aprobada (is_published = true), aparecerá aquí.
                </p>
              )}

              {!isLoadingReviews && !reviewsError && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {reviewsToRender.map((review) => {
                    const safeLinkedIn = normalizeLinkedInUrl(review.linkedin_url || '');
                    const impactText = (review.class_impact || '').slice(0, MAX_IMPACT_CHARS);
                    const needsExpand = impactText.length > IMPACT_PREVIEW_CHARS;
                    const displayImpact = needsExpand
                      ? `${impactText.slice(0, IMPACT_PREVIEW_CHARS)}...`
                      : impactText;

                    return (
                      <article
                        key={review.id}
                        className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-3 rounded-lg bg-[#1f4f8b]/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1f4f8b]">
                          Impacto profesional
                        </div>

                        <p
                          className="text-sm leading-relaxed text-slate-800"
                          style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                        >
                          {displayImpact}
                        </p>

                        {needsExpand && (
                          <button
                            type="button"
                            onClick={() => setSelectedReview(review)}
                            className="mt-2 self-start text-xs font-semibold text-[#1f4f8b] underline-offset-2 hover:underline"
                          >
                            Ver más
                          </button>
                        )}

                        {review.events_attended && (
                          <div className="mt-4">
                            <p className="mb-1 text-xs font-semibold text-slate-700">Eventos</p>
                            <div className="subtle-x-scroll overflow-x-auto rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                              <p
                                className="w-max min-w-full whitespace-nowrap text-xs text-slate-600"
                                style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
                              >
                                {review.events_attended}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <p className="text-sm font-semibold text-slate-900">{review.full_name || 'Estudiante verificado'}</p>
                          {safeLinkedIn && (
                            <a
                              href={safeLinkedIn}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#1f4f8b] underline-offset-2 hover:underline"
                            >
                              <i className="ri-linkedin-box-fill"></i>
                              Perfil LinkedIn
                            </a>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {selectedReview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4" role="dialog" aria-modal="true">
              <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <h5 className="text-xl font-bold text-[#0f2d55]">Reseña completa</h5>
                  <button
                    type="button"
                    onClick={() => setSelectedReview(null)}
                    className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
                  >
                    Cerrar
                  </button>
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {selectedReview.full_name || 'Estudiante verificado'}
                </p>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.1em] text-[#1f4f8b]">Impacto profesional</p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-slate-800"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {selectedReview.class_impact}
                  </p>
                </div>

                {selectedReview.events_attended && (
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.1em] text-[#1f4f8b]">Eventos</p>
                    <div className="subtle-x-scroll mt-2 overflow-x-auto">
                      <p className="w-max min-w-full whitespace-nowrap text-sm text-slate-700">{selectedReview.events_attended}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
