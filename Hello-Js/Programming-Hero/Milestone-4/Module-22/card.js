const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'pant', price: 1500, quantity: 1},
    {name: 'shirt', price: 1400, quantity: 4},
    {name: 'UnderWire', price: 100, quantity: 6},
];

function totCostCalculations(shoppingCart){
    let sum = 0;
    for(let i = 0; i<shoppingCart.length; i++){
        let product = shoppingCart[i];
        sum += product.price * product.quantity;
    }
    console.log(sum);
}
totCostCalculations(shoppingCart);