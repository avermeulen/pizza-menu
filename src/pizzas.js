let obj = {
    "pizzas": [
        {
            "type": "Bbq",

            "small": { "price": 17.99, "QTY":  0,type:"BBQ",size:"Small", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "medium": { "price": 25.99, "QTY":  0,type:"BBQ",size:"Medium", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "large": { "price": 32.99, "QTY":  0,type:"BBQ",size:"Large", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "img": "/bbq.jpeg"
        },
        {
            "type": "Pepperoni",
            "small": { "price": 13.99, "QTY":  0,type:"Pepperoni",size:"Small", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "medium": { "price": 17.99, "QTY":  0,type:"Pepperoni",size:"Medium", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "large": { "price": 21.99, "QTY":  0,type:"Pepperoni",size:"Large", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "img": "/pepperoni.jpeg"
        },
        {
            "type": "Chicken",
            "small": { "price": 14.99, "QTY":  0,type:"Chicken",size:"Small", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "medium": { "price": 19.99, "QTY":  0,type:"Chicken",size:"Medium", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "large": { "price": 32.99, "QTY":  0,type:"Chicken",size:"Large", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "img": "/chicken.jpeg"
        },

        {
            "type": "Veggie",
            "small": { "price": 16.99, "QTY":  0,type:"Veggie",size:"Small", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "medium": { "price": 21.99, "QTY":  0,type:"Veggie",size:"Medium", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "large": { "price": 27.99, "QTY":  0,type:"Veggie",size:"Large", total:function(){return this.price * this.QTY },nameAndSize:function(){return this.size+" "+ this.type} },
            "img": "/veggieII.jpeg"
        }
    ]
}

export default obj;


