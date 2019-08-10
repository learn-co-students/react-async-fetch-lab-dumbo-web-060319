// create your App component here
import React, { Component } from 'react'

export default class App extends Component{

    state={
        peopleInSpace:[]
    }

    render(){
        return(
            <div>
            { this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>) }
            </div>
        )
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>resppnse.json())
        .then(({people}) => this.setState({ peopleInSpace: people }))
    }

   
}
