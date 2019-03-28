import React from "react";

class Water extends React.Component{
    render() {
        return (
            <div className="box col-md-2 col-6">
            <p>Eau</p>
            <i className="material-icons" style={{fontSize: 100,color:"blue",backgroundColor:"#3A85FF"}}>local_drink</i>
            <p>{this.props.drink}</p>
            </div>
        );
    }
};

export default Water;