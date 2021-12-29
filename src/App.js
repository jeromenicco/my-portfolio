import Navbar from './components/Navbar'
import About from './components/About'
import WhatIDo from './components/WhatIDo';
import Work from './components/Work';
import Contact from './components/Contact';

import { Link } from 'react-scroll'

import './App.css';
import './responsive.css'

function App() {
  
  return (
    <div className="app">
      <Navbar Link={Link} />
      <About Link={Link} />
      <WhatIDo />
      <Work />
      <Contact Link={Link} />

    </div>
  );
}

export default App;
