
import './App.css';
import BarreNavig from './components/BarreNavig'
import HomeProduct from './components/HomeProduct';
import Categorys from './pages/Categorys';
import Product from './pages/Product';
import Home from './pages/Home';
import AddProduct from'./pages/AddProduct';
import LoginSigneup from './pages/LoginSignup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png'
import LogIn from './pages/LogIn';
import Management from './pages/Management';


function App() {
  return (
    <div>
      <BrowserRouter>
      <BarreNavig/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens' element={<Categorys banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<Categorys banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Categorys banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/loginsigneup' element={<LoginSigneup/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/management' element={<Management/>}/>

      
        </Routes> 
        <Footer/>  
      </BrowserRouter>
    </div>
   
  );
}

export default App;
