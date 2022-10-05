import {useState} from "react"
// import Footer from "../components/footer"
// import Main from "../components/main"
// import Nav from "../components/nav"
import {useNavigate} from "react-router-dom"


let Confirmation = ( state)=>{
let [customerDetails,setDetails] = useState({

    firstName:"",
    lastName:"",
    street:"",
    suburb:"",
    province:"",
    zipCode:"",
    nameOnCard:"",
    EXPdate:"",
    CVV:""
})

let navigate = useNavigate()

//style={{ display: isToggle ? "flex" : "none" }}

    return (
        
        <>
        <div className="overlayCart">
            <form onSubmit={"handleSubmit"}>
            <div className="billing-flex" style={{visibility:"cartONOff"?"visible":"hidden"}}>  
  

                <div className="billing_card">

                    <div className="billing_card_inner">
                        <div className="billing_content">
                            <p>First Name :{customerDetails.firstName}</p>
                            <p>Last Name :{customerDetails.lastName}</p>
                            <p>Street :{customerDetails.street}</p>
                            <p>Province :{customerDetails.province}</p>
                            <p>Suburb : {customerDetails.suburb}</p>
                            <p>Zip : {customerDetails.zipCode}</p>
                            
                            




                        </div>

                        <div className="billing_content">
                            <h3>Billing Address</h3>

                        </div>


                    </div>
                    <div className="our_flex_r">
                        {/* onClick={OpenCloseCart} onClick={() => navigate("/thanks")}*/}
                        
                        <button className="btn"  type="submit" onClick={() =>"handleChange"} style={{ height: 55, width: 150, color: "green", marginRight: 5 }}> <div className="btnTypo" style={{ textDecorationColor: "null" }}>Pay</div> </button>
                        <div className="btn" onClick={()=>navigate("/")} style={{ height: 55, width: 150, color: "red", marginLeft: 5 }}> <div className="btnTypo" >Cancel</div> </div>
                    </div>
                </div>


                <div className="billing_card_right">

                    <div className="billing_card_inner_right">

                        <div className="billing_content">

                            <div className="title-flex_order_details">

                                <div className="title_badge_order_details">
                                    <h5>Order details</h5> <img src="./order.svg" alt="" />
                                </div>
                                {/* <Order total={props.total} order={props.order} /> */}
                                <h4>Total:{} </h4>

                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </form>


            </div>
        
        </>
    )
}


export default Confirmation;