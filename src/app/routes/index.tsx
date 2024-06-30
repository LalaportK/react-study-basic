import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { Top } = await import('./app/Top');
        return { Component: Top };
      },
    },
    {
      path: '/color',
      lazy: async () => {
        const { ColorList } = await import('./app/ColorList');
        return { Component: ColorList };
      },
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./not-found');
        return { Component: NotFoundRoute };
      },
    },
  ]);
