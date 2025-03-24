document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.producto__card__boton');
    const botonVaciar = document.getElementById('vaciar-carrito');
    const carritoLista = document.getElementById('carrito-lista'); 
    const carritoVacio = document.getElementById('carrito-vacio'); 
    const carritoTotal = document.getElementById('carrito-total');  
    const botonComprar = document.getElementById('comprar-carrito'); 
    
    let carrito = [];
    
    if (localStorage.getItem('carrito')) {
        try {
            carrito = JSON.parse(localStorage.getItem('carrito'));
            actualizarCarritoUI();
        } catch (e) {
            console.error('Error al cargar el carrito desde localStorage:', e);
            localStorage.removeItem('carrito');
        }
    }
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); 
            console.log('Botón de agregar al carrito clickeado');
            agregarAlCarrito(event);
        });
    });
    
    if (botonVaciar) {
        botonVaciar.addEventListener('click', () => {
            if (carrito.length === 0) {
                alert('El carrito ya está vacío');
                return;
            }
            
            carrito = [];
            guardarCarrito();
            actualizarCarritoUI();
            alert('Carrito vaciado correctamente');
        });
    } else {
        console.error('No se encontró el botón de vaciar carrito');
    }
    
    if (botonComprar) {
        botonComprar.addEventListener('click', () => {
            if (carrito.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }
            
            alert('¡Gracias por tu compra! Total: $' + calcularTotal().toFixed(2));
            carrito = [];
            guardarCarrito();
            actualizarCarritoUI();
        });
    } else {
        console.error('No se encontró el botón de comprar');
    }
    
    function agregarAlCarrito(evento) {
        const boton = evento.currentTarget;
        const productoCard = boton.closest('.producto__card');
        
        if (!productoCard) {
            console.error('No se pudo encontrar el contenedor del producto');
            return;
        }
        
        const imagenSrc = productoCard.querySelector('.producto__imagen').src;
        const titulo = productoCard.querySelector('.producto__card__titulo').textContent;
        const precioTexto = productoCard.querySelector('.producto__card__precio').textContent;
        const precio = parseFloat(precioTexto.replace('$', ''));
        
        const producto = {
            id: Date.now().toString(),
            imagen: imagenSrc,
            titulo: titulo,
            precio: precio,
            cantidad: 1
        };
        
        console.log('Producto a agregar:', producto);
        
        const productoEnCarrito = carrito.find(item => item.titulo === producto.titulo);
        
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push(producto);
        }
        
        guardarCarrito();
        actualizarCarritoUI();
        
        alert(`${producto.titulo} agregado al carrito`);
        
        document.getElementById('Carrito').scrollIntoView({ behavior: 'smooth' });
    }
    
    function actualizarCarritoUI() {
        if (!carritoLista || !carritoVacio || !carritoTotal) {
            console.error('Elementos del carrito no encontrados');
            return;
        }
        
        carritoLista.innerHTML = '';
        
        if (carrito.length === 0) {
            carritoVacio.style.display = 'block';
            carritoLista.style.display = 'none';
            carritoTotal.textContent = '$0.00';
            return;
        }
        
        carritoVacio.style.display = 'none';
        carritoLista.style.display = 'block';
        
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.className = 'carrito__item';
            li.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito__item__info">
                    <h3 class="carrito__item__titulo">${producto.titulo}</h3>
                    <p class="carrito__item__precio">$${producto.precio.toFixed(2)}</p>
                    <div class="carrito__item__cantidad">
                        <button class="disminuir-cantidad" data-id="${producto.id}">-</button>
                        <span>${producto.cantidad}</span>
                        <button class="aumentar-cantidad" data-id="${producto.id}">+</button>
                    </div>
                </div>
                <button class="carrito__item__eliminar" data-id="${producto.id}">Eliminar</button>
            `;
            
            carritoLista.appendChild(li);
        });
        
        carritoTotal.textContent = '$' + calcularTotal().toFixed(2);
        
        document.querySelectorAll('.disminuir-cantidad').forEach(boton => {
            boton.addEventListener('click', disminuirCantidad);
        });
        
        document.querySelectorAll('.aumentar-cantidad').forEach(boton => {
            boton.addEventListener('click', aumentarCantidad);
        });
        
        document.querySelectorAll('.carrito__item__eliminar').forEach(boton => {
            boton.addEventListener('click', eliminarProducto);
        });
    }
    
    function calcularTotal() {
        return carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0);
    }
    
    function disminuirCantidad(evento) {
        const id = evento.target.dataset.id;
        const producto = carrito.find(item => item.id === id);
        
        if (producto.cantidad > 1) {
            producto.cantidad--;
        } else {
            eliminarProducto({ target: { dataset: { id } } });
            return;
        }
        
        guardarCarrito();
        actualizarCarritoUI();
    }
    
    function aumentarCantidad(evento) {
        const id = evento.target.dataset.id;
        const producto = carrito.find(item => item.id === id);
        producto.cantidad++;
        
        guardarCarrito();
        actualizarCarritoUI();
    }
    
    function eliminarProducto(evento) {
        const id = evento.target.dataset.id;
        carrito = carrito.filter(item => item.id !== id);
        
        guardarCarrito();
        actualizarCarritoUI();
    }
    
    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
    console.log('Botones de agregar al carrito:', botonesAgregar.length);
    console.log('Carrito lista elemento:', carritoLista);
    console.log('Carrito vacío elemento:', carritoVacio);
    console.log('Carrito total elemento:', carritoTotal);
    console.log('Botón vaciar:', botonVaciar);
    console.log('Botón comprar:', botonComprar);
});