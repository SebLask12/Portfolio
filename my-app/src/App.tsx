import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { createRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
import './index.css';

import RootLayout from './components/UI/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import ProjectsLayout from './components/UI/ProjectsLayout';
import ContactPage from './pages/Contact';

// const routes = [
//   {
//     path: '/',
//     name: 'HomePage',
//     element: <HomePage />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/about',
//     name: 'About',
//     element: <AboutPage />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/projects',
//     name: 'Projects',
//     element: <ProjectsPage />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     element: <ContactPage />,
//     nodeRef: createRef(),
//   },
// ];

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout nodeRef={nodeRef} />,
//     children: routes.map(route => ({
//       index: route.path === '/',
//       path: route.path === '/' ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ]);

function App() {
  // const location = useLocation();
  // const currentOutlet = useOutlet();
  // const { nodeRef } =
  //   routes.find(route => route.path === location.pathname) ?? {};

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectDetailPage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
}

export default App;
