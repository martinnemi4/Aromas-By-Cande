import React from 'react';
import './App.css';
/*Importando navbar*/
import "./Components/NavBar/NavBar"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import Item from './Components/Item/Item';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <header className="App-header">
        
        <h1 className='titulo'>AROMAS BY CANDE</h1>
      </header>
      <main className='product-cards'>
        <ItemDetailContainer/>
      </main>

      <footer>
        <p><b>Aromas By Cande&reg; <br></br> Web Design by <a href='https://www.linkedin.com/in/martin-nemi/' target="_blank">Martin Nemi</a> with ♥ and 🧠!</b></p>
      </footer>
    </div>
  );
}

export default App;


