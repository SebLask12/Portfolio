import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import RootLayout from './components/UI/RootLayout';
import WelcomPage from './pages/WelcomePage';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import ProjectsLayout from './components/UI/ProjectsLayout';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsPage />} />
            <Route path=":id" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
