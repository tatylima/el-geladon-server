const express = require('express');
const cors = require('cors');//proteger as requisições do frontend com backend
const app = express();
const route = require('./src/routes/paletas.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;

app.use(express.json());

app.use('/paletas', route);//utilizar rotas

connectToDatabase()

app.use(cors());//liberar o cors



//Fazemos o app ouvir na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
