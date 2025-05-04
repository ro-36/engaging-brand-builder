
import React, { useEffect } from 'react';
import { Code, BookOpen, Music, Camera, Gamepad2, Globe } from 'lucide-react';
import { Github, Linkedin, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Interests = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and intuitive user interfaces with modern frameworks."
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Science fiction, technical books, and articles about emerging technologies."
    },
    {
      icon: Music,
      title: "Music",
      description: "Playing guitar and piano, plus discovering new indie artists."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Urban landscapes and nature photography during my travels."
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy and puzzle games that challenge creative thinking."
    },
    {
      icon: Globe,
      title: "Traveling",
      description: "Exploring new cultures and places around the world."
    }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "Github" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Mail, url: "mailto:hello@example.com", label: "Email" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">My Interests</h2>
        <p className="section-subtitle scroll-reveal">Passions and hobbies outside of work</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <interest.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-center">{interest.title}</h3>
              <p className="text-muted-foreground text-center">{interest.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 scroll-reveal">
          <h3 className="text-2xl font-display font-bold text-center mb-8">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                aria-label={link.label}
              >
                <div className="bg-card hover:bg-primary/10 p-4 rounded-full transition-colors duration-300">
                  <link.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
