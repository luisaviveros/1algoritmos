function addition (people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age;
    }
    return sum;
}

const people = [
{ name: "Andres", age: 30 },
{ name: "Aleja", age: 25 },
{ name: "Ana", age: 20 },
{ name: "Luisa", age: 15}
];

const additionT = addition(people);
console.log(additionT); 