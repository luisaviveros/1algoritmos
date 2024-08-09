function filter (Filterproduct){
const product = [];
for (let i = 0; i < Filterproduct.length; i++) {
    if (Filterproduct[i].price > 50) {
    product.push(Filterproduct[i]); 
    }
}
return product;
}

const products = [
{name: "Pc", Price:100},
{name: "Mouse", Price:10},
{name: "Keyboard", Price:20},
{name: "Monitor", Price:80},
];


const filterT = filter(products);
console.log(filterT);