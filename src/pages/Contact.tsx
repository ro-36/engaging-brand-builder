
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import ContactComponent from '../components/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <ContactComponent />
    </Layout>
  );
};

const Contact = () => {
  return (
    <ThemeProvider>
      <ContactPage />
    </ThemeProvider>
  );
};

export default Contact;
