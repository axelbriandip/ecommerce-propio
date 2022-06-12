let arrayStock = [
    {id:'1', name:'hoodie roja', price:'24.00', img:'https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format'},
    {id:'2', name:'Sudadera negra', price:'14.00', img:'https://img.represent.com/uploads/ad9b3e6580cf66d28cbd90314ecdd0a6.jpeg?w=750&q=95&auto=format'},
    {id:'3', name:'camisa blanca', price:'13.00', img:'https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format'},
    {id:'4', name:'camisa roja', price:'13.00', img:'https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format'},
    {id:'5', name:'hoodie blanca', price:'24.00', img:'https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format'},
    {id:'6', name:'sudadera negra', price:'14.00', img:'https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format'},
    {id:'7', name:'hoodie negra', price:'24.00',img:'https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format'},
    {id:'8', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'9', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'10', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'11', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'12', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'13', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'},
    {id:'14', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format'}
]

const mostrarStock = (array) => {
    const contenedor = document.querySelector(".contenedor-productos");
    for (let i = 0; i < array.length; i++) {
        let html =
        `<div class="producto">
            <div class="foto-producto"><img src="${array[i].img}"></div>
            <span class="titulo-producto">ID ${array[i].id}</span>
            <span class="titulo-producto">${array[i].name}</span>
            <span class="color-producto">$${array[i].price}</span>
        </div>`;
        contenedor.innerHTML += html;
    }
}

mostrarStock(arrayStock);

let carrito = [];

const agregarCarrito = (id) => {
    for (let i = 0; i < arrayStock.length; i++) {
        if(id == arrayStock[i].id) {
            carrito.push(arrayStock[i]);
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }
}

const limpiarCarrito = () => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    let html = "";
    contenedorCarrito.innerHTML = html;
}

const mostrarCarrito = (array) => {
    let html;
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    if(array.length > 0) {
        limpiarCarrito();
        let totalCarrito = 0;
        for (let i = 0; i < array.length; i++) {
            html =
            `<div class="prenda">
                <span>ID: ${array[i].id}</span>
                <h3>${array[i].titulo}</h3>
                <span>Color: ${array[i].color}</span>
                <span>Talle: ${array[i].talle}</span>
                <span>Precio: $${array[i].precio}</span>
            </div>`;
            contenedorCarrito.innerHTML += html;
            totalCarrito = totalCarrito + array[i].precio;
        }
        let htmlTotalCarrito = `Total: $${totalCarrito}`;
        contenedorCarrito.innerHTML += htmlTotalCarrito;
    }else {
        html = "No existen arrayStock en el carrito"
        contenedorCarrito.innerHTML += html;
    }
}