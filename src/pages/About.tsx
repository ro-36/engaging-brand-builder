
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import AboutComponent from '../components/About';
import Milestones from '../components/Milestones';
import Interests from '../components/Interests';

const AboutPage = () => {
  return (
    <Layout>
      <AboutComponent />
      <Milestones />
      <Interests />
    </Layout>
  );
};

const About = () => {
  return (
    <ThemeProvider>
      <AboutPage />
    </ThemeProvider>
  );
};

export default About;
