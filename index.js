const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "build")))
app.use(express.static("public"))

app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
})