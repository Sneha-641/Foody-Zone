import React , {useState} from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import CustomSlider from './pages/CustomSlider';
import Footer from './pages/Footer';
import Newsletter from './pages/Newsletter';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Publications from './pages/Publications';
import Menu from './pages/Menu';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    const itemExists = cartItems.find((item) => item.id === dish.id);
    if (itemExists) {
      setCartItems(cartItems.map(item =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems =>
      cartItems.reduce((acc, item) => {
        if (item.id === id) {
          // If quantity is 1, remove the item
          if (item.quantity === 1) return acc;
          // Otherwise, decrease quantity
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [])
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar  cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}/>
      <HomeBanner/>
      <CustomSlider/>
      <About/>
      <Menu addToCart={addToCart}/>
      <Gallery/>
      <Publications/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
