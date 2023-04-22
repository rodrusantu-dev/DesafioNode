# DesafioNode
 Desafio de NodeJS - Sistema Financeiro


# API de Transações Financeiras
Este é um projeto de uma API que permite criar, listar, editar e deletar transações financeiras.

## Tecnologias utilizadas
Node.js
Express

## Como executar o projeto
Clone o repositório em sua máquina local.
Instale as dependências do projeto com o comando npm install.
Execute o comando npm start para rodar a aplicação.
A API estará disponível no endereço http://localhost:3000.

## Endpoints
POST /transactions
Cria uma nova transação financeira.

Request
Body:

json
Copy code
```
{
  "descricao": "Descrição da transação",
  "valor": 100.0
}
Response
Status: 201 Created
```
Body:

json
Copy code
```
{
  "id": "ae418c52-7d53-47c9-9f19-54c39dcbcfb8",
  "dataCriacao": "2023-04-21T16:00:00.000Z",
  "descricao": "Descrição da transação",
  "valor": 100
}
```

### GET /transactions
Lista todas as transações financeiras.

Response
Status: 200 OK

Body:

json
Copy code
[
  {
    "id": "ae418c52-7d53-47c9-9f19-54c39dcbcfb8",
    "dataCriacao": "2023-04-21T16:00:00.000Z",
    "descricao": "Descrição da transação",
    "valor": 100
  }
]
PUT /transactions/:id
Edita uma transação financeira existente.

Request
Params:

id: ID da transação a ser editada.
Body:

json
Copy code
{
  "descricao": "Nova descrição da transação",
  "valor": 150.0
}
Response
Status: 200 OK

Body:

json
Copy code
{
  "message": "Transação ae418c52-7d53-47c9-9f19-54c39dcbcfb8 atualizada com sucesso."
}
DELETE /transactions/:id
Deleta uma transação financeira existente.

Request
Params:

id: ID da transação a ser deletada.
Response
Status: 200 OK

Body:

json
Copy code
{
  "message": "Transação excluída com sucesso."
}
Considerações finais
Essa API foi desenvolvida como parte de um projeto de estudos em Node.js e Express, portanto, não deve ser utilizada em produção.