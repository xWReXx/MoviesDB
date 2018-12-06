
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('Movies').insert([
        {
          title: "Austin Powers",
          director: "Mike Myers",
          year: 1997,
          rating: 5,
          imgURL: "https://m.media-amazon.com/images/M/MV5BMTRhZTY0MDItY2I1Yi00MGE3LTk1ZDEtMjA0ZGZhNDQyNGU0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,658,1000_AL_.jpg"
        },
        {
          title: "Joe Dirt",
          director: "Dennie Gordon",
          year: 2001,
          rating: 5,
          imgURL: "https://m.media-amazon.com/images/M/MV5BMTE5NDgxNzU1MV5BMl5BanBnXkFtZTYwODQ4ODE3._V1_.jpg"
        },
        {
          title: "Get Him to The Greek",
          director: "Nicholos Stoller",
          year: 2011,
          rating: 5,
          imgURL: "https://m.media-amazon.com/images/M/MV5BMjIyMzQ0MjExNV5BMl5BanBnXkFtZTcwMzkyMzgxMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
        },
        {
          title: "Super Troopers",
          director: "Jay Chandrasekhar",
          year: 2001,
          rating: 5,
          imgURL: "https://m.media-amazon.com/images/M/MV5BYzAyOTZjZDItZjNiYy00YTA3LWEyYWMtZTA0NmUzYjZhNjg0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
        {
          title: "Grandma's Boy",
          director: "Nicholaus Goossen",
          year: 2006,
          rating: 5,
          imgURL: "https://m.media-amazon.com/images/M/MV5BMDFiYzQ0NzktMGNkNy00YTQ0LTgxODgtNDViNGIxMTc1NGFjL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX682_AL_.jpg"
        }
      ]);
    });
};
