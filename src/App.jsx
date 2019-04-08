import React, { Component } from 'react';
import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';

const sampleSimpson = {
     quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
     character : "Nelson Muntz",
     image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
     characterDirection : "Left"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson:  sampleSimpson
    };
  }
  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson:  data[0],
        });
    });
    }

  render() {
    return (
      <div>
        <GenerateQuote  selectQuote={() =>  this.getQuote()}  />
        <DisplayQuote  simpson={this.state.simpson}  />
      </div>
    )
  }
}

export default App;
