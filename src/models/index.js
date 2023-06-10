const Genre = require("./Genre");
const Movie = require("./Movie");

//Relacion muchos a muchos (movie con genre)
Movie.belongsToMany(Genre, { through: "MoviesGenres" });
Genre.belongsToMany(Movie, { through: "MoviesGenres" });
