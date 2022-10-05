import React, { Component } from "react";
import ButtonInstance from "./ButtonInstance";

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggle:false}
        this.btn = new ButtonInstance()
        this.popOverlay = this.popOverlay.bind(this);
        this.removeOverlay = this.removeOverlay.bind(this)
        

    }

    removeOverlay() {
        this.setState({ isToggle: false})
        console.log(this.state.isToggle);
    }
    
    popOverlay() {
        this.setState({ isToggle: true});
        console.log(this.state.isToggle);
    }
   

    render() {

        return (

            <>
            
               {/* style={{ display: !this.state.isToggle ? "flex" : "none" }}  */}
                <div className="overlay" style={{ display: this.state.isToggle ? "flex" : "none" }} >


                    <div className="overlay-inner">
                        <div className="our_flex_c">

                            <div className="overlay_header">
                                <div className="overlay_header_inner">
                                    <h1>Your cart  </h1>
                                </div>
                                <div className="float_right">

                                    <img src="./order_cart.svg" alt="" />

                                </div>

                            </div>
                            <div className="our_flex_r">



                                <div className="overlay-content">
                                    <h1>Order details</h1>

                                </div>

                                <div className="overlay-content">
                                    <h1>Cart Total</h1>

                                    <h3>Total: </h3>
                                    <div className="our_flex_r">

                                        {this.btn.payNowBtn()} 
                                        {/* <div onClick={this.removeOverlay} className="btn" style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div> */}
                                         {this.btn.cancelBtn()}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>

        )


    }


}

export default Overlay;












