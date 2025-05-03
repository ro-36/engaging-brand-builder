
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import ResumeComponent from '../components/Resume';

const ResumePage = () => {
  return (
    <Layout>
      <ResumeComponent />
    </Layout>
  );
};

const Resume = () => {
  return (
    <ThemeProvider>
      <ResumePage />
    </ThemeProvider>
  );
};

export default Resume;
