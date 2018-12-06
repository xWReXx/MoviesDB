
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Movies', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.string('director')
        movie.integer('Year')
        movie.integer('rating')
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('Movies')
};
