import React from "react"
import {useNavigate} from "react-router-dom"

let ThankYou = () => {
let navigate = useNavigate()
    return (
        <div className="align-center">

            <div className="approve_div">
                <div className="our_flex_c">
                    <h1 className="approveTypo" style={{ textAlign: "center" }}>Transaction approved</h1>
                    <img src="/check.svg" alt="" />
                    <h1 style={{ textAlign: "center" }} > Thank you for support</h1>
                    <div className="btnApprove"    onClick={()=> navigate("/")}>
                        <h1>OK</h1>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ThankYou