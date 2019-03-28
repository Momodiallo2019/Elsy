import React from "react";

import Slider from "rc-slider";

import 'rc-slider/assets/index.css';

class Temperature extends React.Component{
    render() {
        return (
            <div className="box col-md-2 col-6">
             <p>Weather</p>
            <i className="material-icons" style={{fontSize: 100,color:"yellow"}}>wb_sunny</i>
            <p>{this.props.val} °C</p>
                <Slider defaultValue={20} min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeT(val)} />
            </div>
        );
    }
};

export default Temperature;