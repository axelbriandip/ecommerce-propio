let arrayStock = [
    {id:'001', name:'hoodie roja', price:'25.00', img:'https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'002', name:'Sudadera negra', price:'15.00', img:'https://img.represent.com/uploads/ad9b3e6580cf66d28cbd90314ecdd0a6.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'003', name:'camisa blanca', price:'20.00', img:'https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'004', name:'camisa roja', price:'30.00', img:'https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'005', name:'hoodie blanca', price:'10.00', img:'https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'006', name:'sudadera negra', price:'25.00', img:'https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'007', name:'hoodie negra', price:'5.00',img:'https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'008', name:'sudadera blanca', price:'8.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'009', name:'sudadera blanca', price:'22.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'0010', name:'sudadera blanca', price:'30.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'0011', name:'sudadera blanca', price:'25.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'0012', name:'sudadera blanca', price:'19.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'0013', name:'sudadera blanca', price:'8.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {id:'0014', name:'sudadera blanca', price:'10.00', img:'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null}
]

const mostrarStock = (array) => {
    const contenedor = document.querySelector(".contenedor-productos");
    for (let i = 0; i < array.length; i++) {
        let html =
        `<div class="producto" onclick="modalPersonalizado(${array[i].id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="foto-producto"><img src="${array[i].img}"></div>
            <span class="id-producto">ID ${array[i].id}</span>
            <span class="name-producto">${array[i].name}</span>
            <span class="price-producto">$${array[i].price}</span>
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
    let html, html2;
    let totalCarrito = 0;
    let contenedorRC = document.querySelector(".resumen-carrito");
    const contenedorCarrito = document.querySelector(".contenedor-carrito");
    if(array.length > 0) {
        limpiarCarrito();
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
            totalCarrito = totalCarrito + Number(array[i].price);
        }
        html2 =
        `<h2 class="tituloRC">Resumen del pedido</h2>
        <div class="d-flex justify-content-between"><span>Subtotal</span><span>$${totalCarrito}</span></div>
        <div class="d-flex justify-content-between"><span>Envío</span><span>$9</span></div>
        <div class="d-flex justify-content-between"><span>Total</span><span>$${totalCarrito+9}</span></div>`;
        contenedorRC.innerHTML = html2;
    }else {
        html = "El carrito aún no tiene productos..<br><br>";
        contenedorCarrito.innerHTML += html;

        html2 =
        `<h2 class="tituloRC">Resumen del pedido</h2>
        <div class="d-flex justify-content-between"><span>Subtotal</span><span>$0</span></div>
        <div class="d-flex justify-content-between"><span>Envío</span><span>$0</span></div>
        <div class="d-flex justify-content-between"><span>Total</span><span>$0</span></div>`;
        contenedorRC.innerHTML = html2;
    }
}