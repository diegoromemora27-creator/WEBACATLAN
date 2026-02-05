import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import FundamentosArquitectura from "../pages/fundamentos-arquitectura/page";
import MetodologiasAgiles from "../pages/metodologias-agiles/page";
import ControlVersiones from "../pages/control-versiones/page";
import Backend from "../pages/backend/page";
import Asincronia from "../pages/backend/asincronia/page";
import NestJSFundamentos from "../pages/backend/nestjs-fundamentos/page";
import ORM from "../pages/backend/orm/page";
import NextJSFundamentos from "../pages/frontend/nextjs-fundamentos/page";
import POO from "../pages/code-concepts/poo/page";
import TypeScript from "../pages/code-concepts/typescript/page";
import ConceptosAvanzados from "../pages/frontend/conceptos-avanzados/page";
import DevOps from "../pages/devops/page";
import DockerIntro from "../pages/devops/docker-intro/page";
import DockerEjemplo from "../pages/devops/docker-ejemplo/page";
import CloudComputing from "../pages/devops/cloud-computing/page";
import ArquitecturaPT2 from "../pages/fundamentos-arquitectura/arquitectura-pt2/page";
import IAParte1 from "../pages/fundamentos-ia/ia-pt1/page";
import IAParte2 from "../pages/fundamentos-ia/ia-pt2/page";

const HTMLPage = lazy(() => import('../pages/frontend/html/page'));
const CSSPage = lazy(() => import('../pages/frontend/css/page'));
const SeguridadTestingPage = lazy(() => import('../pages/seguridad-testing/page'));
const FundamentosArquitecturaPage = lazy(() => import('../pages/fundamentos-arquitectura/page'));
const ArquitecturaPT1Page = lazy(() => import('../pages/fundamentos-arquitectura/arquitectura-pt1/page'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fundamentos-arquitectura",
    element: <FundamentosArquitecturaPage />,
  },
  {
    path: "/fundamentos-arquitectura/arquitectura-pt1",
    element: <ArquitecturaPT1Page />,
  },
  {
    path: "/fundamentos-arquitectura/arquitectura-pt2",
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
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
