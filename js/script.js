import peliculas from './peliculas.js'

console.log(peliculas);

const generos = {
  28: document.getElementById('genero-28'),
  53: document.getElementById('genero-53'),
  12: document.getElementById('genero-12'),
};

function renderPeliculasPorGenero(generoId) {
  const contenedor = generos[generoId];
  const filtradas = peliculas.filter(peli => peli.genre_ids.includes(generoId));

  filtradas.forEach(peli => {
    const card = document.createElement('div');
    card.classList.add('pelicula');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${peli.poster_path}`;
    img.alt = peli.title;

    const titulo = document.createElement('h3');
    titulo.textContent = peli.title;

    card.appendChild(img);
    card.appendChild(titulo);
    contenedor.appendChild(card);
  });
}

renderPeliculasPorGenero(28);
renderPeliculasPorGenero(53);
renderPeliculasPorGenero(12);
