import express, { json } from "express";

console.log(process.env.STRING_CONEXAO);

//Simula uma base de dados com identificadores únicos.
const posts = [
    {
      id: 1,
      descricao: "Uma foto de teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gatinho ronronando no sol",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 3,
      descricao: "Olhos de gato brilhando no escuro",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 4,
      descricao: "Um gato curioso explorando uma caixa",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 5,
      descricao: "Gato persa com pelo sedoso",
      imagem: "https://placecats.com/millie/300/150"
    },
];

const app = express();

// Middleware para JSON
app.use(express.json())

app.listen(3000, () => {
    console.log("Servid0r escutando...")
});

// Configuração da rota "/posts"
app.get("/posts", (req, res) => {
    res.status(200).json(posts)
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

// Configuração da rota "/posts"
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index])
});