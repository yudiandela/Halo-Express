const app = require('./app.js')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})
