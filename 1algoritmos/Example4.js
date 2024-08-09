function ordenarProductosPorPrecio(productos) {

    let productosCopia = [...productos];

    
    for (let i = 0; i < productosCopia.length; i++) {
        for (let j = 0; j < productosCopia.length - 1; j++) {
            if (productosCopia[j].precio > productosCopia[j + 1].precio) {
                
                let temp = productosCopia[j];
                productosCopia[j] = productosCopia[j + 1];
                productosCopia[j + 1] = temp;
            }
        }
    }

    return productosCopia;
}


const productos = [
    { nombre: "Producto 1", precio: 45 },
    { nombre: "Producto 2", precio: 60 },
    { nombre: "Producto 3", precio: 30 },
    { nombre: "Producto 4", precio: 80 },
    { nombre: "Producto 5", precio: 50 }
];

const productosOrdenados = ordenarProductosPorPrecio(productos);
console.log(productosOrdenados);
