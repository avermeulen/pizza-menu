import React, { Component } from "react";
import Card from "./card";
// import Service from "../Service";

// let serve = new Service();

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {Data:null}
    }

    render() {
        return (
            <main>

                <div className="main_menue">
                    <Card />                   
                </div>

               
            </main>
        );
    }
}

export default Main;
