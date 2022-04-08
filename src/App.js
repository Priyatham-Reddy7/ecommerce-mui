import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { ProductContext } from './context/ProductContext';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {

  const [products, setProducts] = useState([])

  //Fetching data from the API
  useEffect(() => {
      const getResponse = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      setProducts(data)
      }
      getResponse()
  }, [])

  return (
    <ProductContext.Provider value={products}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:params' element={<Details />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
