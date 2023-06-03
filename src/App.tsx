import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';
import RootLayout from './components/UI/RootLayout';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsLayout = lazy(() => import('./pages/Projects'));
const ContactPage = lazy(() => import('./pages/Contact'));

const routes = [
  {
    path: '/Portfolio/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/Portfolio/about',
        element: (
          <Suspense>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/Portfolio/projects',
        element: (
          <Suspense>
            <ProjectsLayout />
          </Suspense>
        ),
      },
      {
        path: '/Portfolio/contact',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
