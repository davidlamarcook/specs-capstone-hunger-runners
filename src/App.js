import logo from './logo.svg';
import routes from './routes.js';
import LandingPage from './Components/LandingPage/LandingPage';
import { useState } from 'react';
import { CartContext } from './cart-context';


function App() {
  const cart = useState([])

  return (
    <CartContext.Provider value={cart}>
      <div className="App">
        {routes}
      </div>
    </CartContext.Provider>
  );
}

export default App;
