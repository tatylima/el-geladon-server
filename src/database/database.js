const mongoose = require('mongoose');
const remoteUrl =
  'mongodb+srv://root:admin@el-geladon-server.3nqts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localUrl =
  'mongodb+srv://root:Admin123@cardapio-el-geladon.9xneq.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityT';

function connectToDatabase() {
  mongoose
  .connect(`${remoteUrl}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
    .then(() => console.log('MongoDB Atlas Conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;