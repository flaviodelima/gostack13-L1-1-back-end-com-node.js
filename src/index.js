const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json())
/**
 * 3 Principais tipos de parâmetro:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (para atualizar/deletar)
 * Request Body: Conteúdo para criar ou editar recurso (JSON)
*/


app.get('/', (request,response) => {
  return response.json({message: 'Hello World'});
});

app.put('/projects/:id', (request,response)=>{
  const params = request.params
  console.log(params);
  return response.json([
    'Project 4',
    'Project 3',
    'Project 2',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Project 2',
    'Project 3',
  ])
})

app.post('/projects/:id',(request, response)=>{
  const {id} = request.params;
  console.log(request.body);
  return response.json([
    `Project ${id}: ${request.body.title}`
  ]);
});

app.listen(3333, ()=> {
  console.log('Back-end started!')
});