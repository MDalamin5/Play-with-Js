const car = {
    name : 'Volvo',
    model : 'ADSB',
    color : 'Black',
    start: function(){
        console.log('Car is Start now.');
    },
    drive: function(){
        console.log('Car is Driving Now')
    },
    info: function(){
        console.log(this.name + ' ' + this.model + ' ' + this.color);
        this.drive();
        this.start();
    }

}

console.log(car.color);
console.log(car['model']);
car.info();
// let x = new Number(5)
// console.log(typeof(x))
