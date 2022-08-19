import React from 'react';
import './App.css';
/*Importando navbar*/
import "./components/NavBar.js"
import NavBar from './components/NavBar.js';
import ItemListContainer from "./components/ItemListContainer"





function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <ItemListContainer></ItemListContainer>
      </div>
      <header className="App-header">
        
        <p>
          Aromas By Cande <br></br>Tienda Online
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a la tienda
        </a>
      </header>
    </div>
  );
}

export default App;
