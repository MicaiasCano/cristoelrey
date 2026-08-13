// Base de datos de recetas / iglesias
const recipes = [
  {
    recipe: "MONTE CASTRO",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro<br>C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "ADONAI",
    image: "img/filial_adonai.jpg",
    description: "Cazon 6675<br>(e/ Chopin y Chasaing)<br>Gregorio de Laferrere<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes:<br>19.00hs<br>Domingo:<br>18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Ernesto Villan",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },{
    recipe: "Km 28",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Calle del Tejar 2360<br>Bº 17 De Octubre<br>Rafael Castillo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.00hs<br>Domingo: 18.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Rodolfo Herrera",
    link: "https://www.google.com/maps/place/Del+Tejar+2360,+B1755+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7317471,-58.6502659,15z/data=!3m1!4b1!4m10!1m2!2m1!1sCalle+del+Tejar+2360,++Barrio+17+De+Octubre,+Rafael+Castillo!3m6!1s0x95bcc41cfec9419f:0x9e091d5082c630d3!8m2!3d-34.7317485!4d-58.6318119!15sCjxDYWxsZSBkZWwgVGVqYXIgMjM2MCwgIEJhcnJpbyAxNyBEZSBPY3R1YnJlLCBSYWZhZWwgQ2FzdGlsbG-SARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11lfl4516m?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "ORO VERDE",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Puentecito 3132<br>Ruta Nac. Nº 3. Km 36<br>Gonzalez Catan<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Jueves y Sabado: 20.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Hugo Roldan",
    link: "https://www.google.com/maps/place/Puentecito+3130,+B1763FIJ+Virrey+del+Pino,+Provincia+de+Buenos+Aires/@-34.8144178,-58.6469213,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcdcaa995ff03d:0xd86ef53e7ec74f49!8m2!3d-34.8144178!4d-58.6462776!16s%2Fg%2F11f3vqv3v5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "ISIDRO CASANOVA",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Pujol 3563<br>Ruta Nac. Nº 3. Km 21<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Viernes, Sabado: 20.00hs<br>Domingo: 19.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Mario Guerrero",
    link: "https://www.google.com/maps/place/EMR,+Pujol+3564,+B1754+San+Justo,+Provincia+de+Buenos+Aires/@-34.7013601,-58.5784579,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcc66d28db20c5:0x262f2298d16cdb11!8m2!3d-34.7013601!4d-58.5778142!16s%2Fg%2F11q2stf6rd?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "BARRIO LA LOMA",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Recuero 6693<br>(e/ M. Paz y Varela)<br>Gregorio de Laferrere<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, Sabado: 19.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Mariano Villalba",
    link: "https://www.google.com/maps/place/Recuero+6690,+B1757DQV+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.7610418,-58.5901952,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc508b3819ebf:0xa63d1667663f009a!8m2!3d-34.7610418!4d-58.5876203!16s%2Fg%2F11mxb319th?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "LA ROCA SAGRADA ES CRISTO",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Marconi 6555<br>(esq. El Lazo)<br>Isidro Casanova<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 20.00hs<br>Domingo: 18.00hs<br>Cena del Se&ntilde;or: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Daniel Carrizo",
    link: "https://www.google.com/maps/place/Guillermo+Marconi+6555,+B1765LHA+Isidro+Casanova,+Provincia+de+Buenos+Aires/@-34.7319368,-58.5689928,19z/data=!3m1!4b1!4m6!3m5!1s0x95bcc592ddc55a73:0x37eea8d5a70a81ca!8m2!3d-34.7319368!4d-58.5683491!16s%2Fg%2F11gmz4h44f?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "SAN JOSE OESTE",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Pj. San Jose Oeste<br>Prov. Santiago del Estero<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 18.00hs<br>Domingo: 10.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Jesus Corvalan",
    link: "https://maps.app.goo.gl/BC38UQTZMQEsKdSY7",
  },
  {
    recipe: "QUITILIPI",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Irigoyen 1700<br>fte. al Bº Nueva Esperanza<br>Prov. Chaco<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles, Sabado: 19.30hs<br>Domingos: 8.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Domingo Lugo",
    link: "https://www.google.com/maps/place/La+predicadora+FM+106.7+MHz./@-26.8606128,-60.2276313,17z/data=!4m6!3m5!1s0x9446c9238d2b3775:0x3c8501eaec871a62!8m2!3d-26.860226!4d-60.2272937!16s%2Fg%2F11kfbx9q1b?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    recipe: "LA CUMBRE DEL CALVARIO",
    image: "img/Logo_Corona_Argentina_Dorada.png",
    description: "Raulies 2815<br>Rafael Castillo<br>Prov. Buenos Aires<br>Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Miercoles: 19.30hs<br>Sabado: 19.00hs<br>Domingo: 9.30hs<br><br><b>Enc. de Obra:</b><br>Pastor Jose Villalba",
    link: "https://www.google.com/maps/place/Raulies+2815,+B1755+Rafael+Castillo,+Provincia+de+Buenos+Aires/@-34.7347075,-58.6261529,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc41901ac2183:0x96433100a550167!8m2!3d-34.7347075!4d-58.6261529?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
  },
];

// Elementos del DOM
const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');

// Función para renderizar elementos en el grid
function renderRecipes(filteredRecipes) {
  recipeGrid.innerHTML = '';

  if (filteredRecipes.length === 0) {
    emptyState.style.display = 'block';
    recipeGrid.style.gridTemplateColumns = 'repeat(5, minmax(220px, 260px))';
    return;
  }

  emptyState.style.display = 'none';

  /* =========================
     CENTRADO DINÁMICO
  ========================= */
  if (window.innerWidth <= 768) {
    if (filteredRecipes.length === 1) {
      recipeGrid.style.gridTemplateColumns = 'repeat(1, minmax(160px, 220px))';
    } else {
      recipeGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
  } else {
    if (filteredRecipes.length === 1) {
      recipeGrid.style.gridTemplateColumns = 'repeat(1, minmax(220px, 260px))';
    } else if (filteredRecipes.length === 2) {
      recipeGrid.style.gridTemplateColumns = 'repeat(2, minmax(220px, 260px))';
    } else if (filteredRecipes.length === 3) {
      recipeGrid.style.gridTemplateColumns = 'repeat(3, minmax(220px, 260px))';
    } else if (filteredRecipes.length === 4) {
      recipeGrid.style.gridTemplateColumns = 'repeat(4, minmax(220px, 260px))';
    } else {
      recipeGrid.style.gridTemplateColumns = 'repeat(5, minmax(220px, 260px))';
    }
  }

  // Creación de tarjetas
  filteredRecipes.forEach(recipe => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img
          src="${recipe.image}"
          alt="${recipe.recipe}"
          loading="lazy"
        >
        <div class="card-gradient"></div>
      </div>

      <div class="card-content">
        <h2 class="card-title">
          ${recipe.recipe}
        </h2>

        <p class="card-description">
          ${recipe.description}
        </p>

        <div class="card-footer">
          <a
            href="${recipe.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="card-button"
          >
            cómo llegar
          </a>
        </div>
      </div>
    `;

    recipeGrid.appendChild(card);
  });
}

/* =========================
   BUSCADOR
========================= */
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase().trim();

  const filtered = recipes.filter(recipe => {
    const recipeMatch = recipe.recipe ? recipe.recipe.toLowerCase().includes(value) : false;
    const descriptionMatch = recipe.description ? recipe.description.toLowerCase().includes(value) : false;
    const tagMatch = recipe.tag ? recipe.tag.toLowerCase().includes(value) : false;

    return recipeMatch || descriptionMatch || tagMatch;
  });

  renderRecipes(filtered);
});

/* =========================
   INIT
========================= */
renderRecipes(recipes);
