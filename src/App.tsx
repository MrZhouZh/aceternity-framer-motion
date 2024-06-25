import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BasicLayout from '@/layouts/BasicLayout';
import ErrorPage from '@/layouts/ErrorPage/ErrorPage';
import Home from '@/views/Home';
import CardHoverEffectDemo from '@/views/CardHoverEffectDemo';
import ParallaxScrollDemo from '@/views/ParallaxScrollDemo';
import MeteorsDemo from '@/views/MeteorsDemo';

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: 'components/card-hover-effect',
            element: <CardHoverEffectDemo />,
          },
          {
            path: 'components/parallax-scroll',
            element: <ParallaxScrollDemo />,
          },
          {
            path: 'components/meteors',
            element: <MeteorsDemo />,
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
