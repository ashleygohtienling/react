import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error"
import Navigation from "./Components/Navigation"
import FetchRandomUser from "./Components/FetchRandomUser"
import React, {Component} from 'react'
import UseForm from './Components/UseForm';


class App extends Component{

  getUser =(e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user); 

  }

  render (){
  return (
      <>
      <BrowserRouter>
       <Navigation />
     <Switch>
      {/* <Route exact path = "/" component = {FetchRandomUser} /> */}
      <Route path = "/About" component = {About}/> 
      <Route path = "/Error" component= {Error} />
      <UseForm getUser = {this.getUser}/>
      </Switch>
      </BrowserRouter>
      
      </>

    
  );
  };
}
export default App;
