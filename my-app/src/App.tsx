import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { createRef, useEffect } from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <PageTransition />
      </RootLayout>
    </BrowserRouter>
  );
}

function PageTransition() {
  const location = useLocation();
  const nodeRef = createRef<HTMLDivElement>();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={500}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsLayout />}>
              <Route index element={<ProjectsPage />} />
              <Route path=":id" element={<ProjectDetailPage />} />
            </Route>
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
