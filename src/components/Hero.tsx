
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hello, I'm a Student & Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Aspiring Developer <br />& Creative Thinker
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I build accessible, responsive web applications and solve complex problems with clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#resume">Resume</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className={cn(
            "relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/20 before:to-secondary/20 before:z-10"
          )}>
            <div className="tilt-card w-full h-full">
              <div className="tilt-card-inner">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
