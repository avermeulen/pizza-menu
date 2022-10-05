import { Component } from "react";
import Service from "../Service";


// let Total_ = (props)=>{


// }

class Total extends Component {
    constructor(props) {
        super(props);
        this.menu =  Service();
        this.state = { tot: this.menu.getGrandTotal() };        
    } 
  
    
    
    componentDidUpdate (){
        this.setState((prevState) => { return { tot: prevState.tot = this.menue.getGrandTotal() } });
          
        } 
        
        render() {
        return (<div className="spacer"><div className="total-display"><h1>Grand Total :R{this.state.tot}  </h1></div></div>)
    }
}

export default Total;