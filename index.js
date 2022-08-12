class Comic {
    constructor(id, nombre, valor, stock) {
        this.id = id;
        this.nombre = nombre;
        this.importe = valor;
        this.stock = stock;
    }
}

const comics = [];

function comicStock() {
    comics.push(new Comic(1, "BATMAN", 700, 5));
    comics.push(new Comic(2, "FLASH", 700, 2));
    comics.push(new Comic(3, "SUPERMAN", 530, 4));
    comics.push(new Comic(4, "SPIDERMAN", 750, 10));
}

comicStock();
console.table(comics);
const carrito = [];

function agregarComic() {
    let seguir = confirm("Si quiere seguir comprando pulse aceptar/si quieres saber el total dale a cancelar");
    if (seguir) {
        agregarMasComic();
        let total = carrito.reduce((acc, el) => acc + el.importe, 0);
        console.log("El total  a pagar es: $", total);
    } else {
        let total = carrito.reduce((acc, el) => acc + el.importe, 0);
        console.log("El total del comic es: $", total);
    }
}

function buscarComic() {
    let busqueda = prompt("¿Que comic esta buscando?").toUpperCase();
    let buscar = comics.find((el) => el.nombre.includes(busqueda));
    carrito.push(buscar);
    agregarComic();
}

function agregarMasComic() {
    let busqueda = prompt("¿Que mas quiere agregar?").toUpperCase();
    let buscar = comics.find((el) => el.nombre.includes(busqueda));
    carrito.push(buscar);
}
