import React, { useContext } from "react"
import { ctxTotal } from "../Ctx"


let Test = () => {
    let total = useContext(ctxTotal);
    console.log(total);


    return (<ctxTotal.Consumer>
        {(value) => <h1>R{value}</h1>}
    </ctxTotal.Consumer>
    )
}

export default Test