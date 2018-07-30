import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNote: false,
      notes: []
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: !this.state.showNote
    });
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({notes: res.data}))
    .catch((err) => console.log(err.response.data));
  }

  render() {

    const { showNote, notes } = this.state;

    return (
      <div>
        <Nav toggleNote={this.toggleNote} showNote={showNote}/>  
        { showNote ? 
          <Note /> 
          : 
          <List 
            getNotes={this.getNotes}
            notes = {notes}
          /> 
          }
      </div>
    );
  }
}

export default App;
