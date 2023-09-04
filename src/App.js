import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Resume from './components/Resume';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Work />
      <Education />
      <Skills />
      <Languages />
      <Resume />
    </div>
  );
}

export default App;
