const ARRAY_PRODUCTOS = [
  {
    id: 1,
    producto: "leche",
    precio: 200,
    fechaVencimiento: "3/3/2023",
    descripción: "Leche la serenísima",
    oferta: true,
  },
  {
    id: 2,
    producto: "tapa de tarta criolla",
    precio: 659,
    fechaVencimiento: "5/1/2023",
    descripción: "Tapa de tarta La Salteña",
    oferta: false
  },
  {
    id: 3,
    producto: "mostacholes 500grm",
    precio: 200,
    descripción: "Matarazzo mostacholes 500grm",
    oferta: true
  },
  {
    id: 4,
    producto: "pepsi 1,5L",
    precio: 181,
    descripción: "Pepsi botella 1,5L",
    oferta: false
  },
  {
    id: 5,
    producto: "coca-cola sin azúcar 473ml",
    precio: 150,
    descripción: "Lata coca-cola",
    oferta: true
  },
  {
    id: 6,
    producto: "huevo blanco x 30 unidades",
    precio: 919,
    descripción: "Huevo Blanco Grand Maple",
    oferta: false
  },
  {
    id: 7,
    producto: "salsa tuco",
    precio: 162,
    descripción: "Salsa tuco Arcor 340grm",
    oferta: true
  },
  {
    id: 8,
    producto: "lomo de atún al natural",
    precio: 775,
    descripción: "Lomo de atún La Campagnola",
    oferta: false
  },
  {
    id: 9,
    producto: "espinaca",
    precio: 768,
    fechaVencimiento: "3/1/2024",
    descripción: "Espinaca Granja del Sol 500g",
    oferta: true
  },
  {
    id: 10,
    producto: "ravioles 4 quesos",
    precio: 410,
    fechaVencimiento: "30/5/2023",
    descripción: "Ravioles 4 quesos La Salteña",
    oferta: false
  },
  {
    id: 11,
    producto: "queso de rallar",
    precio: 423,
    fechaVencimiento: "3/3/2023",
    descripción: "Queso de rallar coto",
    oferta: true
  },
  {
    id: 12,
    producto: "jamon cocido 500g",
    precio: 540,
    descripción: "Jamon cocido Bocatti",
    oferta: false
  },
  {
    id: 13,
    producto: "pizza mozzarella 650g",
    precio: 1200,
    descripción: "Pizza mozzarella Sibarita",
    oferta: true
  },
  {
    id: 14,
    producto: "papas noisette 1kg",
    precio: 741,
    descripción: "Papas noisette Mc Cain",
    oferta: false
  },
  {
    id: 15,
    producto: "papel higienico",
    precio: 706,
    descripción: "Papel higienico Elite",
    oferta: true
  },
]

ARRAY_PRODUCTOS.forEach((producto) => {
  if (producto.oferta == true) {
    producto.precio_oferta = producto.precio * 0.9 // 10% de descuento
    console.log(`Precio oferta del producto ${producto.producto}: $${producto.precio_oferta}`)
  }
})

let sortedArray = [...ARRAY_PRODUCTOS].sort((a,b) => {
  if (a.producto > b.producto) {
    return 1;
  } else if (a.producto < b.producto) {
    return -1;
  } else {
    return 0
  }
})
console.log(sortedArray)


let confirmar = (confirm('¿Desea ver los productos en oferta?'))

if (confirmar == true) {
  const ofertas = ARRAY_PRODUCTOS.filter(x => x.oferta == true)
  console.log(ofertas)
}


let eleccion = prompt("Ingrese el producto que desea buscar: ")
let eleccionEnMinusculas = eleccion.toLowerCase()

const productoElegido = ARRAY_PRODUCTOS.find(elemento => elemento.producto.includes(eleccionEnMinusculas))
console.log(productoElegido)