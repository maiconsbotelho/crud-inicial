import RepositorioProdutos from "@src/core/produtos/RepositorioProdutos";
import { Router } from "express";

const repo = new RepositorioProdutos();
const router = Router();

// Lista todos os produtos
router.get("/", (req, res) => {
  const dados = repo.obterTodos();
  res.status(200).send(dados);
});

// Adiciona um novo produto
router.post("/", (req, res) => {
  const { nome, preco } = req.body;
  repo.novo(nome, preco);
  res.status(201).send();
});

// Busca um produto por código
router.get("/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const produto = repo.obterPorCodigo(codigo);
  if (!produto) {
    res.status(404).send();
  } else {
    res.status(200).send(produto);
  }
});

// Altera um produto por código
router.put("/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const { nome, preco } = req.body;
  repo.alterarPorCodigo(codigo, nome, preco);
  res.status(200).send();
});

// Deleta um produto por código
router.delete("/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  repo.deletarPorCodigo(codigo);
  res.status(200).send();
});

export default router;
