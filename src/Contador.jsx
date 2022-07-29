import React, { Component } from "react";

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

    render () {
        const {carro, moto, onibus, carreta} = this.state
        return (
            <div>
                <h1>CARRO: {carro} </h1>
                <h1>MOTO: {moto} </h1>
                <h1>ÔNIBUS, CAMINHÃO: {onibus} </h1>
                <h1>CARRETA: {carreta} </h1>

                <button id="carro" onClick={() => this.setCarro()}>1 = CARRO</button>
                <button id="moto" onClick={() => this.setMoto()}>2 = MOTO</button>
                <button id="onibus" onClick={() => this.setOnibus()}>3 = ONIBUS E CAMINHÃO</button>
                <button id="carreta" onClick={() => this.setCarreta()}>4 = CARRETA</button>
            
            
            </div>
        )
    }
}