// import './App.css';
import Cart from './CartPage/Cart';
import Coffee from './coffeeCatalogue/Coffee';
import User from './component/User';
import Navbar from './context/Navbar';
import Counter from './counter/Counter';
import Form from './form/Form';
import Tours from './Tours/Tours';
import Userdetails from './Usercomponet/Userdetails';
import {Themeprovider} from './context/themeprovider';
import Cocktail from './Cocktails/Cocktail';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Cocktail/>
    </BrowserRouter>
  );
}

export default App;
