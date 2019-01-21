import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }




  render() {
    return (
      <div>
        <div className="Title">
          Simple Todo List
        </div>
        <br />
        <br />

        <form className="App" onSubmit={this.onSubmit}>


          <input type="text" placeholder="Enter an item:" input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>

        </form>

        <List items={this.state.items} />

      </div >
    );
  }
}

export default App;