import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class HeartRate extends React.Component{
    render() {
        return (
            <div className="box col-md-2 col-6">
            <p>Heart Rate</p>
            <i className="material-icons" style={{fontSize: 100,color:"red"}}>favorite</i>
            <p>{this.props.val} BPM</p>
            <Slider defaultValue={120} min={this.props.min} max={this.props.max} onChange={(val) => this.props.onChangeHr(val)} />

            </div>
        );
    }
};

export default HeartRate;