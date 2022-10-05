import React, { useState, createContext } from "react";
import Services from "./Service"
// import { useNavigate } from "react-router-dom";



export let ctxTotal = createContext(0.00)
export let customer = createContext({
    
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
export let customerCTX = createContext(customer)

let Ctx = ({children}) => {
    let menu = Services()


    let [total, setTotal] = useState(menu.getGrandTotal());

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



    // let pizzaAdded = () => {
    //     menu.addPizza("Bbq", "small");
    //     setTotal(menu.getGrandTotal())  

    //}

    // setTotal()
    // let BtnNavigate = () => {
    //     let navigate = useNavigate()
    //     let goToTest = () => navigate("/test");
    //     return <input type={"button"} value={"To test page"} onClick={goToTest} />


    // };
    // let Btn = () => (<div style={{ backgroundColor: "blue", width: "100px", height: "100" }}>
    //     <h1>{"results"}</h1>
    //     <input type={"button"} value={total} onClick={pizzaAdded} />
    // </div>)




    return (
<>
    <ctxTotal.Provider value={[total,setTotal]}>
       {children}
    
    </ctxTotal.Provider>
    <customerCTX.Provider value={[customerDetails,setDetails]}>

    {/* {children} */}
    

    </customerCTX.Provider>

</>    







    )
}


// let SampleDisplay = () => {
//     let results = useContext(ctxTotal);

//     return <h1>R{results}</h1>

// }

export default Ctx;

