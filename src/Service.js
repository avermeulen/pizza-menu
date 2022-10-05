import obj from "./pizzas";

let  Service = ()=> {
  let pizza =  obj.pizzas
    

  
  





  let getGrandTotal = ()=> {
    let initValue = 0;
    let sum = all_pizza().reduce((a, el) => { return a + el.small.total() + el.medium.total() + el.large.total() }, initValue)
    return parseFloat(sum).toFixed(2)
  }

  


  let all_pizza = () => {

    return pizza
  }




  let removePizza = (type, size)=> {
    var temp = all_pizza().find(el => el.type === type);
    
    if (temp[size].QTY !== 0 ) {
       temp[size].QTY--
    }

  }

  let addPizza = (type, size) =>{
    var temp = all_pizza().find(el => el.type === type);
    if (temp ) {
      return temp[size].QTY++
    }

  }

  let getPizza = (type,size) => {
    return ((all_pizza().find(el => el.type  === type))[size]).total();
  }

  let customerOrder = ()=>{
   let results = all_pizza().filter(el => el.large.QTY > 0 || el.medium.QTY > 0 ||  el.small.QTY > 0);
  let order = [];
   for(let i in results){

    if(results[i].small.QTY > 0){
      order.push(results[i].small)

    }

     if(results[i].medium.QTY > 0){
       
       order.push(results[i].medium)

     }

     if(results[i].large.QTY > 0){      
      order.push(results[i].large)

    }
  


   }
   
   return order

  }
  return  { 
    getGrandTotal,
    all_pizza,
    removePizza,
    addPizza,
    getPizza,
    customerOrder
  }
}

export default Service;
