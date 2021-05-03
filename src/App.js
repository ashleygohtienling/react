import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error"
import Navigation from "./Components/Navigation"
import FetchRandomUser from "./Components/FetchRandomUser"
import React, {Component} from 'react'
import UseForm from './Components/UseForm';
import axios from "axios";


class App extends Component{
  state = {
    repos: null

  }

  getUser =(e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user){

      axios.get('https://api.github.com/users/${user}')
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({repos})
    })   
    } else return;

  }

  render (){
  return (
      <>
      <BrowserRouter>
       <Navigation />
     <Switch>
      {/* <Route exact path = "/" component = {FetchRandomUser} />  */}
      <Route path = "/About" component = {About}/> 
      <Route path = "/Error" component= {Error} />
      <UseForm getUser = {this.getUser}/>
      {this.state.repos ? <p> Number of repos: {this.state.repos}</p> : 
      <p> Please enter a username.</p>}
      </Switch>
      </BrowserRouter>
      
      </>

    
  );
  };
}
export default App;
