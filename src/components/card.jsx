import React, { Component } from "react";
import Service from "../Service";
import AddRemove from "./AddRemove";





class Card extends Component {
    constructor(props) {
        super(props);

        this.pizza =  Service();
        // this.tot =  AddRemove()


    }



    render() {
        return <>
        
        <AddRemove />
        </>
    }
}
export default Card;