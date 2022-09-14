import React from 'react';
import './App.css';
/*Importando navbar*/
import "./Components/NavBar/NavBar"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import Item from './Components/Item/Item';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
      <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </main>
      </BrowserRouter>

      <footer>
        <p><b>Aromas By Cande&reg; <br></br> Web Design by <a href='https://www.linkedin.com/in/martin-nemi/' target="_blank">Martin Nemi</a> with ♥ and 🧠!</b></p>
      </footer>
    </div>
  );
}

export default App;


