import logo from './logo.svg';
import routes from './routes.js';
import LandingPage from './Components/LandingPage/LandingPage';
import { useState } from 'react';
import { CartContext } from './cart-context';
import {SeatContext} from './seating-context';


function App() {
  const localCart = localStorage.getItem('cart');
  //console.log(JSON.parse(localCart))
  const cart = useState(localCart ? JSON.parse(localCart) : [])
  const seating = useState({})

  return (
    <SeatContext.Provider value={seating}>
    <CartContext.Provider value={cart}>
      <div className="App">
        {routes}
      </div>
    </CartContext.Provider>
    </SeatContext.Provider>
  );
}

export default App;
