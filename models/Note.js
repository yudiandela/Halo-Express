let NOTES = [
    {
        id: 1,
        title: 'Belajar Membuat aplikasi Catatan dengan Node JS',
        body: 'Ini deskripsi dari Belajar Membuat aplikasi Catatan dengan Node JS',
        user: 'Yudi Andela',
        created_at: new Date('2019-10-11')
    },
    {
        id: 2,
        title: 'Belajar Node JS dari Buku Om Riza Hacktiv8',
        body: 'Ini deskripsi dari Belajar Node JS dari Buku Om Riza Hacktiv8',
        user: 'Yudi Andela',
        created_at: new Date('2019-10-11')
    }
]

/**
 * Mengambil seluruh catatan
 */
const getAll = () => NOTES

/**
 * Mengambil data id dari url parameter
 * 
 * @param {integer} id
 */
const getId = (id) => {
    const notes = NOTES.filter((note) => {
        return note.id === parseInt(id);
    });
    return notes[0];
}

/**
 * Store data ke dalam database
 * 
 * @param {array} data
 */
const store = (data) => {
    const newData = data
    newData['id'] = NOTES.length + 1
    newData['created_at'] = new Date()
    NOTES.push(newData)

    return NOTES
}

/**
 * Mengubah data berdasarkan id
 * 
 * @param {integer} id 
 * @param {array} data 
 */
const update = (id, data) => {
    // Hapus catatan sekarang
    const newNotes = NOTES.filter((note) => {
        return note.id !== parseInt(id)
    })

    NOTES = newNotes

    // Tambah catatan baru dengan id sama
    const newNote = data
    newNote.id = parseInt(id)
    newNote.created_at = new Date()
    NOTES.push(newNote)

    return NOTES[id]
}

/**
 * Menghapus data berdasarkan id
 * 
 * @param {integer} id 
 */
const destroy = (id) => {
    NOTES = NOTES.filter((note) => {
        return note.id !== parseInt(id)
    })

    return NOTES
}

// export module
module.exports = {
    getAll: getAll,
    getId: getId,
    store: store,
    update: update,
    destroy: destroy
}
