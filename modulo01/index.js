const { json } = require('express');
const express = require('express');


const server = express();

server.use(express.json())
// Query params: ?teste=1 // const nome = req.query.name; 
// Route params: /users/1
// Request body: { "name": "Diego", "email": "diego@rocketseat.com" }

//CRUD - Create, Read, Update, Delete

const users = ['Diego', 'Fabio', 'Yuri'];


server.get('/users', (req, res) => {
    return res.json(users);
})


server.get('/users/:index', (req, res) => {

  const { index } = req.params; 

  return res.json(users[index]);
})


server.post('/users', (req, res) =>{

  const { name } = req.body; 

  users.push(name);

  return res.json(users);
})


server.put('/users/:index', (req, res) =>{
  const { index } = req.params; 
  const { name } = req.body; 

  users[index] = name;

  return res.json(users);
})


server.delete('/users/:index', (req,res) => {

  const { index } = req.params;

  users.splice(index, 1);

  return res.send()
  // res.json(users); 
  

})



server.listen(3000);