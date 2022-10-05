import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import Total from "./Total"
import { ctxTotal } from "../Ctx"
import { useContext } from "react"
export default class SpecialsMenu extends React.Component {


    render() {

        return (<>

            <Nav />
            <Total />
                    <div className="spacer">
                    </div>
            <div className="our_flex_r">
            <div className="specials">

                <div className="specials_inner">

                    <h2 style={{ textAlign: "center", marginBottom: 1, paddingBottom: 0 }}> Veggie  and BBQ pizzas large at R<span style={{ color: "green" }}>41.99</span> </h2>
                    <div className="our_flex_r">
                        <img style={{ margin: 4, height: 200, width: 300, borderRadius: 10 }} src="./veggieII.jpeg" alt="" />
                        <img style={{ margin: 4, height: 200, width: 300, borderRadius: 10 }} src="./bbq.jpeg" alt="" />
                    </div>

                    


                </div>

            </div>

            <div className="specials_right">

                <div className="specials_right_inner">
                    <h2 className="h2">BBQ Veggie Combo</h2>
                    <h3>Large BBQ pizza * 1</h3>
                    <h3>Large BBQ pizza * 1</h3>
                    <h3>Free Pizza Cave headsets <img src="./headsets.svg" alt="" /> </h3>
                    <hr style={{background:"red"}}/>

                    <h4>All for <span style={{fontSize:32}}>R</span><span style={{color:"green", fontSize:30}}>41.99</span></h4>
                    <img style={{width:50,height:50,marginLeft:"auto",marginRight:"auto"}} src="./exploding.svg" alt="" />
                </div>

            </div>


            </div>
            {/* <Footer /> */}
        </>)
    }



}