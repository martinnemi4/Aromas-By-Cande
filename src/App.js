import React from 'react';
import './App.css';
/*Importando navbar*/
import "./Components/NavBar/NavBar"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './Components/CartContext/CartContext';
import ShoppingCartIcon from './Components/CartWidget/CartWidget';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <NavBar></NavBar>
      </div>
      <header className="App-header">
        
        <h1 className='titulo'>AROMAS BY CANDE</h1>
      </header>
      <main className='product-cards'>
      <CartProvider value='Pablooo'>
      <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/carrito' element={<ShoppingCartIcon/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        </CartProvider>
      </main>
      </BrowserRouter>

      <footer>
        <p><b>Aromas By Cande&reg; <br></br> Web Design by <a href='https://www.linkedin.com/in/martin-nemi/' target="_blank">Martin Nemi</a> with ♥ and 🧠!</b></p>
      </footer>
    </div>
  );
}

export default App;


