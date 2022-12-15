const shopContent = document.getElementById("bloque-1");
const shopContent2 = document.getElementById("bloque-2");
const shopContent3 = document.getElementById("bloque-3");
const shopContent4 = document.getElementById("bloque-4");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = [];

productosNike.forEach((product) => {
    let content = document.createElement("div");
    content.className = "col-xs-12 col-sm-12 col-md-4 img-fluid product"
    content.innerHTML = `
        <img class= "product__img" src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="product__price">${product.precio}$</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.className = "btn btn-block btn-primary agregar-carrito";
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        const repeat  = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id : product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
    })
});

productosAdidas.forEach((product) => {
    let content = document.createElement("div");
    content.className = "col-xs-12 col-sm-12 col-md-4 img-fluid product"
    content.innerHTML = `
        <img class= "product__img" src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="product__price">${product.precio}$</p>
    `;

    shopContent2.append(content);

    let comprar = document.createElement("button")
    comprar.className = "btn btn-block btn-primary agregar-carrito";
    comprar.innerText = "comprar";
    
    content.append(comprar);

    comprar.addEventListener("click", () =>{
        const repeat  = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id : product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
    })
})

productosGucci.forEach((product) => {
    let content = document.createElement("div");
    content.className = "col-xs-12 col-sm-12 col-md-4 img-fluid product"
    content.innerHTML = `
        <img class= "product__img" src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="product__price">${product.precio}$</p>
    `;

    shopContent3.append(content);

    let comprar = document.createElement("button")
    comprar.className = "btn btn-block btn-primary agregar-carrito";
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        const repeat  = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id : product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
    })
})

productosJordan.forEach((product) => {
    let content = document.createElement("div");
    content.className = "col-xs-12 col-sm-12 col-md-4 img-fluid product"
    content.innerHTML = `
        <img class= "product__img" src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="product__price">${product.precio}$</p>
    `;

    shopContent4.append(content);

    let comprar = document.createElement("button")
    comprar.className = "btn btn-block btn-primary agregar-carrito";
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{

        const repeat  = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id : product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
    });
});



