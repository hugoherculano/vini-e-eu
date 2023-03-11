const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const contasBancarias = [];

app.get("/users", (request, response) => {

  const users = contasBancarias;

  return response.status(200).json({ users });
});

app.post("/cadastro", (request, response) => {
  const { nome, idade, conta } = request.body;

  const user = {
    nome,
    idade,
    conta,
    id: uuid()
  }

  contasBancarias.push(user);

  return response.status(201).json({ message: "Conta criada com sucesso! :)"});

});

app.post("/login", (request, response) => {
  const { nome, conta } = request.body;
  
  try {

    const user = contasBancarias.find((item) => item.nome === nome && item.conta === conta);

    if(!user) {
      throw new Error("Esse usuário não existe!!!");
    }

    return response.status(200).json({ message: "Usuário logado com sucesso!" });

  } catch(err) {

    return response.status(400).json({ message: err.message });

  }

});


app.listen(8000, () => {
  console.log("Server is runnirg!");
});
