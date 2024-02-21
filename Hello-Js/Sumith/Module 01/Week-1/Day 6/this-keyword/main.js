const person = {
    name: 'Md Al Amin',
    age: 23,
    id: 1811904,
    uni: 'NSU',

    display : function(){
        return this.name + " " + this.age + " " + this.uni;
    },
    printInfo : function(){
        console.log(this.display());
    }
}

console.log(person.display());
person.printInfo();

// User define This keyword

const person2 = {
    fullname : function(){
        return this.firstName + " " + this.lastName
    }
}

const person3 = {
    firstName : 'Md',
    lastName : 'Al Amin'
}

console.log(person2.fullname.call(person3))