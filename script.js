// --- 1. LÓGICA DE UI GENERAL ---


function toggleCartMobile() {
    const body = document.getElementById("cart-body");
    const chevron = document.getElementById("cart-chevron");

    if (body.style.maxHeight === "500px") {
        body.style.maxHeight = "0px";
        chevron.style.transform = "rotate(0deg)";
    } else {
        body.style.maxHeight = "500px";
        chevron.style.transform = "rotate(180deg)";
    }
}

// Inicializar carrito abierto en desktop
if (window.innerWidth >= 1024)
    document.getElementById("cart-body").style.maxHeight = "500px";

// --- 2. LÓGICA DEL COTIZADOR (INVENTARIO) ---
const inventory = [
    // --- CARPAS Y ESTRUCTURAS ---
    {
        id: 101,
        name: "Carpa Estructural 12x24m",
        colors: "Blanco, Transparente",
        includes: "Ventanales, alumbrado básico, instalación",
        price: 1500,
        category: "Carpas",
        img: "bx-building",
    },
    {
        id: 102,
        name: "Carpa 6x18 Luxury",
        colors: "Blanco, Transparente",
        includes: "Ventanales, cielo falso, iluminación LED",
        price: 1200,
        category: "Carpas",
        img: "bx-window",
    },
    {
        id: 103,
        name: "Carpa 6x12 Luxury",
        colors: "Blanco, Crema",
        includes: "Ventanales y alumbrado decorativo",
        price: 900,
        category: "Carpas",
        img: "bx-building",
    },
    {
        id: 104,
        name: "Carpa Eventos 4x8",
        colors: "Blanco, Crema",
        includes: "Paredes laterales removibles",
        price: 550.0,
        category: "Carpas",
        img: "bx-store-alt",
    },
    {
        id: 105,
        name: "Carpa Premium 4x4",
        colors: "Blanco, Crema",
        includes: "Estructura reforzada",
        price: 400.0,
        category: "Carpas",
        img: "bx-building-house",
    },
    {
        id: 106,
        name: "Sombrilla Gigante 3m",
        colors: "Beige, Blanco",
        includes: "Base de concreto",
        price: 150.0,
        category: "Carpas",
        img: "bx-sun",
    },

    // --- MOBILIARIO ---
    {
        id: 201,
        name: "Silla Crossback",
        colors: "Madera Natural, Nogal",
        includes: "Cojín de lino",
        price: 35,
        category: "Mobiliario",
        img: "bx-chair",
    },
    {
        id: 202,
        name: "Mesa Parota (12px)",
        colors: "Madera Natural",
        includes: "Base de herrería",
        price: 550,
        category: "Mobiliario",
        img: "bx-table",
    },
    {
        id: 203,
        name: "Sala Lounge Velvet",
        colors: "Azul, Gris, Rosa",
        includes: "1 Sillón doble, 2 individuales, 1 mesa centro",
        price: 1200,
        category: "Mobiliario",
        img: "bx-sofa",
    },
    {
        id: 204,
        name: "Mesa Parota (8px)",
        colors: "Madera",
        includes: "Acabado en barniz mate",
        price: 200,
        category: "Mobiliario",
        img: "bx-square",
    },
    {
        id: 205,
        name: "Mesa Redonda (10px)",
        colors: "Madera/Fibra",
        includes: "Estructura plegable",
        price: 65,
        category: "Mobiliario",
        img: "bx-circle",
    },
    {
        id: 206,
        name: "Mesa Rectangular (10px)",
        colors: "Blanco",
        includes: "Estructura reforzada",
        price: 80,
        category: "Mobiliario",
        img: "bx-rectangle",
    },
    {
        id: 207,
        name: "Mesa Tablón Pro",
        colors: "Gris",
        includes: "Superficie de plástico de alta densidad",
        price: 60.0,
        category: "Mobiliario",
        img: "bx-minus",
    },
    {
        id: 208,
        name: "Silla Tiffany",
        colors: "Blanco, Dorado, Plata",
        includes: "Cojín de vinil",
        price: 35,
        category: "Mobiliario",
        img: "bx-chair",
    },
    {
        id: 209,
        name: "Silla Plegable",
        colors: "Negro, Blanco",
        includes: "Estructura metálica",
        price: 15.0,
        category: "Mobiliario",
        img: "bx-chair",
    },
    {
        id: 210,
        name: "Silla Phoenix",
        colors: "Transparente",
        includes: "Cojín blanco",
        price: 45.0,
        category: "Mobiliario",
        img: "bx-star",
    },

    // --- MANTELERÍA Y CRISTALERÍA ---
    {
        id: 301,
        name: "Mantel Terciopelo",
        colors: "Vino, Azul Petróleo, Esmeralda",
        includes: "Planchado industrial",
        price: 180,
        category: "Mantelería",
        img: "bx-layer",
    },
    {
        id: 302,
        name: "Servilleta Lino",
        colors: "Varios colores",
        includes: "Arillo decorativo",
        price: 12,
        category: "Mantelería",
        img: "bx-bookmark",
    },
    {
        id: 303,
        name: "Loza Vajilla Premium",
        colors: "Blanco con filo dorado",
        includes: "Plato base, plato fuerte, plato postre",
        price: 18.0,
        category: "Servicio",
        img: "bx-restaurant",
    },
    {
        id: 304,
        name: "Loza Vajilla Básica",
        colors: "Blanco Puro",
        includes: "Plato fuerte y plato postre",
        price: 12.0,
        category: "Servicio",
        img: "bx-restaurant",
    },
    {
        id: 305,
        name: "Copa Vidrio",
        colors: "Transparente",
        includes: "Agua o Vino",
        price: 3.0,
        category: "Servicio",
        img: "bx-wine",
    },
    {
        id: 306,
        name: "Copa Cristal",
        colors: "Transparente",
        includes: "Copa alta de cristal fino",
        price: 5.0,
        category: "Servicio",
        img: "bx-wine",
    },
    {
        id: 307,
        name: "Cubiertos Gold",
        colors: "Dorado",
        includes: "Tenedor, Cuchillo, Cuchara postre",
        price: 22.0,
        category: "Servicio",
        img: "bx-knife",
    },
    {
        id: 308,
        name: "Cubiertos Silver",
        colors: "Plata",
        includes: "Acero inoxidable 18/10",
        price: 12.0,
        category: "Servicio",
        img: "bx-knife",
    },
    {
        id: 309,
        name: "Mantelería Gold",
        colors: "Dorado, Champaña",
        includes: "Camino de mesa y servilletas",
        price: 180,
        category: "Mantelería",
        img: "bx-layer",
    },
    {
        id: 310,
        name: "Mantelería Básica",
        colors: "Blanco, Negro",
        includes: "Mantel redondo o rectangular",
        price: 60,
        category: "Mantelería",
        img: "bx-layer",
    },

    // --- EXTRAS Y AMBIENTACIÓN ---
    {
        id: 401,
        name: "Pista Baile Charol",
        colors: "Negro, Blanco",
        includes: "Instalación y nivelación",
        price: 300,
        category: "Extras",
        img: "bx-grid-alt",
    },
    {
        id: 402,
        name: "Iluminación Arq.",
        colors: "RGB (Multicolor)",
        includes: "10 Lámparas LED y cableado",
        price: 1200,
        category: "Extras",
        img: "bx-bulb",
    },
    {
        id: 403,
        name: "Calentador Ambiental",
        colors: "Acero",
        includes: "Tanque de gas (5 horas)",
        price: 450,
        category: "Extras",
        img: "bx-flame",
    },
    {
        id: 404,
        name: "Hielera Grande",
        colors: "Azul",
        includes: "Capacidad 100L",
        price: 100,
        category: "Extras",
        img: "bx-fridge",
    },
];

let cart = {};

function renderProducts(filter = "all") {
    const list = document.getElementById("products-list");
    list.innerHTML = "";

    const filtered =
        filter === "all"
            ? inventory
            : inventory.filter((i) => i.category === filter);

    filtered.forEach((item) => {
        const qty = cart[item.id] ? cart[item.id].qty : 0;
        const btnClass =
            qty > 0 ? "bg-gold-500 text-white" : "bg-slate-100 text-royal-900";

        list.innerHTML += `
            <div class="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:shadow-md transition bg-white animate-fade-up">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-royal-900/5 rounded flex items-center justify-center text-royal-900">
                    <i class='bx ${item.img} text-xl'></i>
                </div>
                <div>
                    <h4 class="text-sm font-bold text-royal-900">${item.name}</h4>
                    <div class="flex flex-col lg:justify-between w-full justify-center items-center">     
                        <small class="text-[8px] text-slate-500 mr-auto mt-2 align-left">Colores: ${item.colors}</small>
                        <small class="text-[8px] text-slate-500 mr-auto mb-2">Incluye: ${item.includes}</small></div>
                        <p class="text-xs text-gold-500 font-bold">$${item.price} MXN</p>
                    </div>
                </div>
            <div class="flex items-center">
                <button onclick="changeQty('${item.id}', -1)" class="w-9 h-9 flex items-center justify-center rounded-l border border-royal-900 bg-royal-900 text-white hover:bg-royal-800 hover:border-gold-400 transition-all active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
    </button>

    <input 
        type="number" 
        min="0" 
        placeholder="0"
        value="${qty}" 
        data-id="${item.id}" 
        oninput="updateCartFromInput(event)" 
        class="w-12 h-9 text-center border-y border-royal-900 text-royal-900 font-bold focus:outline-none bg-white text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    >

    <button 
        onclick="changeQty('${item.id}', 1)"
        class="w-9 h-9 flex items-center justify-center rounded-r border border-royal-900 bg-royal-900 text-white hover:bg-royal-800 hover:border-gold-400 transition-all active:scale-95"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
    </button>
</div>
</div>`;
    });
}

// 1. Función para los botones + y -
function changeQty(id, delta) {
    const input = document.querySelector(`input[data-id="${id}"]`);
    if (!input) return;

    let currentVal = parseInt(input.value) || 0;
    let newVal = currentVal + delta;

    if (newVal < 0) newVal = 0;

    input.value = newVal;

    // Ejecutamos la actualización simulando un evento de input
    updateCartFromInput({ target: input });
}

// 2. Función principal que actualiza el objeto 'cart'
function updateCartFromInput(event) {
    const input = event.target;
    const id = parseInt(input.dataset.id);
    let qty = parseInt(input.value);

    // Validación para evitar errores si el input queda vacío
    if (isNaN(qty) || qty < 0) qty = 0;

    const item = inventory.find(i => i.id === id);

    if (qty > 0) {
        cart[id] = { ...item, qty: qty };
    } else {
        delete cart[id];
    }

    renderCart();
}

// 3. Función de renderizado del carrito
function renderCart() {
    const container = document.getElementById('selected-items-container');
    let total = 0;
    let count = 0;
    let html = '';

    Object.values(cart).forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        count += item.qty;

        html += `
        <div class="flex justify-between items-center text-sm text-white/90 border-b border-white/10 pb-2 mb-2">
            <div class="flex flex-col">
                <span class="font-medium">${item.name}</span>
                <span class="text-xs text-white/50">${item.qty} x $${item.price.toLocaleString()}</span>
            </div>
            <span class="font-bold text-gold-400">$${subtotal.toLocaleString()}</span>
        </div>`;
    });

    // Actualizar contenedores con ternarios para estados vacíos
    container.innerHTML = html || '<p class="text-slate-500 text-sm text-center italic py-4">Carrito vacío</p>';

    // Actualizar totales en la UI
    const totalDisplay = document.getElementById('total-display');
    const countLabel = document.getElementById('item-count-label');

    if (totalDisplay) totalDisplay.innerText = `$${total.toLocaleString()}`;
    if (countLabel) {
        countLabel.innerText = `${count} ${count === 1 ? 'artículo seleccionado' : 'artículos seleccionados'}`;
    }
}

function filterProducts(cat) {
    document.querySelectorAll(".cat-btn").forEach((b) => {
        b.classList.remove("bg-royal-900", "text-white");
        b.classList.add("bg-slate-100", "text-slate-500");
    });
    const activeBtn = document.querySelector(`.cat-btn[data-cat="${cat}"]`);
    activeBtn.classList.remove("bg-slate-100", "text-slate-500");
    activeBtn.classList.add("bg-royal-900", "text-white");
    activeBtn.classList.add("active");
    renderProducts(cat);
}

// --- Js - 3. SISTEMA DE COMENTARIOS OPTIMIZADO ---

// 1. DATA (Igual que antes, estructura base)
let commentsData = [
    {
        id: 1,
        user: "Mariana Solis",
        text: "Mi evento fue un éxito gracias a sus recomendaciones. Se enfocaron en dejar más espacio sin importarles quitar algunas cosas ya pagadas, impecable servicio. Realmente superaron mis expectativas en cuanto a la logística.",
        rating: 5,
        date: "Hace 2 días",
        reactions: { like: 12, love: 4, dislike: 0 },
        replies: [
            { id: 900, user: "Rente Confort", isBrand: true, text: "Gracias Mariana, fue un honor ser parte de tu día.", reactions: { like: 2, love: 1, dislike: 0 }, replies: [] }
        ]
    },
    {
        id: 2,
        user: "Sebastian Estrada",
        text: "Es una excelente experiencia en su sitio. En sitios anteriores cada minuto me aparecían mensajes casi obligándome a realizar un pedido, aquí todo fluyó natural.",
        rating: 5,
        date: "Hace 3 semanas",
        reactions: { like: 8, love: 0, dislike: 0 },
        replies: [
             { id: 901, user: "Rente Confort", isBrand: true, text: "Agradecemos mucho tu comentario Sebastian. Estamos a tus ordenes.", reactions: { like: 1, love: 0, dislike: 0 }, replies: [] }
        ]
    },
    {
        id: 3,
        user: "Fernanda Lujan",
        text: "La decoración que realizaron en mi boda fue ¡Increíble! Muchas gracias por su muy buen servicio.",
        rating: 5,
        date: "Hace 4 meses",
        reactions: { like: 12, love: 4, dislike: 0 },
        replies: []
    },
    {
        id: 4,
        user: "Pablo Santibañez",
        text: "Gran experiencia en todo momento, es la primera de muchas veces que realizaré un pedido con ustedes.",
        rating: 4,
        date: "Hace 1 año",
        reactions: { like: 2, love: 1, dislike: 0 },
        replies: []
    }
];

// --- VARIABLES GLOBALES PARA AUTO-SCROLL ---
let autoScrollInterval;
let isPaused = false;
const scrollSpeed = 1; // Velocidad del desplazamiento automático
const container = document.getElementById("reviews-container");

// --- INICIALIZACIÓN ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
    // Bloquear scroll del body cuando el menú esté abierto
    document.body.classList.toggle('overflow-hidden');
}

// Efecto espectacular: Mostrar etiquetas al cargar
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');

    // Muestra las etiquetas a los 1 segundos (saludo)
    setTimeout(() => {
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('label-reveal');
            }, index * 100);
        });
    }, 1000);

    // Las oculta a los 3 segundos (duración de 2 segundos de saludo)
    setTimeout(() => {
        navItems.forEach(item => item.classList.remove('label-reveal'));
    }, 3000);
    renderComments();
    startAutoScroll();
});

// --- RENDERIZADO ---
function renderComments() {
    container.innerHTML = commentsData.map(c => createCommentHTML(c)).join("");
}

function createCommentHTML(comment, isChild = false) {
    // Generador de estrellas
    const stars = comment.rating ? Array(comment.rating).fill('<i class="bx bxs-star text-yellow-400 text-xs"></i>').join("") : "";

    // Badge de Marca
    const brandBadge = comment.isBrand ? 
        '<span class="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded ml-1 font-bold uppercase tracking-wider">Staff</span>' : "";

    // Estilos condicionales
    const avatarClass = comment.isBrand ? "bg-royal-900 text-gold-400" : "bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600";
    const avatarContent = comment.isBrand ? '<i class="bx bxs-crown"></i>' : comment.user.charAt(0);

    // Lógica para Respuestas (Ocultas por defecto)
    let repliesSection = "";
    let replyToggleBtn = "";

    if (comment.replies && comment.replies.length > 0) {
        // Botón para ver respuestas
        replyToggleBtn = `
            <button onclick="toggleReplies(${comment.id})" class="text-xs font-semibold text-royal-600 hover:text-gold-500 ml-3 flex items-center gap-1">
                <i class='bx bx-subdirectory-right'></i> Ver ${comment.replies.length} respuesta(s)
            </button>
        `;
        // Contenedor de respuestas (Oculto inicialmente)
        repliesSection = `
            <div id="replies-container-${comment.id}" class="nested-thread-container">
                ${comment.replies.map(r => createCommentHTML(r, true)).join("")}
            </div>
        `;
    }

    // HTML DE LA CARD (O DEL COMENTARIO HIJO)
    if(isChild) {
        // Diseño simplificado para respuestas anidadas
        return `
            <div class="flex gap-3 mb-3 last:mb-0 bg-white p-3 rounded-lg border border-slate-100">
                <div class="w-6 h-6 rounded-full ${avatarClass} flex-shrink-0 flex items-center justify-center text-[10px] font-bold shadow-sm">
                    ${avatarContent}
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <h4 class="text-xs font-bold text-royal-900">${comment.user} ${brandBadge}</h4>
                    </div>
                    <p class="text-xs text-slate-600 leading-snug">${comment.text}</p>
                </div>
            </div>
        `;
    } else {
        // Diseño completo para CARD PADRE
        return `
        <div class="comment-card">
            <div class="flex items-center justify-between mb-4 flex-shrink-0">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full ${avatarClass} flex items-center justify-center font-bold text-sm shadow-sm">
                        ${avatarContent}
                    </div>
                    <div>
                        <h4 class="text-sm font-bold text-royal-900 leading-tight">${comment.user} ${brandBadge}</h4>
                        <div class="flex mt-0.5">${stars}</div>
                    </div>
                </div>
                <span class="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">${comment.date}</span>
            </div>

            <div class="card-content-scroll custom-scroll">
                <p class="text-sm text-slate-600 leading-relaxed">${comment.text}</p>

                ${repliesSection}
            </div>

            <div class="mt-auto border-t border-slate-100 pt-3 flex-shrink-0">
                <div class="flex items-center justify-between">
                    <div class="flex gap-2">
                         ${createReactionButton(comment.id, 'like', comment.reactions.like, 'bx-like')}
                         ${createReactionButton(comment.id, 'love', comment.reactions.love, 'bxs-heart')}
                    </div>
                    <div class="flex items-center">
                        ${replyToggleBtn}
                        <button onclick="toggleReplyForm(${comment.id})" class="text-slate-400 hover:text-royal-600 text-lg ml-3 p-1 transition" title="Responder">
                            <i class='bx bx-message-rounded-add'></i>
                        </button>
                    </div>
                </div>

                <div id="reply-form-${comment.id}" class="hidden mt-3 animate-fade-in-down">
                    <div class="flex gap-2">
                        <input type="text" id="input-${comment.id}" placeholder="Escribe tu respuesta..." 
                               class="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                               onfocus="pauseAutoScroll()" onblur="startAutoScroll()">
                        <button onclick="submitReply(${comment.id})" class="bg-royal-900 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gold-500 transition shadow-md">
                            <i class='bx bx-send'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

// Helper para botones de reacción
function createReactionButton(id, type, count, iconClass) {
    return `
    <button onclick="react(${id}, '${type}', this)" class="reaction-btn flex items-center gap-1 text-slate-400 group">
        <i class='bx ${iconClass} group-hover:scale-110 transition-transform'></i> 
        <span class="text-xs font-medium">${count}</span>
    </button>`;
}

// --- INTERACCIONES ---

// 1. Mostrar/Ocultar Respuestas (Toggle con animación CSS)
function toggleReplies(id) {
    const el = document.getElementById(`replies-container-${id}`);
    if (el) {
        el.classList.toggle('open');
    }
}

// 2. Mostrar/Ocultar Formulario
function toggleReplyForm(id) {
    const form = document.getElementById(`reply-form-${id}`);
    form.classList.toggle("hidden");
    if(!form.classList.contains("hidden")) {
        // Pausar slider si el usuario va a escribir
        pauseAutoScroll();
        setTimeout(() => document.getElementById(`input-${id}`).focus(), 100);
    }
}

// 3. Auto Scroll Logic (Diapositiva)
function startAutoScroll() {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    isPaused = false;

    autoScrollInterval = setInterval(() => {
        if (!isPaused && container) {
            // Si llega al final, regresa al principio suavemente
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollLeft += scrollSpeed;
            }
        }
    }, 20); // 20ms para fluidez (~50fps)
}

function pauseAutoScroll() {
    isPaused = true;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
}

function manualScroll(dir) {
    pauseAutoScroll(); // Pausar al interactuar manualmente
    const scrollAmount = 530; // Ancho de card + gap
    if (dir === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    // Reiniciar auto-scroll después de unos segundos
    setTimeout(startAutoScroll, 8000);
}

// 4. Lógica de Reacciones (Recursiva para encontrar el comentario)
function findCommentRecursive(comments, id) {
    for (let c of comments) {
        if (c.id === id) return c;
        if (c.replies) {
            const found = findCommentRecursive(c.replies, id);
            if (found) return found;
        }
    }
    return null;
}

function react(id, type, btn) {
    const comment = findCommentRecursive(commentsData, id);
    if (!comment) return;

    const isActive = btn.classList.contains(`active-${type}`);

    // Reset visual
    btn.classList.remove(`active-${type}`);

    if (isActive) {
        comment.reactions[type]--;
    } else {
        btn.classList.add(`active-${type}`);
        comment.reactions[type]++;

        // Animación simple
        btn.querySelector('i').style.transform = "scale(1.4)";
        setTimeout(() => btn.querySelector('i').style.transform = "scale(1)", 200);
    }

    btn.querySelector("span").innerText = comment.reactions[type];
}

// 5. Enviar Respuesta
function submitReply(parentId) {
    const input = document.getElementById(`input-${parentId}`);
    const text = input.value.trim();
    if (!text) return;

    const parent = findCommentRecursive(commentsData, parentId);
    if (parent) {
        parent.replies.push({
            id: Date.now(),
            user: "Usuario Invitado",
            text: text,
            isBrand: false,
            reactions: { like: 0, love: 0, dislike: 0 },
            replies: []
        });

        // Re-renderizar
        renderComments();

        // Abrir automáticamente la sección de respuestas del padre
        setTimeout(() => {
            const repliesContainer = document.getElementById(`replies-container-${parentId}`);
            if(repliesContainer) repliesContainer.classList.add('open');
        }, 100);
    }
}

function setRating(n) {
    currentRating = n;
    const stars = document.querySelectorAll("#new-review-modal .fa-star");
    stars.forEach((s, i) => {
        if (i < n) s.classList.add("text-yellow-400");
        else s.classList.remove("text-yellow-400");
    });
}

function submitNewReview() {
    const name = document.getElementById("review-name").value;
    const text = document.getElementById("review-text").value;

    if (name && text) {
        commentsData.unshift({
            id: Date.now(),
            user: name,
            text: text,
            rating: currentRating,
            date: "Ahora",
            reactions: { like: 0, love: 0, dislike: 0 },
            replies: [],
        });
        renderComments();
        document.getElementById("new-review-modal").classList.add("hidden");
        // Reset fields
        document.getElementById("review-name").value = "";
        document.getElementById("review-text").value = "";
    }
}

function scrollReviews(dir) {
    const container = document.getElementById("reviews-container");
    const scrollAmount = 320;
    if (dir === "left")
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    else container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// --- 4. CHATBOT INTELIGENTE "SANTIAGO" ---

let chatState = {
    step: "IDLE",
    name: "",
    type: "",
    context: {}, // Para guardar si viene de carrito, etc.
};

function toggleChat() {
    const win = document.getElementById("chat-window");
    win.classList.toggle("hidden");

    // Si se abre por primera vez
    if (!win.classList.contains("hidden") && chatState.step === "IDLE") {
        botThinking(() => {
            addBotMsg(
                "¡Hola! Soy Santiago. 👋 Bienvenido a la experiencia Rente Confort. ¿Cuál es tu nombre?",
                [],
            );
            chatState.step = "WAITING_NAME";
        });
    }
}

function openChatWithCart() {
    const win = document.getElementById("chat-window");
    if (win.classList.contains("hidden")) toggleChat();

    // Override state for Cart flow
    chatState.context.hasCart = true;

    setTimeout(() => {
        addBotMsg(
            "Veo que tienes una selección de productos interesante. 🧐 ¿Quieres que revise la disponibilidad para esos artículos?",
            ["Sí, revisar fechas", "Solo estoy viendo"],
        );
        chatState.step = "CART_FLOW";
    }, 800);
}

function handleUserMessage() {
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;

    addUserMsg(text);
    input.value = "";

    botThinking(() => processLogic(text));
}

function processLogic(text) {
    const lower = text.toLowerCase();

    // Máquina de Estados
    switch (chatState.step) {
        case "WAITING_NAME":
            chatState.name = text;
            chatState.step = "WAITING_EVENT";
            addBotMsg(
                `Un gusto, ${chatState.name}. ¿Qué tipo de evento estás planeando? (Boda, XV Años, Empresarial...)`,
                ["Boda", "Empresarial", "Cumpleaños"],
            );
            break;

        case "WAITING_EVENT":
            chatState.type = text;
            chatState.step = "MENU";
            addBotMsg(
                `Excelente. Somos especialistas en ${chatState.type}. ¿Cómo puedo ayudarte hoy?`,
                ["Ver Catálogo", "Ubicación Showroom", "Hablar con Humano"],
            );
            break;

        case "CART_FLOW":
            if (lower.includes("sí") || lower.includes("revisar")) {
                sendWhatsAppCart();
            } else {
                addBotMsg(
                    "Entendido. Puedes seguir navegando. Si necesitas algo más, aquí estoy.",
                    ["Cerrar Chat"],
                );
                chatState.step = "CLOSING";
            }
            break;

        case "MENU":
            if (
                lower.includes("ubicación") ||
                lower.includes("donde") ||
                lower.includes("showroom")
            ) {
                showLocation();
            } else if (lower.includes("catalogo") || lower.includes("ver")) {
                addBotMsg(
                    "Puedes ver todo nuestro inventario en la sección 'Colección' arriba. ¿Te acompaño ahí?",
                    ["Ir a Colección"],
                );
                // Logic to scroll
                document
                    .getElementById("coleccion")
                    .scrollIntoView({ behavior: "smooth" });
            } else if (lower.includes("humano") || lower.includes("persona")) {
                addBotMsg(
                    "Claro, te comparto mi WhatsApp directo para una atención personalizada.",
                    ["Abrir WhatsApp"],
                );
                addLinkBtn(
                    "https://wa.me/524778217435",
                    "Contactar a Santiago",
                );
                delayedClose();
            } else {
                addBotMsg(
                    "No estoy seguro de entender. ¿Quieres ver nuestra ubicación o el catálogo?",
                    ["Ubicación", "Catálogo"],
                );
            }
            break;

        case "CLOSING":
            addBotMsg(
                "¡Que tengas un excelente día! Minimizaré el chat para que veas la página mejor. 👋",
                [],
            );
            delayedClose();
            break;

        default:
            addBotMsg("¿En qué más puedo ayudarte?", [
                "Ver Carrito",
                "Ubicación",
            ]);
            chatState.step = "MENU";
    }
}

// Funciones de Respuesta Bot
function botThinking(callback) {
    const chatContent = document.getElementById("chat-content");
    const id = "thinking-" + Date.now();
    chatContent.innerHTML += `
          <div id="${id}" class="flex gap-2 fade-in-up">
              <div class="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center"><i class="bx bx-dots-horizontal-rounded animate-pulse text-royal-900"></i></div>
              <div class="text-xs text-slate-400 mt-2">Escribiendo...</div>
          </div>`;
    scrollToBottom();

    setTimeout(() => {
        document.getElementById(id).remove();
        callback();
    }, 1200); // Retardo artificial para realismo
}

function addBotMsg(text, suggestions) {
    const chatContent = document.getElementById("chat-content");
    chatContent.innerHTML += `
          <div class="flex gap-2 max-w-[90%] fade-in-up">
              <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=200" class="w-8 h-8 rounded-full border border-gold-400 object-cover shrink-0 mt-1">
              <div class="chat-bubble-bot p-3 text-sm">
                  ${text}
              </div>
          </div>`;
    renderSuggestions(suggestions);
    scrollToBottom();
}

function addUserMsg(text) {
    const chatContent = document.getElementById("chat-content");
    chatContent.innerHTML += `
          <div class="flex justify-end fade-in-up">
              <div class="chat-bubble-user p-3 text-sm max-w-[85%]">
                  ${text}
              </div>
          </div>`;
    scrollToBottom();
}

function renderSuggestions(opts) {
    const container = document.getElementById("chat-suggestions");
    if (opts.length > 0) {
        container.parentElement.classList.remove("hidden");
        container.innerHTML = opts
            .map(
                (o) => `
              <button onclick="document.getElementById('chat-input').value='${o}'; handleUserMessage()" 
                      class="px-3 py-1 bg-white border border-gold-400/30 text-royal-900 rounded-full text-xs hover:bg-gold-400 hover:text-white transition shadow-sm">
                  ${o}
              </button>
          `,
            )
            .join("");
    } else {
        container.innerHTML = "";
    }
}

function scrollToBottom() {
    const el = document.getElementById("chat-content");
    el.scrollTop = el.scrollHeight;
}

function sendWhatsAppCart() {
    let msg = `Hola Santiago, soy ${chatState.name}. Planeo un(a) ${chatState.type}.\n\n*COTIZACIÓN SOLICITADA:*\n`;
    let total = 0;
    Object.values(cart).forEach((item) => {
        msg += `• ${item.qty}x ${item.name} - $${item.price * item.qty}\n`;
        total += item.price * item.qty;
    });
    msg += `\n*Total Estimado: $${total.toLocaleString()}*\n¿Tienen disponibilidad?`;

    addBotMsg(
        `He generado tu resumen por $${total.toLocaleString()}. Haz clic abajo para enviármelo.`,
        [],
    );
    addLinkBtn(
        `https://wa.me/524778217435?text=${encodeURIComponent(msg)}`,
        "Enviar a WhatsApp",
    );
    delayedClose();
}

function showLocation() {
    addBotMsg(
        "Estamos en Calle Tallin 145, Col. Agua Azul. Aquí tienes el mapa:",
        ["Gracias"],
    );
    const chatContent = document.getElementById("chat-content");
    chatContent.innerHTML += `
          <div class="my-2 rounded-lg overflow-hidden border border-slate-200 shadow-sm fade-in-up ml-10 max-w-[80%]">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4939226297374!2d-101.6666896249658!3d21.13276688054366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf61e3895eef%3A0xe544974797055745!2sCalle%20Tallin%20145%2C%20Agua%20Azul%2C%2037250%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1704230000000!5m2!1ses-419!2smx" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>`;
    scrollToBottom();
    chatState.step = "CLOSING";
}

function addLinkBtn(url, label) {
    const chatContent = document.getElementById("chat-content");
    chatContent.innerHTML += `
          <div class="flex justify-center my-2 fade-in-up">
              <a href="${url}" target="_blank" class="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-bold shadow hover:bg-[#20ba56] transition text-sm">
                  <i class='bx bxl-whatsapp text-lg'></i> ${label}
              </a>
          </div>`;
    scrollToBottom();
}

function delayedClose() {
    setTimeout(() => {
        const win = document.getElementById("chat-window");
        if (!win.classList.contains("hidden")) {
            toggleChat();
            // Reset state partially so if they open again it's friendly
            chatState.step = "MENU";
        }
    }, 5000); // 5 segundos para leer y cierra
}

// --- INICIALIZACIÓN ---
renderProducts();
renderComments();
