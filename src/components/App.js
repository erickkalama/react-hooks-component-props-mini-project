// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog'; // Import your data

function App() {
  return (
    <div>
      <Header name="My Personal Blog" />
      <About 
        image="https://via.placeholder.com/215"
        about="Welcome to my personal blog where I share my thoughts and experiences."
      />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
