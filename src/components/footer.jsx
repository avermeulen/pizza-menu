import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingCard from "../pages/Cart"

import ErrorMsg from "../pages/ErrorMsg";

export default function Footer(props) {
    let [isToggle, setToggle] = useState(false);
    let [cartONOff, openCloseCart] = useState(false);
    let [errorMsg,toggleError] = useState(false);
    let navigate = useNavigate();
    // var  error = null;

    // const classes = this.state.open ? 'basket' : 'basket hide'


    let popOverlay = (error) => {
        if(props.total > 0.00){
            setToggle(!isToggle)
        }else if(props.total <= 0.00){
        
         toggleError(!errorMsg)
         setTimeout(()=>!errorMsg,3000 )
        }

        }
    let OpenCloseCart = () => {
        openCloseCart(!cartONOff)
        setToggle(!isToggle)
    }
    // console.log(error);
    function CartOverlay() {

        return <div className="overlayCart" style={{ display: cartONOff ? "flex" : "none" }}>
            <div className="our_flex_r" style={{ display: cartONOff ? "flex" : "none" }}>
                <div className="cartOverlayInner" >
                    <div className="cartOverlayContent">
                        <BillingCard total={props.total} />

                        <div className="our_flex_r">
                            <div onClick={() => navigate("/thanks")}  className="btn" style={{ height: 55, width: 150, color: "green", marginRight: 5 }}> <div className="btnTypo" style={{ textDecorationColor: "null" }}>Pay</div> </div>
                            <div className="btn" onClick={OpenCloseCart} style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>;
    }
    return (
        <>
        {/* {props.total <= 0.00 ?<Test />:"" }  */}
            <CartOverlay />
            <ErrorMsg bool={errorMsg} />
            <footer>
                <div className="btn">
                    <div className="btnTypo" >
                        Home
                    </div>
                </div>

                <div className="btn" onClick={popOverlay} >
                    <div className="btnTypo"  >
                        To Cart
                    </div>
                </div>

                <div className="overlay" style={{ display: isToggle ? "flex" : "none" }} >
                    <div className="overlay-inner">
                        <div className="our_flex_c">
                            <div className="overlay_header">
                                <div className="overlay_header_inner">
                                    <h1>Your cart 1</h1>
                                </div>
                                <div className="float_right">
                                    <img src="./order_cart.svg" alt="" />
                                </div>
                            </div>
                            <div className="our_flex_r">
                                <div className="overlay-content">
                                    <h1>Order details</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Pizza</th><th>QTY</th><th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.order.map((el) => (<tr>
                                                <td>{el.nameAndSize()}</td>
                                                <td>{el.QTY}</td>
                                                <td>{el.price}</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Tota Grand</td><td colSpan={2}>{props.total}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="overlay-content">
                                    <h1>Cart Total 2</h1>
                                    <h3>Total:R{props.total} </h3>
                                    <div className="our_flex_r">
                                        {/* navigate(`/cart/${props.total}/${props.order}`) */}
                                        <div onClick={OpenCloseCart} className="btn" style={{ height: 55, width: 150, color: "green", marginRight: 5 }}> <div className="btnTypo" style={{ textDecorationColor: "null" }}>Pay R{props.total}</div> </div>
                                        <div className="btn" onClick={popOverlay} style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

