// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(num of numbers)
//     console.log(num)

const phones = [
    {name: 'Samsung phone', camera: '12MP', storage: '327GB', price: 15000, color: 'black'},
    {name: 'Walton phone', camera: '12MP', storage: '35GB', price: 12000, color: 'black'},
    {name: 'Apple', camera: '10MP', storage: '32GB', price: 150000, color: 'black'},
    {name: 'MI', camera: '12MP', storage: '32GB', price: 14000, color: 'black'},
    {name: 'OPPO', camera: '12MP', storage: '32GB', price: 16000, color: 'black'},
    {name: 'Tecgno', camera: '17MP', storage: '32GB', price: 17000, color: 'black'},
    {name: 'Symphony phone', camera: '12MP', storage: '32GB', price: 6000, color: 'black'},
]

function matchProducts(phones, secrch){
    const mached = [];
    for(const phone of phones){
        if(phone.name.includes(secrch))
        {
            mached.push(phone)
        }
    }
    console.log(mached);
}

matchProducts(phones, 'phone');