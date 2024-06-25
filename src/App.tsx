import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BasicLayout from '@/layouts/BasicLayout';
import ErrorPage from '@/layouts/ErrorPage/ErrorPage';
import Home from '@/views/Home';
import CardHoverEffectDemo from '@/views/CardHoverEffectDemo';
import ParallaxScrollDemo from '@/views/ParallaxScrollDemo';
import MeteorsDemo from '@/views/MeteorsDemo';
import StickyScrollRevealDemo from '@/views/StickyScrollDemo';
import TextGenerateEffectDemo from '@/views/TextGenerateEffectDemo';
import GridAndDotBgDemo from '@/views/GridAndDotBgDemo';

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
          },
          {
            path: 'components/sticky-scroll-reveal',
            element: <StickyScrollRevealDemo />,
          },
          {
            path: 'components/text-generate-effect',
            element: <TextGenerateEffectDemo />,
          },
          {
            path: 'components/grid-and-dot-backgrounds',
            element: <GridAndDotBgDemo />,
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
