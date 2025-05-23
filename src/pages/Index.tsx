
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default Index;
