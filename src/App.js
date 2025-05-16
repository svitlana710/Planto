import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Navigation } from './components/Navigation.jsx';
import { Shop } from './components/Shop.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { Moreinfo } from './components/Moreinfo.jsx';
import { Footer } from './components/Footer.jsx';
import { Search } from './components/Search.jsx';
import { CartProvider } from './components/CartContext.jsx';
import { ShoppingCart } from './components/Cart.jsx'; 
import './css/style.css';
import 'slick-carousel/slick/slick.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [formScriptLoaded, setFormScriptLoaded] = useState(false);

  const handleOpenCart = (isVisible) => {
    setIsCartVisible(isVisible);
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);

    const script = document.querySelector('script[src="./js/form.js"]');

    if (script) {
      document.body.removeChild(script);
      setFormScriptLoaded(false);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './js/script.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isCartVisible && !formScriptLoaded) {
      const script = document.createElement('script');
      script.src = './js/form.js'; 
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
      setFormScriptLoaded(true);

      return () => {
        const scriptElement = document.querySelector('script[src="./js/form.js"]');
        if (scriptElement) {
          document.body.removeChild(scriptElement);
          setFormScriptLoaded(false);
        }
      };
    }
  }, [isCartVisible, formScriptLoaded]);

  return (
    <Router>
      <CartProvider>
        <Navigation onOpenCart={handleOpenCart} />
        {isCartVisible && <ShoppingCart onClose={handleCloseCart} />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main">
                  <Shop />
                  <Testimonials />
                  <Moreinfo />
                </main>
              </>
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
