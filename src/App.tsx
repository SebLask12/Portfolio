import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './index.css';
import RootLayout from './components/UI/RootLayout';
import { tokenLoader } from './utils/getToken';
import LoadingAnim from './components/elements/LoadingAnim';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsLayout = lazy(() => import('./pages/Projects'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AdminPage = lazy(() => import('./pages/Admin'));
const AuthPage = lazy(() => import('./pages/Auth'));
const ProfilPage = lazy(() => import('./pages/Profil'));

const routes = [
  {
    path: '/Portfolio',
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <ProjectsLayout />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: 'auth',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <AuthPage />
          </Suspense>
        ),
      },
      {
        path: 'profil',
        element: (
          <Suspense fallback={<LoadingAnim/>}>
            <ProfilPage />
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
