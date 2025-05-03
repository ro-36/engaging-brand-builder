
import React, { useEffect } from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(123) 456-7890",
      link: "tel:1234567890"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/johndoe",
      link: "https://linkedin.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/johndoe",
      link: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">Contact Me</h2>
        <p className="section-subtitle scroll-reveal">Get in touch for opportunities or just to say hello</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col space-y-6 scroll-reveal">
            <p className="text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl p-4 border border-border shadow-sm flex items-start gap-4 hover:shadow-md transition-all duration-300 scroll-reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">{info.title}</h4>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card rounded-xl border border-border p-6 shadow-sm scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
