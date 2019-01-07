const database = require('./database-connection')

module.exports = {
    listAll(){
        return database('Movies')  
    },
    getById(id){
            return database('Movies').where({id: id}).first()
    },
    deleteMovie(id){
        return database('Movies')
        .where({id: id})
        .delete()
    },
    updateMovie(id, movie){
        return database('Movies')
        .where({id: id})
        .update(movie)
        .returning('*')
    },
    createMovie(newMovie){
        return database('Movies')
        .insert(newMovie)
    }
  }