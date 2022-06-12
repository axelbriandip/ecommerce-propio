let arrayStock = [
    {id:'1', name:'hoodie roja', price:'24.00', img:'https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'2', name:'Sudadera negra', price:'14.00', img:'https://img.represent.com/uploads/ad9b3e6580cf66d28cbd90314ecdd0a6.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'3', name:'camisa blanca', price:'13.00', img:'https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'4', name:'camisa roja', price:'13.00', img:'https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'5', name:'hoodie blanca', price:'24.00', img:'https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'6', name:'sudadera negra', price:'14.00', img:'https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'7', name:'hoodie negra', price:'24.00',img:'https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'8', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'9', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'10', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'11', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'12', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'13', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'14', name:'sudadera blanca', price:'14.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null}
]

const mostrarStock = (array) => {
    const contenedor = document.querySelector(".contenedor-productos");
    for (let i = 0; i < array.length; i++) {
        let html =
        `<div class="producto" onclick="modalPersonalizado(${array[i].id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="foto-producto"><img src="${array[i].img}"></div>
            <span class="titulo-producto">ID ${array[i].id}</span>
            <span class="titulo-producto">${array[i].name}</span>
            <span class="color-producto">$${array[i].price}</span>
        </div>`;
        contenedor.innerHTML += html;
    }
}

mostrarStock(arrayStock);

const modalPersonalizado = (id) => {
    let modal = document.getElementById("staticBackdrop");
    for (let i = 0; i < arrayStock.length; i++) {
        if(id == arrayStock[i].id) {
            let html = `
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Producto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${arrayStock[i].img}" id="foto-producto-añadir">
                    <h2 id="nombre-producto">${arrayStock[i].name}</h2>
                    <span id="precio-producto">$${arrayStock[i].price}</span>
                    <span id="desc-producto">descripción del producto</span>
                    <div class="contenedor-colores">
                        <span id="titulo-colores">colores</span>
                        <span class="item" id="color1">negro</span><span class="item" id="color2">rojo</span>
                    </div>
                    <div class="talles">
                        <span id="titulo-talles">Talles</span>
                        <span class="item" id="talle-s">S</span>
                        <span class="item" id="talle-m">M</span>
                        <span class="item" id="talle-l">L</span>
                        <span class="item" id="talle-xl">XL</span>
                        <span class="item" id="talle-xxl">XXL</span>
                        <span class="item" id="talle-3xl">3XL</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onclick="agregarCarrito(${arrayStock[i].id})">Añadir al carrito</button>
                </div>
                </div>
            </div>`;
            modal.innerHTML = html;
        }
    }
}

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
    const contenedorCarrito = document.querySelector(".contenedor-carrito");
    let html = "";
    contenedorCarrito.innerHTML = html;
}

const mostrarCarrito = (array) => {
    let html;
    const contenedorCarrito = document.querySelector(".contenedor-carrito");
    if(array.length > 0) {
        limpiarCarrito();
        let totalCarrito = 0;
        for (let i = 0; i < array.length; i++) {
            html =
            `<div class="producto-carrito d-flex">
                <div id="contenedor-foto-carrito">
                    <img src="${array[i].img}" id="foto-producto-carrito">
                </div>
                <div id="detalle-producto-carrito">
                    <h2>${array[i].name}</h2>
                    <span>${array[i].price}</span><br>
                    <span id="color-elegido">Color: ${array[i].color}</span>
                    <span>Talle: ${array[i].talle}</span>
                </div>
                <div id="botones-carrito" class="d-flex">
                    <div id="agregar-restar">
                        <button id="op">+</button>
                        <span>1</span>
                        <button id="op">-</button>
                    </div>
                    <div id="contenedor-eliminar">
                        <button id="boton-eliminar">Eliminar</button>
                    </div>
                </div>
            </div>
            `;
            contenedorCarrito.innerHTML += html;
            totalCarrito = totalCarrito + array[i].precio;
        }
        let htmlTotalCarrito = `Total: $${totalCarrito}`;
        contenedorCarrito.innerHTML += htmlTotalCarrito;
    }else {
        alert("AAAAAAA");
        html = "No existen arrayStock en el carrito"
        contenedorCarrito.innerHTML += html;
    }
}