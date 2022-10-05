import { useContext } from "react";
import {userContext} from "./Icontext";


let Sample = () => {
let value = useContext(userContext)
console.log(value);
    return (<h1>{value+" popi"}</h1>)
        // {/* {value => <h1>Hello, {value.person.name}</h1>} */}
        

    
  
}

export default Sample