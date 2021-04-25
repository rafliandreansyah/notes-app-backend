const {
    addNoteHandler, 
    getAllNoteHandler, 
    getDetailNoteHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
} 
= require('./handler')

const route = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getDetailNoteHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
]

module.exports = route