import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Temperature from './components/Temperature';


const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends React.Component {

  // Etape 1 : créer le construteur ( avec le state )
  constructor(props) {
    super(props);
    this.state = {
      heart: 120,
      steps: 4000,
      Temperature: -10
    };
  }

  // fin #####################################################

  // Etape 2 : on crée la fonction qui change la valeur du state definit plus haut
  
  onChangeHeartRate = (value) => {
    this.setState({heart: value});
  }

  onChangePerson = (value) => {
    this.setState({steps: value});
  }

  onChangeTemperature = (value) => {
    this.setState({sun: value});
  }
  // fin ########################################################

  // Etape 3 a partir de la ligne 41 ( on envoie la valeur du state dans la balise qui appele le composant et on envoie la fonction)

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <Person min={MIN_STEPS} max={MAX_STEPS} val={this.state.steps} onChangeP={this.onChangePerson} /> 
            <HeartRate min={MIN_HEART} max={MAX_HEART} val={this.state.heart} onChangeHr={this.onChangeHeartRate} />
            <Water />
            <Temperature min={MIN_TEMPERATURE} max={MAX_TEMPERATURE} val={this.state.sun} onChangeT={this.onChangeTemperature} />
          </div>  
          </div>
    );
  }
}

export default App;
