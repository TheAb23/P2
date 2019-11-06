import React, { Component } from 'react'
import './App.css';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import {
  BrowserRouter, Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Home';
import Spacevoices from './Spacevoices';
import Informations from './Informations';



export default class App extends Component {
  state = {
    items: [],
    isLoaded: false,
  }

  Moons= (e) =>  {
    console.log(e)
    const ja = e.target.elements.Seachres.value
    e.preventDefault()
    fetch(`https://images-api.nasa.gov/search?q=${ja}&description=moon%20landing&media_type=image`)
      .then(res => res.json())
      
      .then(data => {
        let importantData = []
        console.log(data.collection.items[99].links[0].href);
        
        data.collection.items.forEach((ele, index)=> {
          if(index < 100){
            importantData.push({ 
              imgUrl: ele.links[0].href, 
              description: ele.data[0].description, 
              title: ele.data[0].title, 
              location: ele.data[0].location 
            })
          }
          
        })

        console.log("ab:  ",data)
        // console.log(importantData)
        this.setState({
          isLoaded: true,
          items: data,
          itemsFm: importantData

        });
      })
      .catch(err => console.log(err));
  }
  render() {
  
    console.log(this.state.itemsFm)
    
    console.log(this.state)
    return (
      <div>
        <BrowserRouter>
          <Navbar.Brand href="">
          </Navbar.Brand>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              
              <Nav.Link href="Spacevoices">Space Voices</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.Moons}>
              <FormControl name="Seachres" type="text" placeholder="Search" className="mr-sm-2" />
              <Button type="submit" variant="dark">Search</Button>
            </Form>
          </Navbar>
       
        
          {this.state.itemsFm!==undefined &&this.state.itemsFm.map((item)=>{
            return <Informations itemsFm = {item}/>
          })}

          <Switch>
            <Route path='/Home' component={Home} exact />
            <Route path='/Informations/:name' render={() => (this.state.items.length > 0) ? <Informations items={this.state.items.collection}/> : "null"}/>
            <Route path='/Spacevoices' component={Spacevoices} />
            <Route path='/' component={Home} />
          </Switch>
          
        </BrowserRouter>

      </div>
    );
  }

}
