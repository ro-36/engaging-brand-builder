
import React, { useEffect } from 'react';
import { Download, FileText, Briefcase, User, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Resume = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "May 2023 - Present",
      description: "Developing responsive user interfaces using React and TypeScript. Collaborating with design team to implement UI/UX improvements. Participating in code reviews and agile development processes."
    },
    {
      title: "Student Web Developer",
      company: "University IT Department",
      period: "Sep 2022 - Apr 2023",
      description: "Maintained and updated university department websites. Implemented responsive design principles and accessibility improvements. Assisted in migration from legacy systems to modern web frameworks."
    },
    {
      title: "Freelance Web Designer",
      company: "Self-employed",
      period: "Jun 2021 - Aug 2022",
      description: "Designed and developed websites for small businesses and individual clients. Created custom WordPress themes and plugins. Provided ongoing maintenance and support services."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2023 - Present",
      description: "Focusing on software development, algorithms, and artificial intelligence. Maintaining a 3.8 GPA. Active member of the Computer Science Club."
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Tech Academy",
      period: "2022 - 2023",
      description: "Intensive 6-month program covering full-stack web development. Completed 10+ projects using modern technologies. Received Excellence in Coding award."
    },
    {
      degree: "Associate's Degree in Information Technology",
      institution: "Community College",
      period: "2020 - 2022",
      description: "Foundation courses in programming, networking, and database management. Graduated with honors (3.9 GPA)."
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Meta Front-End Developer Certificate",
    "Google UX Design Certificate",
    "FreeCodeCamp Responsive Web Design",
    "JavaScript Algorithms and Data Structures"
  ];

  return (
    <section id="resume" className="py-20">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">Resume</h2>
        <p className="section-subtitle scroll-reveal">My academic and professional journey</p>
        
        <div className="flex justify-center mb-12 scroll-reveal">
          <Button size="lg">
            <Download size={18} className="mr-2" /> Download CV
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8 scroll-reveal">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display">Experience</h3>
            </div>
            
            {experiences.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-sm scroll-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-medium">
                    <Calendar size={12} className="mr-1" /> {item.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.company}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Education Column */}
          <div className="space-y-8 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display">Education</h3>
            </div>
            
            {education.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-sm scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{item.degree}</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-medium">
                    <Calendar size={12} className="mr-1" /> {item.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            ))}
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm mt-8 scroll-reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileText size={20} />
                </div>
                <h4 className="text-lg font-bold">Certifications</h4>
              </div>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <React.Fragment key={cert}>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{cert}</span>
                    </li>
                    {index < certifications.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
