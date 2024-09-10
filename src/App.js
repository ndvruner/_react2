import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Header() {
  return (
    <header className="Header" id="home">
      Welcome to My Website
    </header>
  );
}

function Body() {
  return (
    <div className="Body">
      <section id="about">
        <h2>About Us</h2>
        <p>
          This is a simple web page built using React and JavaScript.
          Here you can learn about React, how to build components, and more.
        </p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="Footer">
      &copy; 2024 My Website
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
