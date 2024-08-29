import Produto from "./Produto";

export default class RepositorioProdutos {
  itens: Produto[] = [new Produto("colher", 5.99), new Produto("mouse", 39)];

  obterTodos() {
    return this.itens;
  }

  novo(nome: string, preco: number) {
    const novoProduto = new Produto(nome, preco);
    this.itens.push(novoProduto);
  }

  obterPorCodigo(codigo: string) {
    const produto = this.itens.find((produto) => produto.codigo === codigo);
    return produto;
  }

  alterarPorCodigo(codigo: string, nome?: string, preco?: number) {
    const indice = this.itens.findIndex((produto) => produto.codigo === codigo);
    if (indice >= 0 && indice < this.itens.length) {
      if (nome) {
        this.itens[indice].nome = nome;
      }
      if (preco) {
        this.itens[indice].preco = preco;
      }
    }
  }

  deletarPorCodigo(codigo: string) {
    const dadosAtualizados = this.itens.filter(
      (produto) => produto.codigo !== codigo
    );
    this.itens = [...dadosAtualizados];
  }
}
