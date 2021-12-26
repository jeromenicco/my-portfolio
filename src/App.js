import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work';
import Contact from './components/Contact';

import { Link } from 'react-scroll'

import './App.css';

function App() {
  
  return (
    <div className="app">
      <Navbar Link={Link} />
      <About Link={Link} />
      <Work />
      <Contact Link={Link} />

    </div>
  );
}

export default App;
