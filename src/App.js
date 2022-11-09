import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Aboutpage from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={ <Home /> } />
          <Route path='/cart' element = { <Cart />} />
          <Route path='/about' element = { <Aboutpage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
