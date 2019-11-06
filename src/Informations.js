import React, { Component } from 'react'
import {Media,Col,Carousel,} from 'react-bootstrap'
import data from './data'
import Home from'./Home'
export default class Infromations extends Component {

    render() {
        console.log(this.props)
//         let db = data.itemsFm.map(info => 

    
//             <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//         )
//       console.log(itemsFm);
        return (
            <div>
                <h1> Title : {this.props.itemsFm.title} </h1>
                <h2>location : {this.props.itemsFm.location}</h2>
         <img src={this.props.itemsFm.imgUrl}/>
         <h2>location : {this.props.itemsFm.location}</h2>
         <h2>Descreption : {this.props.itemsFm.description}</h2>
       
        
            </div>
        )
    }
}
