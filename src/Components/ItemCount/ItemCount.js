import { Component } from "react";
import { Placeholder } from "react-bootstrap";
import "../ItemCount/ItemCount.css"
import React from "react";


//Funcionamiento de los botones + y -


class ItemCount extends React.Component{
    constructor(){
    super();
    this.state= {
        counter: 1,
        disponibilidadStock: 13,
    }
      //Binding de la funcion
      //this.SumarContador = this.SumarContador.bind(this);
      //this.RestarContador = this.RestarContador.bind(this);
    }

SumarContador = () => {
    if (this.state.counter < this.state.disponibilidadStock) {
        this.setState({counter:this.state.counter + 1})
    } else {
        ;
    }
}

RestarContador = () => {
    if (this.state.counter > 1) {
        this.setState({counter:this.state.counter - 1})
    } else {
        
    }
}


    /*SumarContador = () => {
    this.setState({counter:this.state.counter + 1})
    }
    RestarContador = () => {
    this.setState({counter:this.state.counter - 1})
    }*/

    render(){
    return(
        <div>
        <div className='CounterSection'>
            <p>Stock Disponible: {this.state.disponibilidadStock}</p> 
            <p>Cantidad: {this.state.counter}</p>
        </div>
        <div className='Buttons'>
            <button onClick={this.SumarContador}>Sumar</button>
            <button onClick={this.RestarContador}>Restar</button>
            <button>Agregar al carrito</button>
        </div>
        </div>
    )
    }
}

export default ItemCount;






