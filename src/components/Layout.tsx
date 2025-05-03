
import React from 'react';
import { useTheme } from './ThemeProvider';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
