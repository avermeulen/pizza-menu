import {useState} from "react"

let FormCtx = ({children})=>{


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

    return (
        null
    )
}

export default FormCtx