import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;