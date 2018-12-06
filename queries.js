const database = require('./database-connection')

module.exports = {
    listAll(){
        return database('Movies')  
    },
    getById(id){
            return database('Movies').where({id: id}).first()
    },
    deleteStudent(id){
        return database('Movies')
        .where({id: id})
        .delete()
    },
    updateStudent(id, movie){
        return database('Movies')
        .where({id: id})
        .update(movie)
        .returning('*')
    },
    createStudent(newMovie){
        return database('Movies')
        .insert(newMovie)
    }
  }