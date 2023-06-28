require('dotenv').config()

const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT


// Parciales 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'by Fran Segura',
        titulo: 'Testing Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'by Fran Segura',
        titulo: 'Testing Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'by Fran Segura',
        titulo: 'Testing Node'
    })
})

app.get('*', (req, res) => {
    res.send('404 | PAGE NOT FOUND')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})