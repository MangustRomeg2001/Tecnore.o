const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const pokemonInfo = document.getElementById("pokemonInfo");
const pokemonImage = document.getElementById("pokemonImage");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                pokemonInfo.innerHTML = `
                    Nombre: ${data.name}<br>
                    Peso: ${data.weight} kg<br>
                    Altura: ${data.height} dm<br>
                    Tipo: ${data.types[0].type.name}
                `;
                pokemonImage.innerHTML = `
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                `;
            })
            .catch(error => {
                console.error("No se pudo encontrar el Pokémon.");
                pokemonInfo.innerHTML = "";
                pokemonImage.innerHTML = "";
            });
    }
});


const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        // Buscar información del Pokémon (código anterior)
        // ...

        // Buscar información del pronóstico del tiempo
        fetch(`https://openweathermap.org/api${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                weatherInfo.innerHTML = `
                    Temperatura: ${data.temperatura}°C<br>
                    Estado del cielo: ${data.estadoCielo}<br>
                    Precipitación: ${data.precipitacion}
                `;
            })
            .catch(error => {
                console.error("No se pudo obtener el pronóstico del tiempo.");
                weatherInfo.innerHTML = "";
            });
    }
});
