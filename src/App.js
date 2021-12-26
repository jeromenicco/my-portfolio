import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work';
import Contact from './components/Contact';

import './App.css';

function App() {

  const htmlElement = document.querySelector('body')
  
  useEffect(() => {
    afterRender()
    return () => {
      beforeRemove()
    }
  },)



  const scrollToPreventBounce = (htmlElement) => {
    const {scrollTop, offsetHeight, scrollHeight} = htmlElement;
      // If at top, bump down 1px
      if (scrollTop <= 0) {
        htmlElement.scrollTo(0, 1);
        return;
      }
      // If at bottom, bump up 1px
      if (scrollTop + offsetHeight >= scrollHeight) {
        htmlElement.scrollTo(0, scrollHeight - offsetHeight - 1);
      }
  }
  // When rendering the element
  function afterRender() {
     htmlElement.addEventListener('touchstart', scrollToPreventBounce);
  }
  // Remember to clean-up when removing it
  function beforeRemove() {
     htmlElement.removeEventListener('touchstart', scrollToPreventBounce);
  }


  
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
