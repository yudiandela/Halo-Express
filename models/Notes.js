const NOTES = [
    {
        id: 1,
        title: 'Belajar Membuat aplikasi Catatan dengan Node JS',
        body:
            'Ini deskripsi dari Belajar Membuat aplikasi Catatan dengan Node JS',
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

const Notes = () => NOTES

module.exports = {
    Notes: Notes
}
