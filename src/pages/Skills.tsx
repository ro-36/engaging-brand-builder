
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import SkillsComponent from '../components/Skills';

const SkillsPage = () => {
  return (
    <Layout>
      <SkillsComponent />
    </Layout>
  );
};

const Skills = () => {
  return (
    <ThemeProvider>
      <SkillsPage />
    </ThemeProvider>
  );
};

export default Skills;
