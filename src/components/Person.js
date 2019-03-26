 import React from "react";
   import Slider from "rc-slider";

   import 'rc-slider/assets/index.css';

class Person extends React.Component{
    render() {
        return (
            <div className="box col-md-2 col-6">
            <p>Nombres de pas</p>
            <i className="material-icons" style={{fontSize: 100,color:"black"}}>directions_walk</i>
            <p>{this.props.val} steps </p>
               <Slider min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeP(val)} />  
            </div>
        );
    }
};

export default Person;