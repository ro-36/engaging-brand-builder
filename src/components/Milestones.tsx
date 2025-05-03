
import React, { useEffect } from 'react';
import { Award, Trophy, Medal } from 'lucide-react';

const Milestones = () => {
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

  const milestones = [
    {
      date: "2023",
      title: "First Place in College Hackathon",
      description: "Led a team of 3 to develop an innovative mobile app for campus sustainability.",
      icon: Trophy
    },
    {
      date: "2022",
      title: "Dean's Honor List",
      description: "Recognized for academic excellence with a GPA of 3.9/4.0 for consecutive semesters.",
      icon: Award
    },
    {
      date: "2021",
      title: "Open Source Contribution Recognition",
      description: "Contributed to a popular open source project with 5 accepted pull requests.",
      icon: Medal
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">Milestones</h2>
        <p className="section-subtitle scroll-reveal">Key achievements and recognition in my journey</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow scroll-reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <milestone.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <span className="text-primary text-sm font-medium block text-center">{milestone.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-center">{milestone.title}</h3>
              <p className="text-muted-foreground text-center">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
