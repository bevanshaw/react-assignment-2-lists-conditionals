import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import char from './Char/Char';

class App extends Component {
  state = {
    input: '',
    inputLength: 0,
    charList: []
  }

  inputChangeHandler = (event) =>{
    const textInput = event.target.value;
    const textInputArray = textInput.split('');
    const textLength = textInputArray.length;
    this.setState({input: textInput, inputLength: textLength, charList: textInputArray}); 
  }

  removeCharHandler = (index) => {
    const arrayCopy = [...this.state.charList];
    //Update passed in array copy.
    arrayCopy.splice(index,1);
    //Set array copy to state array.
    const updateText = arrayCopy.join('');
    this.setState({input: updateText, inputLength: updateText.length, charList: arrayCopy });
  }

  render() {

    const charList = [...this.state.charList].map((char, index) => {
      return (<Char 
        character={char} 
        key={index}
        clicked={() => this.removeCharHandler(index)}/>);
    });


    return (
      <div className="App">
        <input 
        type='text' 
        onChange={(event) => this.inputChangeHandler(event)} 
        value={this.state.input}/>
        <p>The length of the entered text is: {this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength}/>
        {charList}
        
      </div>
    );
  }
}

export default App;
