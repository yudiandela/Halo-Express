const tanggalIndo = (date) => {
    date = new Date()
    let getDate = date.getDate()
    let getDay = date.getDay()
    let getMonth = date.getMonth()
    let getYear = date.getFullYear()

    let arrDay = [
        'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'
    ]

    let arrMonth = [
        'Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'
    ]

    return `${arrDay[getDay]}, ${getDate} ${arrMonth[getMonth]} ${getYear}`
}

module.exports = {
    tanggalIndo: tanggalIndo
}