import React from "react"
import Sample from "./Sample"


export let userContext = React.createContext()

export let Icontext = ()=> {

return (
<userContext.Provider value={"Peta"}>

<Sample />

</userContext.Provider>


) 
}

export  default Icontext;
