import Service from "./Service"

it("We expecting the pizzas to have a length of 4",()=>{
let serve =  Service();
expect(serve.all_pizza().length).toEqual(4)
});

it("Should be able to return the pepperoni small pizza",()=>{
  let serve =  Service();
  serve.addPizza("Pepperoni","small")
  expect(serve.getPizza("Pepperoni","small")).toEqual(13.99)
});


it("Get the grand total of the pizzas.",()=>{
  let serve =  Service();
  serve.addPizza("Pepperoni","medium")



  expect(serve.getGrandTotal()).toEqual(31.98)

})

it("Should return all pizza selections that have a quanity greater than 1",()=>{
  let serve =  Service();
  serve.addPizza("Pepperoni","medium");
  serve.addPizza("Pepperoni","small");
  serve.addPizza("Bbq","small");



  expect(serve.customerOrder().length).toEqual(3)

})

// it("Should return type name and size",()=>{
//   let serve =  Service();
//   serve.addPizza("Pepperoni","medium")
//   serve.addPizza("Pepperoni","small")



//   expect(serve.obj.pizzas[1].medium.nameAndSize()).toEqual(1)

// })
