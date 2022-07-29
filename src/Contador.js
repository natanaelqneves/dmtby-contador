import React, { Component } from "react";
import './Contador.css'
export default class Contador extends Component {

    constructor() {
        super();
        this.state = {
            carro: 0,
            moto: 0,
            onibus: 0,
            carreta: 0
        }
    }
    

    setCarro() {
        this.setState({carro: this.state.carro + 1})
    }

    setMoto() {
        this.setState({moto: this.state.moto + 1})
    }
   
    setOnibus() {
        this.setState({onibus: this.state.onibus + 1})
    }

    setCarreta() {
        this.setState({carreta: this.state.carreta + 1})
    }

    setZero() {
        this.setState({carro: 0})
        this.setState({moto: 0})
        this.setState({onibus: 0})
        this.setState({carreta: 0})
    }

    render () {
        const {carro, moto, onibus, carreta} = this.state
        return (
        <div className="container">  

        <div>
            
        </div>

        <div>                 
            <h1>1 - CARRO: {carro} </h1>
            <h1>2 - MOTO: {moto} </h1>
            <h1>3 - ÔNIBUS, CAMINHÃO: {onibus} </h1>
            <h1>4 - CARRETA: {carreta} </h1>        
        </div>
   
                
            <div>
                <button id="carro" onClick={() => this.setCarro()}>CARRO</button>
                <button id="moto" onClick={() => this.setMoto()}>MOTO</button>
                <button id="onibus" onClick={() => this.setOnibus()}>CAMINHÃO</button>
                <button id="carreta" onClick={() => this.setCarreta()}>CARRETA</button>
                <button id="zerar" onClick={() => this.setZero()}>Z ZERAR</button>
    
            </div>
        </div>    
        )
    }
}