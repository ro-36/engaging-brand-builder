
import React, { useEffect } from 'react';
import { Code, Server, FileText, Image } from 'lucide-react';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

interface SkillType {
  name: string;
  level: number;
}

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
        { name: "MongoDB", level: 65 },
      ],
    },
    {
      title: "Design",
      icon: Image,
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI/UX", level: 70 },
        { name: "Responsive Design", level: 85 },
        { name: "Adobe XD", level: 60 },
        { name: "Canva", level: 80 },
      ],
    },
    {
      title: "Other",
      icon: FileText,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Project Management", level: 70 },
        { name: "Agile/Scrum", level: 65 },
      ],
    },
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">My Skills</h2>
        <p className="section-subtitle scroll-reveal">Technologies and competencies I've acquired</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className={cn(
                "bg-card rounded-xl p-6 border border-border shadow-sm scroll-reveal",
                "hover:shadow-md transition-all duration-300"
              )}
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
