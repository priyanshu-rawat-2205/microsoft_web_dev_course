let array = ["apple", "orange", "mango", "avocado", "banana"];

let res = array.find((item) => item === "mango")

let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
  ];

let query = iceCreamFlavors.filter(item => item.type ===  "Nuts")
let some = iceCreamFlavors.some(item => item.type === "Nuts")


//Projections Map
iceCreamFlavors.map(item => {
    item.price = 1;
    return item
    })

let sales = [{
    date : '2021-05-01',
    amount: 2
    },
    {
    date : '2021-05-01',
    amount: 1
    }
    // and so on...
    ]

let total = sales.reduce((acc, curr) => acc += curr.amount, 0)
console.log(total)