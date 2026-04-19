const recetas = [
  {
    id: 1,
    nombre: "Pancakes",
    categoria: "Desayuno",
    descripcion: "Pancakes suaves y esponjosos.",
    imagen: "img/pancakes.jpg",
    ingredientes: [
      "1 taza de harina",
      "1 huevo",
      "1 taza de leche",
      "1 cucharada de azúcar",
      "1 cucharadita de polvo para hornear"
    ],
    preparacion: [
      "Mezclar todos los ingredientes en un recipiente.",
      "Batir hasta obtener una mezcla homogénea.",
      "Calentar una sartén a fuego medio.",
      "Verter pequeñas porciones de mezcla.",
      "Cocinar por ambos lados y servir."
    ]
  },
  {
    id: 2,
    nombre: "Arepa con queso",
    categoria: "Desayuno",
    descripcion: "Arepa tradicional con queso.",
    imagen: "img/arepa.jpg",
    ingredientes: [
      "2 tazas de harina de maíz",
      "2 tazas de agua",
      "Queso rallado",
      "Sal al gusto"
    ],
    preparacion: [
      "Mezclar la harina con el agua y la sal.",
      "Agregar el queso rallado.",
      "Formar arepas redondas.",
      "Asar en sartén hasta dorar por ambos lados."
    ]
  },
  {
    id: 3,
    nombre: "Huevos pericos",
    categoria: "Desayuno",
    descripcion: "Huevos con tomate y cebolla.",
    imagen: "img/huevos.jpg",
    ingredientes: [
      "2 huevos",
      "1 tomate picado",
      "1/4 de cebolla picada",
      "Sal al gusto"
    ],
    preparacion: [
      "Sofreír la cebolla y el tomate.",
      "Agregar los huevos batidos.",
      "Revolver hasta cocinar.",
      "Servir caliente."
    ]
  },
  {
    id: 4,
    nombre: "Sandwich de pollo",
    categoria: "Desayuno",
    descripcion: "Sandwich rápido y delicioso.",
    imagen: "img/sandwich.jpg",
    ingredientes: [
      "2 tajadas de pan",
      "Pollo desmechado",
      "Lechuga",
      "Tomate",
      "Mayonesa"
    ],
    preparacion: [
      "Untar mayonesa en el pan.",
      "Agregar pollo, lechuga y tomate.",
      "Cerrar el sandwich y servir."
    ]
  },
  {
    id: 5,
    nombre: "Pasta cremosa",
    categoria: "Almuerzo",
    descripcion: "Pasta con salsa cremosa.",
    imagen: "img/pasta.jpg",
    ingredientes: [
      "250 g de pasta",
      "1 taza de crema de leche",
      "Queso rallado",
      "Sal y pimienta"
    ],
    preparacion: [
      "Cocinar la pasta.",
      "Preparar la salsa con crema y queso.",
      "Mezclar con la pasta.",
      "Servir caliente."
    ]
  },
  {
    id: 6,
    nombre: "Arroz con pollo",
    categoria: "Almuerzo",
    descripcion: "Receta tradicional completa.",
    imagen: "img/arroz.jpg",
    ingredientes: [
      "2 tazas de arroz",
      "Pollo desmechado",
      "Arvejas",
      "Zanahoria",
      "Condimentos"
    ],
    preparacion: [
      "Cocinar el arroz.",
      "Sofreír el pollo y las verduras.",
      "Mezclar todo.",
      "Servir caliente."
    ]
  },
  {
    id: 7,
    nombre: "Lasaña",
    categoria: "Almuerzo",
    descripcion: "Capas de pasta y carne.",
    imagen: "img/lasana.jpg",
    ingredientes: [
      "Láminas de pasta",
      "Carne molida",
      "Salsa de tomate",
      "Queso",
      "Bechamel"
    ],
    preparacion: [
      "Cocinar la carne.",
      "Armar capas con pasta, carne y salsas.",
      "Cubrir con queso.",
      "Hornear hasta gratinar."
    ]
  },
  {
    id: 8,
    nombre: "Sopa de verduras",
    categoria: "Almuerzo",
    descripcion: "Saludable y nutritiva.",
    imagen: "img/sopa.jpg",
    ingredientes: [
      "Papa",
      "Zanahoria",
      "Apio",
      "Cebolla",
      "Agua y sal"
    ],
    preparacion: [
      "Picar las verduras.",
      "Cocinarlas en agua con sal.",
      "Dejar hervir hasta ablandar.",
      "Servir caliente."
    ]
  },
  {
    id: 9,
    nombre: "Ensalada fresca",
    categoria: "Saludable",
    descripcion: "Vegetales frescos.",
    imagen: "img/ensalada.jpg",
    ingredientes: [
      "Lechuga",
      "Tomate",
      "Pepino",
      "Zanahoria",
      "Limón y sal"
    ],
    preparacion: [
      "Lavar y picar los vegetales.",
      "Mezclar en un recipiente.",
      "Agregar limón y sal al gusto.",
      "Servir fresca."
    ]
  },
  {
    id: 10,
    nombre: "Batido de fresa",
    categoria: "Bebida",
    descripcion: "Refrescante y dulce.",
    imagen: "img/batido.jpg",
    ingredientes: [
      "Fresas",
      "Leche",
      "Azúcar",
      "Hielo"
    ],
    preparacion: [
      "Agregar todo a la licuadora.",
      "Licuar hasta obtener mezcla cremosa.",
      "Servir frío."
    ]
  },
  {
    id: 11,
    nombre: "Limonada de coco",
    categoria: "Bebida",
    descripcion: "Cremosa y deliciosa.",
    imagen: "img/limonada.jpg",
    ingredientes: [
      "Jugo de limón",
      "Crema de coco",
      "Azúcar",
      "Hielo"
    ],
    preparacion: [
      "Licuar todos los ingredientes.",
      "Servir bien fría."
    ]
  },
  {
    id: 12,
    nombre: "Jugo de mango",
    categoria: "Bebida",
    descripcion: "Natural y fácil.",
    imagen: "img/mango.jpg",
    ingredientes: [
      "Mango",
      "Agua",
      "Azúcar"
    ],
    preparacion: [
      "Pelar y picar el mango.",
      "Licuar con agua y azúcar.",
      "Servir frío."
    ]
  },
  {
    id: 13,
    nombre: "Torta de chocolate",
    categoria: "Postre",
    descripcion: "Perfecta para compartir.",
    imagen: "img/torta.jpg",
    ingredientes: [
      "Harina",
      "Huevos",
      "Chocolate",
      "Azúcar",
      "Mantequilla"
    ],
    preparacion: [
      "Mezclar los ingredientes.",
      "Verter en un molde.",
      "Hornear hasta cocinar.",
      "Dejar enfriar y servir."
    ]
  },
  {
    id: 14,
    nombre: "Flan casero",
    categoria: "Postre",
    descripcion: "Suave y dulce.",
    imagen: "img/flan.jpg",
    ingredientes: [
      "Leche",
      "Huevos",
      "Azúcar",
      "Vainilla"
    ],
    preparacion: [
      "Preparar el caramelo.",
      "Mezclar el resto de ingredientes.",
      "Verter en molde.",
      "Cocinar a baño maría."
    ]
  },
  {
    id: 15,
    nombre: "Galletas",
    categoria: "Postre",
    descripcion: "Ideales para café.",
    imagen: "img/galletas.jpg",
    ingredientes: [
      "Harina",
      "Mantequilla",
      "Azúcar",
      "Huevo"
    ],
    preparacion: [
      "Mezclar ingredientes.",
      "Formar galletas.",
      "Hornear hasta dorar."
    ]
  },
  {
    id: 16,
    nombre: "Cupcakes",
    categoria: "Postre",
    descripcion: "Pequeños y decorados.",
    imagen: "img/cupcakes.jpg",
    ingredientes: [
      "Harina",
      "Azúcar",
      "Huevos",
      "Mantequilla",
      "Polvo para hornear"
    ],
    preparacion: [
      "Preparar la mezcla.",
      "Llenar moldes.",
      "Hornear.",
      "Decorar al gusto."
    ]
  },
  {
    id: 17,
    nombre: "Pizza",
    categoria: "Cena",
    descripcion: "Clásica y deliciosa.",
    imagen: "img/pizza.jpg",
    ingredientes: [
      "Masa para pizza",
      "Salsa de tomate",
      "Queso",
      "Jamón"
    ],
    preparacion: [
      "Extender la masa.",
      "Agregar salsa y queso.",
      "Añadir ingredientes.",
      "Hornear hasta dorar."
    ]
  },
  {
    id: 18,
    nombre: "Hamburguesa",
    categoria: "Cena",
    descripcion: "Jugosa y completa.",
    imagen: "img/hamburguesa.jpg",
    ingredientes: [
      "Pan",
      "Carne",
      "Queso",
      "Lechuga",
      "Tomate"
    ],
    preparacion: [
      "Cocinar la carne.",
      "Armar la hamburguesa con los ingredientes.",
      "Servir caliente."
    ]
  },
  {
    id: 19,
    nombre: "Tacos",
    categoria: "Cena",
    descripcion: "Llenos de sabor.",
    imagen: "img/tacos.jpg",
    ingredientes: [
      "Tortillas",
      "Carne",
      "Cebolla",
      "Salsas"
    ],
    preparacion: [
      "Cocinar la carne.",
      "Rellenar las tortillas.",
      "Agregar cebolla y salsas.",
      "Servir."
    ]
  },
  {
    id: 20,
    nombre: "Pollo al horno",
    categoria: "Cena",
    descripcion: "Dorado y delicioso.",
    imagen: "img/pollo.jpg",
    ingredientes: [
      "Pollo",
      "Ajo",
      "Sal",
      "Pimienta",
      "Aceite"
    ],
    preparacion: [
      "Condimentar el pollo.",
      "Llevar al horno.",
      "Cocinar hasta dorar.",
      "Servir caliente."
    ]
  }
];

const contenedor = document.getElementById("contenedor-recetas");
const contenedorFavoritas = document.getElementById("contenedor-favoritas");
const contenedorHechas = document.getElementById("contenedor-hechas");
const buscador = document.getElementById("buscador");
const detalleReceta = document.getElementById("detalle-receta");

let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
let hechas = JSON.parse(localStorage.getItem("hechas")) || [];

function crearTarjeta(receta, esPrincipal = true) {
  const esFavorita = favoritas.includes(receta.id);
  const esHecha = hechas.includes(receta.id);

  const card = document.createElement("div");
  card.classList.add("card");

  if (esPrincipal) {
    card.innerHTML = `
      <div class="card-image">
        <img src="${receta.imagen}" alt="${receta.nombre}">
      </div>
      <h3>${receta.nombre}</h3>
      <p class="categoria">${receta.categoria}</p>
      <p>${receta.descripcion}</p>
      <div class="buttons">
        <button onclick="irAReceta(${receta.id})">Ver receta</button>
        <button onclick="toggleFavorita(${receta.id})">
          ${esFavorita ? "💖 Guardada" : "❤️ Favorita"}
        </button>
        <button onclick="toggleHecha(${receta.id})">
          ${esHecha ? "✔️ Hecha" : "✅ Marcar hecha"}
        </button>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="card-image">
        <img src="${receta.imagen}" alt="${receta.nombre}">
      </div>
      <h3>${receta.nombre}</h3>
      <p class="categoria">${receta.categoria}</p>
      <p>${receta.descripcion}</p>
      <div class="buttons">
        <button onclick="irAReceta(${receta.id})">Ver receta</button>
      </div>
    `;
  }

  return card;
}

function mostrarRecetas(lista) {
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron recetas.</p>";
    return;
  }

  lista.forEach((receta) => {
    const card = crearTarjeta(receta, true);
    contenedor.appendChild(card);
  });
}

function mostrarFavoritas() {
  if (!contenedorFavoritas) return;

  contenedorFavoritas.innerHTML = "";

  const recetasFavoritas = recetas.filter((receta) =>
    favoritas.includes(receta.id)
  );

  if (recetasFavoritas.length === 0) {
    contenedorFavoritas.innerHTML = "<p>No has marcado recetas favoritas todavía.</p>";
    return;
  }

  recetasFavoritas.forEach((receta) => {
    const card = crearTarjeta(receta, false);
    contenedorFavoritas.appendChild(card);
  });
}

function mostrarHechas() {
  if (!contenedorHechas) return;

  contenedorHechas.innerHTML = "";

  const recetasHechas = recetas.filter((receta) =>
    hechas.includes(receta.id)
  );

  if (recetasHechas.length === 0) {
    contenedorHechas.innerHTML = "<p>No has marcado recetas como hechas todavía.</p>";
    return;
  }

  recetasHechas.forEach((receta) => {
    const card = crearTarjeta(receta, false);
    contenedorHechas.appendChild(card);
  });
}

function toggleFavorita(id) {
  if (favoritas.includes(id)) {
    favoritas = favoritas.filter((x) => x !== id);
  } else {
    favoritas.push(id);
  }

  localStorage.setItem("favoritas", JSON.stringify(favoritas));
  actualizarVista();
}

function toggleHecha(id) {
  if (hechas.includes(id)) {
    hechas = hechas.filter((x) => x !== id);
  } else {
    hechas.push(id);
  }

  localStorage.setItem("hechas", JSON.stringify(hechas));
  actualizarVista();
}

function irAReceta(id) {
  window.location.href = `receta.html?id=${id}`;
}

function mostrarDetalleReceta() {
  if (!detalleReceta) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const receta = recetas.find((r) => r.id === id);

  if (!receta) {
    detalleReceta.innerHTML = "<p>La receta no fue encontrada.</p>";
    return;
  }

  const esFavorita = favoritas.includes(receta.id);
  const esHecha = hechas.includes(receta.id);

  detalleReceta.innerHTML = `
    <article class="detalle-card moderno">
      <div class="detalle-imagen-principal">
        <img src="${receta.imagen}" alt="${receta.nombre}" class="detalle-img">
      </div>

      <div class="detalle-top">
        <div class="detalle-info-principal">
          <span class="badge-categoria">${receta.categoria}</span>
          <h2>${receta.nombre}</h2>
          <p class="detalle-descripcion">${receta.descripcion}</p>
        </div>
      </div>

      <div class="detalle-grid">
        <section class="detalle-seccion bloque">
          <h3>Ingredientes</h3>
          <ul>
            ${receta.ingredientes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="detalle-seccion bloque">
          <h3>Preparación</h3>
          <ol>
            ${receta.preparacion.map((paso) => `<li>${paso}</li>`).join("")}
          </ol>
        </section>
      </div>

      <div class="buttons detalle-buttons">
        <button onclick="toggleFavorita(${receta.id})">
          ${esFavorita ? "💖 Guardada en favoritas" : "❤️ Guardar en favoritas"}
        </button>
        <button onclick="toggleHecha(${receta.id})">
          ${esHecha ? "✔️ Ya fue marcada como hecha" : "✅ Marcar como hecha"}
        </button>
      </div>
    </article>
  `;
}

function actualizarVista() {
  favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
  hechas = JSON.parse(localStorage.getItem("hechas")) || [];

  if (contenedor) {
    let recetasFiltradas = recetas;

    if (buscador) {
      const textoBusqueda = buscador.value.toLowerCase().trim();

      recetasFiltradas = recetas.filter(
        (receta) =>
          receta.nombre.toLowerCase().includes(textoBusqueda) ||
          receta.categoria.toLowerCase().includes(textoBusqueda)
      );
    }

    mostrarRecetas(recetasFiltradas);
    mostrarFavoritas();
    mostrarHechas();
  }

  mostrarDetalleReceta();
}

if (buscador) {
  buscador.addEventListener("input", actualizarVista);
}

actualizarVista();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("Service Worker registrado correctamente");
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  });
}