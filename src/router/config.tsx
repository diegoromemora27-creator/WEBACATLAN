import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import MetodologiasAgiles from "../pages/metodologias-agiles/page";
import ControlVersiones from "../pages/control-versiones/page";
import Backend from "../pages/backend/page";
import Asincronia from "../pages/backend/asincronia/page";
import NestJSFundamentos from "../pages/backend/nestjs-fundamentos/page";
import ORM from "../pages/backend/orm/page";
import BasesDatos from "../pages/backend/bases-datos/page";
import NextJSFundamentos from "../pages/frontend/nextjs-fundamentos/page";
import POO from "../pages/code-concepts/poo/page";
import TypeScript from "../pages/code-concepts/typescript/page";
import ConceptosAvanzados from "../pages/frontend/conceptos-avanzados/page";
import DevOps from "../pages/devops/page";
import DockerIntro from "../pages/devops/docker-intro/page";
import DockerEjemplo from "../pages/devops/docker-ejemplo/page";
import CloudComputing from "../pages/devops/cloud-computing/page";
import ArquitecturaPT2 from "../pages/fundamentos-arquitectura/arquitectura-pt2/page";
import ArquitecturaPT1Page from "../pages/fundamentos-arquitectura/arquitectura-pt1/page";

import IAParte1 from "../pages/fundamentos-ia/ia-pt1/page";
import IAParte2 from "../pages/fundamentos-ia/ia-pt2/page";
import BasesDatosPage from '../pages/backend/bases-datos/page';
import AnalisisEquiposTeams from "../pages/analisis-equipos/equipos/page";
import AnalisisSprint1 from "../pages/analisis-equipos/sprint-1/page";
import Examen1 from "../pages/examenes/examen-1/page";

const HTMLPage = lazy(() => import('../pages/frontend/html/page'));
const CSSPage = lazy(() => import('../pages/frontend/css/page'));
const SeguridadTestingPage = lazy(() => import('../pages/seguridad-testing/page'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/arquitectura-pt1",
    element: <ArquitecturaPT1Page />,
  },
  {
    path: "/arquitectura-pt2",
    element: <ArquitecturaPT2 />,
  },
  {
    path: "/fundamentos-ia/ia-pt1",
    element: <IAParte1 />,
  },
  {
    path: "/fundamentos-ia/ia-pt2",
    element: <IAParte2 />,
  },
  {
    path: "/metodologias-agiles",
    element: <MetodologiasAgiles />,
  },
  {
    path: "/control-versiones",
    element: <ControlVersiones />,
  },
  {
    path: "/code-concepts/poo",
    element: <POO />,
  },
  {
    path: "/code-concepts/typescript",
    element: <TypeScript />,
  },
  {
    path: "/backend",
    element: <Backend />,
  },
  {
    path: "/backend/asincronia",
    element: <Asincronia />,
  },
  {
    path: "/backend/nestjs-fundamentos",
    element: <NestJSFundamentos />,
  },
  {
    path: "/backend/orm",
    element: <ORM />,
  },
  {
    path: "/backend/bases-datos",
    element: <BasesDatos />,
  },
  {
    path: "/frontend/nextjs-fundamentos",
    element: <NextJSFundamentos />,
  },
  {
    path: "/frontend/html",
    element: <HTMLPage />,
  },

  {
    path: "/frontend/css",
    element: <CSSPage />,
  },
  {
    path: "/frontend/conceptos-avanzados",
    element: <ConceptosAvanzados />,
  },
    {
    path: "/backend/bases-datos",
    element: <BasesDatosPage />,
  },
  {
    path: '/seguridad-testing',
    element: <SeguridadTestingPage />,
  },
  {
    path: '/devops',
    element: <DevOps />,
  },
  {
    path: '/devops/docker-intro',
    element: <DockerIntro />,
  },
  {
    path: '/devops/docker-ejemplo',
    element: <DockerEjemplo />,
  },
  {
    path: '/devops/cloud-computing',
    element: <CloudComputing />,
  },
  {
    path: '/analisis-equipos/equipos',
    element: <AnalisisEquiposTeams />,
  },
  {
    path: '/analisis-equipos/sprint-1',
    element: <AnalisisSprint1 />,
  },
  {
    path: '/examenes/examen-1',
    element: <Examen1 />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
