
import React, { useEffect, useRef } from 'react';
import { Calendar, User, Briefcase } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const timelineItems = [
    {
      date: "2023 - Present",
      title: "Computer Science Major",
      organization: "University of Technology",
      description: "Studying advanced algorithms, software engineering, and machine learning."
    },
    {
      date: "2022 - 2023",
      title: "Web Development Bootcamp",
      organization: "Tech Academy",
      description: "Intensive training in modern web technologies and frameworks."
    },
    {
      date: "2020 - 2022",
      title: "Associate's Degree in IT",
      organization: "Community College",
      description: "Foundation in information technology and computer systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container" ref={sectionRef}>
        <h2 className="section-title scroll-reveal">About Me</h2>
        <p className="section-subtitle scroll-reveal">Get to know me and my background</p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16">
          <div className="md:col-span-2 scroll-reveal">
            <div className="aspect-square rounded-xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-card rounded-lg p-4 flex items-center gap-3 shadow-sm flex-1">
                <User className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 flex items-center gap-3 shadow-sm flex-1">
                <Calendar className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">3+ Years</p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 flex items-center gap-3 shadow-sm flex-1">
                <Briefcase className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                  <p className="font-medium">15+ Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Computer Science student with a strong interest in web development, machine learning, and creating accessible digital experiences. With a foundation in both theoretical concepts and practical applications, I enjoy tackling complex problems and building elegant solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring nature trails, reading science fiction, or experimenting with new cooking recipes. I believe in continuous learning and am always looking to expand my skillset.
            </p>
            
            <h3 className="text-2xl font-display font-bold mb-4">Education & Training</h3>
            <div className="space-y-1">
              {timelineItems.map((item, index) => (
                <div key={index} className="timeline-item scroll-reveal" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="timeline-dot"></div>
                  <span className="text-primary text-sm font-medium block">{item.date}</span>
                  <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.organization}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
