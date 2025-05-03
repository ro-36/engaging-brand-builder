
import React, { useEffect, useState } from 'react';
import { Github, Link } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
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

  const projects: Project[] = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store with product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Web"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Web"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information visualization with interactive maps.",
      image: "https://images.unsplash.com/photo-1529474944862-30cce8537c3c?q=80&w=1287&auto=format&fit=crop",
      tags: ["JavaScript", "API", "Web"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1455&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Web"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Recipe Finder App",
      description: "Mobile application for discovering and saving recipes based on available ingredients.",
      image: "https://images.unsplash.com/photo-1596387451264-f7bf558aa22c?q=80&w=1287&auto=format&fit=crop",
      tags: ["React Native", "Mobile"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive charts and graphs for analyzing complex datasets.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1470&auto=format&fit=crop",
      tags: ["JavaScript", "D3.js", "Data"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">My Projects</h2>
        <p className="section-subtitle scroll-reveal">Check out some of my recent work</p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-reveal">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "project-card overflow-hidden scroll-reveal",
                "transform transition-transform duration-500"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Link size={16} className="mr-1" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
