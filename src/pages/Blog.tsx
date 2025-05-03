
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from '../components/Layout';
import { Calendar, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Getting Started with React",
      date: "May 1, 2023",
      excerpt: "Learn how to set up your first React application and understand the core concepts like components, props, and state management that make React a powerful choice for modern web development.",
      content: "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer for web and mobile apps. React allows us to create reusable UI components.\n\nOne of the core concepts in React is the virtual DOM (Document Object Model). React creates a lightweight representation of the real DOM in the memory, called the virtual DOM. When the state of an object changes, React updates the virtual DOM first rather than the real DOM directly. Then, React compares the updated virtual DOM with a snapshot of the virtual DOM taken right before the update. Through this comparison, React figures out which parts of the real DOM need to be updated. This way, React only updates the necessary parts of the DOM, which makes the application faster.\n\nTo get started with React, you need to have Node.js installed on your machine. Once you have Node.js installed, you can create a new React application by running the following command in your terminal: npx create-react-app my-app. This will create a new React application named 'my-app' in a directory with the same name.",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend"],
      imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Understanding CSS Grid Layout",
      date: "April 15, 2023",
      excerpt: "A deep dive into CSS Grid Layout and how it can be used to create complex web layouts easily. Learn about grid containers, grid items, and powerful layout techniques.",
      content: "CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It lets you layout items in rows and columns, and has many features that make building complex layouts straightforward.\n\nTo start using CSS Grid, you need to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with properties like grid-column and grid-row.\n\nCSS Grid introduces a series of properties that define a grid: grid-template-columns, grid-template-rows, grid-template-areas, grid, grid-gap. For the items placed inside the grid, it introduces grid-column-start, grid-column-end, grid-row-start, grid-row-end.\n\nOne of the most powerful features of CSS Grid is the ability to explicitly place items on the grid. You can tell an item which row and column it should be positioned in. You can also specify how many rows and columns an item should span.",
      category: "CSS",
      tags: ["CSS", "Web Design", "Layout"],
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
    },
    {
      title: "JavaScript Array Methods You Should Know",
      date: "March 28, 2023",
      excerpt: "Explore the most useful JavaScript array methods that every developer should be familiar with. From map and filter to reduce and forEach, master these essential tools.",
      content: "JavaScript arrays come with a variety of built-in methods that make working with them a breeze. These methods can help you add, remove, iterate, filter, and transform array elements easily.\n\nSome of the most commonly used array methods include push(), pop(), shift(), unshift(), splice(), slice(), concat(), map(), filter(), reduce(), forEach(), find(), some(), and every().\n\nThe map() method creates a new array with the results of calling a function for every array element. It calls the provided function once for each element in an array, in order. The filter() method creates a new array with all elements that pass the test implemented by the provided function. The reduce() method reduces the array to a single value. It executes a provided function for each value of the array (from left to right).\n\nThese methods are particularly powerful because they allow for a more functional programming style, which can lead to more readable, maintainable code.",
      category: "JavaScript",
      tags: ["JavaScript", "Arrays", "Methods"],
      imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Introduction to TypeScript",
      date: "February 15, 2023",
      excerpt: "Discover how TypeScript enhances JavaScript with static types and tools for large-scale applications. Learn about interfaces, types, and compile-time checking.",
      content: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type definitions, which can help prevent many potential runtime errors as applications grow.\n\nIn TypeScript, you can specify types for variables, function parameters, and function return values. If there's a mismatch in types, TypeScript will alert you at compile time, which can save a lot of debugging time.\n\nOne of the most powerful features of TypeScript is interfaces. An interface is a way of defining a contract on a function with respect to the arguments and their types. An interface states what parameters a function will receive and what it will return.\n\nAnother key feature is generics. Generics provide a way to make components work with any data type and not restrict to one data type. This allows for components that can work over a variety of types rather than a single one, providing users with the ability to consume these components and use their own types.",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Programming"],
      imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Mastering Git for Version Control",
      date: "January 10, 2023",
      excerpt: "Learn how to effectively use Git for managing your codebase, collaborating with others, and tracking changes to your projects over time.",
      content: "Git is a distributed version control system that allows developers to track changes in their code, collaborate with others, and coordinate work among team members. It was created by Linus Torvalds in 2005 for the development of the Linux kernel.\n\nSome of the fundamental Git commands include git init (initialize a new Git repository), git clone (create a copy of an existing repository), git add (add files to the staging area), git commit (save changes to the local repository), git push (upload local changes to a remote repository), git pull (download changes from a remote repository), and git merge (combine changes from different branches).\n\nGit branching is a powerful feature that allows you to create different versions of your codebase. Each branch is a separate line of development. You can work on new features or bug fixes in isolation without affecting the main codebase. Once your changes are ready, you can merge them back into the main branch.\n\nGit also supports workflows that enable teams to collaborate effectively. The most common workflows include the centralized workflow (similar to traditional VCS), the feature branch workflow (where each feature is developed in a dedicated branch), and the Gitflow workflow (which defines a strict branching model designed around the project release).",
      category: "Version Control",
      tags: ["Git", "GitHub", "Version Control"],
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2080&auto=format&fit=crop"
    },
    {
      title: "Building RESTful APIs with Node.js",
      date: "December 5, 2022",
      excerpt: "A comprehensive guide to designing and implementing RESTful APIs using Node.js, Express, and MongoDB for modern web applications.",
      content: "RESTful APIs (Representational State Transfer) are a way to build web services that are lightweight, maintainable, and scalable. With Node.js, you can build high-performance RESTful APIs that can handle many concurrent connections with high throughput.\n\nExpress.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It makes building RESTful APIs with Node.js much simpler.\n\nMongoDB is a NoSQL database that works well with Node.js for building RESTful APIs. It stores data in flexible, JSON-like documents, which means fields can vary from document to document and data structure can be changed over time.\n\nWhen building RESTful APIs, it's important to follow certain principles: use HTTP methods explicitly (GET for retrieving, POST for creating, PUT for updating, DELETE for deleting); be stateless (each request from client to server must contain all the information needed to understand and complete the request); expose directory structure-like URIs; transfer XML, JSON, or both.",
      category: "Backend",
      tags: ["Node.js", "Express", "APIs"],
      imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop"
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
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scroll-reveal h-full flex flex-col"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      Read more 
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full flex items-center">
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
