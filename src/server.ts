import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => {
  return response.json( {message:'Hellor World'} );
})
 

app.listen(3333);