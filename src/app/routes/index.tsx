import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
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
