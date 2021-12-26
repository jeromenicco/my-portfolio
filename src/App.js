
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work';
import Contact from './components/Contact';

import './App.css';
import { useEffect } from 'react/cjs/react.development';

function App() {

  const htmlElement = document.querySelector('body')

  console.log(htmlElement)


  const scrollToPreventBounce = (htmlElement) => {
    const {scrollTop, offsetHeight, scrollHeight} = htmlElement;
      if (scrollTop <= 0) {
        htmlElement.scrollTo(0, 1);
        return;
      }
      if (scrollTop + offsetHeight >= scrollHeight) {
        htmlElement.scrollTo(0, scrollHeight - offsetHeight - 1);
      }
  }

  useEffect(() => {
    htmlElement.addEventListener('touchstart', scrollToPreventBounce);
    return () => htmlElement.removeEventListener('touchstart', scrollToPreventBounce);
  })

  
  return (
    <div className="app">
      <Navbar />
      <About />
      <Work />
      <Contact />

    </div>
  );
}

export default App;
