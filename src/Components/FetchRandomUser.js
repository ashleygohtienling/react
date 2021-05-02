//Fetching Data from an API 

import React from 'react'

export default class FetchRandomUser extends React.Component{

    state = {
        Loading: true,
        person: null,
    };
    async componentDidMount(){
        const url= "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], Loading: false})
        // this.setState({person: null, Loading: false})
    } 
    render(){

        if (this.state.loading){
             return <div> Loading... </div>  
        }

        if (!this.state.person){
            return <div> Didn't get a person</div>
        }
        return (
         <div>  
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <img src = {this.state.person.picture.large}/>
        </div>
        
        )};
    }

