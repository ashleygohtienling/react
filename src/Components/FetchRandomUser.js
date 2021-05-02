//Fetching Data from an API 

import React from 'react'

export default class FetchRandomUser extends React.Component{

    state = {
        Loading: true,
        people: []
    };
    async componentDidMount(){
        const url= "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({people: data.results, Loading: false});
        // this.setState({person: null, Loading: false})
    } 
    render(){

        if (this.state.loading){
             return <div> Loading... </div>  
        }

        if (!this.state.people.length){
            return <div> Didn't get a person</div>
        }
        return (
         <div>  
             {this.state.people.map((person,i) => (
                 <div key ={i}>
                    <div>{person.name.title}</div>
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                    <img src = {person.picture.large}/>
                 </div>
             ))}
            
        </div>
        
        )};
    }

