import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectDetailPage />} />
          </Route>
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
