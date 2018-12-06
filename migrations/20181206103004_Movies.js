
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Movies', (movie) => {
        movie.increments('id')
        movie.string('title')
        movie.string('director')
        movie.integer('year')
        movie.integer('rating')
        movie.string('imgURL')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Movies')
};
