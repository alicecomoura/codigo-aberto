import { Component } from "react";

import "./App.css";

export default class Produto extends Component {
  // estado inical pode inicar com string vazia -> ''
  // neste caso, renderiza já com o produto1 com intuito da informação já vir em tela para o usuário
  state = {
    produtoState: "produto1",
  };

  // funções devem ser descritiva, não importa se o nome ficar extenso, pois qualquer pessoa deve compreender pelo nome o que a função tem como responsabilidade/objetivo
  // neste caso, nossa função fará a atualização do nosso estado por meio do parâmetro "produto" que ela recebe
  manipulaMudancaDoProduto = (produto) => {
    this.setState({ produtoState: produto });
  };

  render() {
    // [] => array
    // {} => objeto
    // [{}, {}, {}] => array de objetos (nossa lista de produtos é um array de objetos)
    const produtos = [
      {
        name: "Produto 1",
        caracteristica: "Cor azul",
        value: "produto1",
      },
      {
        name: "Produto 2",
        caracteristica: "Cor preta",
        value: "produto2",
      },
      {
        name: "Produto 3",
        caracteristica: "Cor azul e preta",
        value: "produto3",
      },
    ];

    // componentes únicos para cada informação dos produtos
    const Produto1 = () => {
      return (
        <>
          <p>
            <b>Produto 1</b> Lorem ipsum dolor sit amet. Est sint explicabo est
            fugiat repudiandae aut commodi dolorem et consequatur aperiam rem
            incidunt voluptatem est reiciendis cumque vel consequatur tempora!{" "}
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/4247/4247872.png" alt="TV azul" />
        </>
      );
    };

    const Produto2 = () => {
      return (
        <>
          <p>
            <b>Produto 2</b> Aut tempore enim et optio suscipit ad quia
            perspiciatis non adipisci commodi est harum exercitationem ea quam
            amet. In dolor debitis qui laborum accusamus 33 quaerat porro id
            quisquam exercitationem
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/4247/4247865.png" alt="TV preta" />
        </>
      );
    };

    const Produto3 = () => {
      return (
        <>
          <p>
            <b>Produto 3</b> Et adipisci nesciunt hic voluptatem quos aut
            voluptates quisquam ea placeat exercitationem non sint tempore est
            repellat voluptatem. Qui quae itaque sed rerum voluptas et maiores
            quia non rerum dicta et possimus sunt quo dolorum tempora est eius
            similique.
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/4247/4247902.png" alt="TV azul e preta" />
        </>
      );
    };

    // object interation
    // objeto recebe 3 chaves, cada chave recebe o conteudo de seu produto
    const infoProdutos = {
      produto1: <Produto1 />,
      produto2: <Produto2 />,
      produto3: <Produto3 />,
    };

    // descomentar os console para poder visualizar a modificação
    console.log(this.state.produtoState)

    return (
      <div className="container">
        <h1>
          Código aberto com Vai na Web: <i>map, state e object interation</i>
        </h1>
        <div className="produtos-container">
          <div className="cards-container">
            {/* map() é um método para percorrer arrays */}
            {produtos.map((produto) => (
              <div className={`card ${this.state.produtoState === produto.value ? 'selecionado' : ''}`} key={produto.value}>
                <p>
                  <b>Nome: </b>
                  {produto.name}
                </p>
                <p>
                  <b>Característica: </b>
                  {produto.caracteristica}
                </p>
                {/* lembra que nossa função recebe um parâmetro?

                  manipulaMudancaDoProduto = (produto) => {
                    this.setState({produto: produto})
                  }

                  produto.value é nosso parâmetro, isso quer dizer que:
                  nossa função irá receber ou "produto1", ou "produto2" ou "produto3"
                  de acordo com o click/interação do usuário com o botão,
                  e dessa forma nosso estado é atualizado
              */}
                <button
                  className="botao-action"
                  onClick={() => this.manipulaMudancaDoProduto(produto.value)}
                >
                  Saiba mais
                </button>
              </div>
            ))}
          </div>
          <div className="info-container">
            <h2>Informações do produto</h2>
            {/* object interation:
            nosso infoProdutos é um objeto que recebe 3 chaves, produto1, produto2, produto3.
            {nomeDoObjetoDeInteracao[chave]}
            como temos um alteração dinâmica por meio do estado, podemos colocar nosso estado como chave,
            ou seja, toda vez que existir interação com o click do botão, nosso estado atualiza com o produto clicado,
            e então por baixo dos panos acontece o seguinte:
            click no produto 1 -> {infoProdutos[produto1]}
            click no produto 2 -> {infoProdutos[produto2]}
            click no produto 3 -> {infoProdutos[produto3]} 
          */}
            <div className="info-produto">
              {infoProdutos[this.state.produtoState]}
            </div>
          </div>
        </div>
        <p className="dev-by">
          Desenvolvido com ❤️ por{" "}
          <a href="https://www.linkedin.com/in/alicecomoura/" target="_blank" rel="noreferrer">
            @alicecomoura
          </a>
        </p>
      </div>
    );
  }
}
