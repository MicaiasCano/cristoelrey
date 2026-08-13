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
  },
  {
    recipe: "MONTE CASTRO3",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO4",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTR5",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTR6",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTR7",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTR8",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTR9",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO10",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO11",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO12",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO13",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO14",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO15",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO16",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO17",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO18",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO19",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
  },
  {
    recipe: "MONTE CASTRO20",
    image: "img/filial_monte_castro.jpg",
    description: "Marcos Sastre 5062<br>Bº Montecastro. C.A.B.A.<br>Prov. Buenos Aires. Argentina<br><br><b>D&iacute;as de Reuni&oacute;n</b><br>Martes, Jueves, S&aacute;bado:<br>19.00hs<br>Domingo:<br>9.00hs<br><br><b>Enc. de Obra:</b><br>Pastor Alfredo Narvaez",
    link: "https://maps.app.goo.gl/8o6NPLMM4PMuAkdA7",
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