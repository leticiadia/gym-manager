const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

// Criando o servidor
const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(routes)

server.set('view engine', 'njk') 



nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})


// Colocando ele online
server.listen('5001', function(){
    console.log('Server is running')
})