import React, { Component } from 'react'
import {Media,Col,Carousel,} from 'react-bootstrap'
import data from './data'
import Home from'./Home'
import './App.css'
export default class Infromations extends Component {

    render() {
        console.log(this.props)

        return (
            <div className="backg">
                <h1>  {this.props.itemsFm.title} </h1>
         <img src={this.props.itemsFm.imgUrl}/>
         <h2 className="lo">location : {this.props.itemsFm.location}</h2>
         <h2>Descreption : {this.props.itemsFm.description}</h2>
       
        
            </div>
        )
    }
}
