const Thelist = [
    {
        name: "TOYOTA",
        model: "XV30",
        cost: 1000000,
        quantity: 47,
    },
    {
        name: "LEXUS",
        model: "XU30; RX 350",
        cost: 4600000,
        quantity: 58,
    },
    {
        name: "PORSCHE",
        model: "Cayman S Sport",
        cost: 8800000,
        quantity: 80,
    },
];

for (var i = 0; i < Thelist.length; i++) {
    var person = Thelist[i];
    for (var k in person) {
        console.log(person[k]);
    }
    
}

console.log(Thelist[Thelist.length - 1].quantity);

var p = {name: "MERCEDES-BENZ", model: "W203",cost: 8600000,quantity: 81,};

Thelist.push(p);

console.log(Thelist.length);
console.log(Thelist[Thelist.length - 1].name);
console.log(Thelist[Thelist.length - 1].model);
console.log(Thelist[Thelist.length - 1].cost);
console.log(Thelist[Thelist.length - 1].quantity);
