import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Banner_nav from "./Components/Banner_navbar/Banner_nav";
import Navbar from "./Components/Navbar/Navbar";
import Flash_Sale from './Components/Flash_Sale/Flash_Sale';
import { ProductsProvider } from './Components/Context/Context';
import Categories from './Components/Categories/Categories';
import Allproduct from './Components/Allproduct/Allproduct';

function App() {
  return (
    <ProductsProvider>
          <Router> 
    <Banner_nav />
    <Navbar />
    <Banner/>
    <Flash_Sale/>
    <Categories/>
    <Allproduct/>

    <Routes>
      
    
    </Routes>
  </Router>
    </ProductsProvider>
  );
}

export default App;
