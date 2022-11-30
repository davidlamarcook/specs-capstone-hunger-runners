import logo from './logo.svg';
import routes from './routes.js';
import LandingPage from './Components/LandingPage/LandingPage';
import { useState } from 'react';
import { CartContext } from './cart-context';


function App() {
  const localCart = localStorage.getItem('cart');
  //console.log(JSON.parse(localCart))
  const cart = useState(localCart ? JSON.parse(localCart) : [])

  return (
    <CartContext.Provider value={cart}>
      <div className="App">
        {routes}
      </div>
    </CartContext.Provider>
  );
}

export default App;
