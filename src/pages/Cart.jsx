// import React, { useContext } from "react";
// import ButtonInstance from "../components/ButtonInstance";
// import Footer from "../components/footer"
import { useState } from "react";
// import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Nav from "../components/nav";
import Total from "../components/Total"
import Order from "../components/Order"
// import Ctx, { customer } from "../Ctx";


let BillingCard = (props) => {
    let navigate = useNavigate()
    let [cartONOff, openCloseCart] = useState(true);
    // console.log(customer);
    // openCloseCart()
    // let [customerDetails, setDetails] = useState(customer)

    let [input, setInput] = useState("");

    let handleChange = (e) => {
        e.preventDefault();
        // alert(e.tartget.name);
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))


    }

    let handleSubmit = (e) => {
        e.preventDefault()
        
            alert(input.firstName)
       
        navigate("/confirmation");

    }


    return (<>

        <div className="overlayCart">
            <form onSubmit={handleSubmit}>
                <div className="billing-flex" style={{ visibility: cartONOff ? "visible" : "hidden" }}>


                    <div className="billing_card">

                        <div className="billing_card_inner">
                            <div className="billing_content">
                                <h3>Payment</h3>
                                <label htmlFor="">
                                    Name on card:
                                    <input type="text" name="nameOnCard" id="" onChange={handleChange} />
                                    <hr />
                                </label>

                                <label htmlFor="">
                                    Card Number :
                                    <input type="text" name="cardNumber" id="" onChange={handleChange} />
                                    <hr />
                                </label>
                                <label htmlFor="">
                                    EXP :
                                    <input type="text" name="EXPdate" id="" onChange={handleChange} />
                                    <hr />
                                </label>
                                <label htmlFor="">
                                    CVV
                                    <input type="text" name="CVV" id="" onChange={handleChange} />
                                    <hr />
                                </label>




                            </div>

                            <div className="billing_content">
                                <h3>Billing Address</h3>

                                <label htmlFor="">
                                    Firstname:
                                    <input type="text" name="firstName" id="" onChange={handleChange} />
                                    <hr />
                                </label>

                                <label htmlFor="">
                                    Lastname :
                                    <input type="text" name="lastName" id="" onChange={handleChange} />
                                    <hr />
                                </label>
                                <label htmlFor="">
                                    Street address
                                    <input type="text" name="street" id="" onChange={handleChange} />
                                    <hr />
                                </label>
                                <label htmlFor="">
                                    Suburb :
                                    <input type="text" name="suburb" id="" onChange={handleChange} />
                                    <hr />
                                </label>

                                <label htmlFor="">
                                    Province
                                    <input type="text" name="province" id="" onChange={handleChange} />
                                    <hr />
                                </label>
                                <label htmlFor="">
                                    Zip Code :
                                    <input type="text" name="zipCode" id="" onChange={handleChange} />
                                    <hr />
                                </label>


                            </div>


                        </div>
                        <div className="our_flex_r">
                            {/* onClick={OpenCloseCart} onClick={() => navigate("/thanks")}*/}

                            <button className="btn" type="submit" onClick={() => handleChange} style={{ height: 55, width: 150, color: "green", marginRight: 5 }}> <div className="btnTypo" style={{ textDecorationColor: "null" }}>Pay</div> </button>
                            <div className="btn" onClick={() => navigate("/")} style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div>
                        </div>
                    </div>


                    <div className="billing_card_right">

                        <div className="billing_card_inner_right">

                            <div className="billing_content">

                                <div className="title-flex_order_details">

                                    <div className="title_badge_order_details">
                                        <h5>Order details</h5> <img src="./order.svg" alt="" />
                                    </div>
                                    <Order total={props.total} order={props.order} />
                                    <h4>Total:{props.total} </h4>

                                </div>

                            </div>


                        </div>

                    </div>



                </div>
            </form>


        </div>

    </>)
}

let Cart = (props) => {

    return (
        <>
            <Nav />
            <BillingCard total={props.total} />
            <Total />
        </>
    )



}

export default Cart;




