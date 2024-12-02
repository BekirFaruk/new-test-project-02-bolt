import React from 'react';
import { Route } from '@tanstack/react-location';
import { HomePage } from '../pages/HomePage';
import { ChartPage } from '../pages/ChartPage';

export const routes: Route[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/chart',
    element: <ChartPage />,
  },
];