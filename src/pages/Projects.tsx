
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import ProjectsComponent from '../components/Projects';

const ProjectsPage = () => {
  return (
    <Layout>
      <ProjectsComponent />
    </Layout>
  );
};

const Projects = () => {
  return (
    <ThemeProvider>
      <ProjectsPage />
    </ThemeProvider>
  );
};

export default Projects;
