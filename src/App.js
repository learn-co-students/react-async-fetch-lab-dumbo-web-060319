import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleInSpace: []
    };
  }

  componentDidMount() {
    const fetchUrl = 'http://api.open-notify.org/astros.json'
    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => this.setState({
      peopleInSpace: data.people
    }))
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(p => p.name)}
      </div>
    );
  }

}

export default App;
