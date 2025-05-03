
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import RunningText from './RunningText';

const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
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
                <Link to="/projects">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resume">Resume</Link>
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

      {/* Running Text Section */}
      <RunningText 
        text="✨ Passionate about creating beautiful, user-friendly web experiences ✨ Open to freelance opportunities and collaborations ✨ Always learning and expanding my skill set"
        className="py-3 rounded-none sticky top-16 z-10 shadow-sm"
      />

      {/* About Me Brief Section */}
      <section className="py-16 bg-muted/10 rounded-3xl">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="About Me" 
                className="rounded-2xl shadow-lg hover-scale object-cover aspect-video md:aspect-square w-full"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm a passionate Computer Science student with a strong interest in web development, machine learning, and creating accessible digital experiences. With a foundation in both theoretical concepts and practical applications, I enjoy tackling complex problems and building elegant solutions.
              </p>
              <Button asChild variant="default">
                <Link to="/about">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Previews Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-display font-bold">Latest Blog Posts</h2>
            <Button asChild variant="outline">
              <Link to="/blog">
                View All <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started with React",
                date: "May 1, 2023",
                excerpt: "Learn how to set up your first React application and understand the core concepts.",
                category: "Web Development",
                imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Understanding CSS Grid Layout",
                date: "April 15, 2023",
                excerpt: "A deep dive into CSS Grid Layout and how it can be used to create complex web layouts easily.",
                category: "CSS",
                imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
              },
              {
                title: "JavaScript Array Methods",
                date: "March 28, 2023",
                excerpt: "Explore the most useful JavaScript array methods that every developer should be familiar with.",
                category: "JavaScript",
                imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((post, index) => (
              <Link to="/blog" key={index} className="group">
                <div className="bg-card hover:bg-card/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-sm font-medium text-primary group-hover:underline flex items-center">
                        Read more <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
