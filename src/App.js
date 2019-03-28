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
      steps: 3000,
      temperature: -10,
      water: 1.5
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
    this.setState({temperature: value});
  }

  // PARTIE CALCULATE WATER

  // je definis la méthode ligne 47 
  // je crée une var ligne 50
  // je crée une condition par la suite
  // je rajoute Water o render pr rappeler ma fonction et ses composants
  // on rappel le drink de water drink contenu dans notre render dans la partie js ( ligne 9)



calculWater = (heart, temperature, steps) => {
  let tempwater = this.state.water;

    if(this.state.temperature > 20) {
      let diffTemp = (this.state.temperature - 20) * 0.02;
    tempwater = tempwater + diffTemp;
      }
    if(this.state.heart > 120) {
      let diffHeart = (this.state.heart - 120) * 0.0008;
      tempwater = tempwater + diffHeart;
      } 
    if(this.state.steps > 10000) {
      let diffSteps = (this.state.steps - 10000) * 0.00002;
      tempwater = tempwater + diffSteps;
    }
  
    return tempwater.toFixed(2);
  }



  // fin ########################################################

  // Etape 3 a partir de la ligne 41 ( on envoie la valeur du state dans la balise qui appele le composant et on envoie la fonction)

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <Water drink={this.calculWater(this.state.temperature,this.state.heart,this.state.steps)}/>
            <Person min={MIN_STEPS} max={MAX_STEPS} val={this.state.steps} onChangeP={this.onChangePerson} /> 
            <HeartRate min={MIN_HEART} max={MAX_HEART} val={this.state.heart} onChangeHr={this.onChangeHeartRate} />
            <Temperature min={MIN_TEMPERATURE} max={MAX_TEMPERATURE} val={this.state.temperature} onChangeT={this.onChangeTemperature} />
          </div>  
          </div>
    );
  }
}

export default App;
