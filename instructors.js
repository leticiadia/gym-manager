const fs = require('fs') //fs: file system

const data = require('./data.json')

//Create
exports.post = function(req, res){
    // Validação dos dados feita antes de enviar para o banco de dados.
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ''){
            return res.send('Please, fill all fields.')
        }
    }

    req.body.birth = Date.parse(req.body.birth)
    req.body.created_at = Date.now()

    //[]
    data.instructors.push(req.body) //[{...}]

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send('Write file error')
        }

        return res.redirect('/instructors')
    })
    
    //return res.send(req.body)
}

//Upadate


//delete