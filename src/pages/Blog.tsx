
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import { Calendar } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
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
      title: "JavaScript Array Methods You Should Know",
      date: "March 28, 2023",
      excerpt: "Explore the most useful JavaScript array methods that every developer should be familiar with.",
      category: "JavaScript",
      imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="section-container">
          <h2 className="section-title scroll-reveal">Blog</h2>
          <p className="section-subtitle scroll-reveal">Thoughts, tutorials, and insights</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-video w-full">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">More blog posts coming soon!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Blog = () => {
  return (
    <ThemeProvider>
      <BlogPage />
    </ThemeProvider>
  );
};

export default Blog;
