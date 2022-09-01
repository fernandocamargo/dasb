import { lazy } from 'react';

export const About = lazy(
  () => import(/* webpackChunkName: "components/app/routes/about" */ './about')
);

export const Home = lazy(
  () => import(/* webpackChunkName: "components/app/routes/home" */ './home')
);
