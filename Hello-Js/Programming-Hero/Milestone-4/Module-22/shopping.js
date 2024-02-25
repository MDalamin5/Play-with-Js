const phones = [
    {name: 'Samsung', camera: '12MP', storage: '327GB', price: 15000, color: 'black'},
    {name: 'Walton', camera: '12MP', storage: '35GB', price: 12000, color: 'black'},
    {name: 'Apple', camera: '10MP', storage: '32GB', price: 150000, color: 'black'},
    {name: 'MI', camera: '12MP', storage: '32GB', price: 14000, color: 'black'},
    {name: 'OPPO', camera: '12MP', storage: '32GB', price: 16000, color: 'black'},
    {name: 'Tecgno', camera: '17MP', storage: '32GB', price: 17000, color: 'black'},
    {name: 'Symphony', camera: '12MP', storage: '32GB', price: 6000, color: 'black'},
]

function cheapestPone(phones){
    let cheapest = phones[0]
    

    for(i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(cheapest.price > phone.price){
            cheapest = phone
        }
    }
    console.log(cheapest)
}

cheapestPone(phones)