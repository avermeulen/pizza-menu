import React, { Component } from "react";



class ButtonInstance extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggle: false }
        this.popOverlay = this.popOverlay.bind(this);
        this.removeOverlay = this.removeOverlay.bind(this)
    }

    removeOverlay() {
        this.setState({ isToggle: !this.state.isToggle })
    }

    popOverlay() {
        this.setState({ isToggle: !this.state.isToggle});
               return( <div className="overlay" onClick={this.removeOverlay} style={{ display: this.state.isToggle ? "flex" : "none" }} >
                </div>)
    }

    homeBtn() {
        return (<div className="btn"> <div className="btnTypo" >Home</div> </div>)
    }

    cartBtn() {
        return (
            <>
                <div className="btn" onClick={this.popOverlay} > <div className="btnTypo" >To Cart</div> </div>
            </>
        )
    }

    checkOutBtn() {
        return (<div className="btn"> <div className="btnTypo" >To Checkout</div> </div>)
    }

    payNowBtn() {
        return (<div className="btn" style={{ height: 55, width: 150, color: "green", marginRight: 5 }}> <div className="btnTypo" >Pay</div> </div>)
    }

    cancelBtn() {
        return (<div onClick={this.removeOverlay} className="btn" style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div>)
    }

    render() {
        return (
            <div className="overlay" onClick={this.removeOverlay} style={{ display: !this.state.isToggle ? "flex" : "none" }} >
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

                                    {this.btn.payNowBtn()} {this.btn.cancelBtn()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}


export default ButtonInstance