import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const [inputTitulo, setInputTitulo] = React.useState("");
  const [inputMercado, setInputMercado] = React.useState("");
  
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  const produto = useSelector((state) => state.produtosReducer.produtos);

  const dispatch = useDispatch();

  function alterarTtitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  
  function adicionarProduto(event) {
    event.preventDefault();

    const objProduto = {
      nome: inputMercado
    }
    dispatch({type: "ADICIONAR", value: objProduto});
  }

  
  return (
    <div class="container p-4">

      <form>
        <label> Título da Lista: </label>
        <input placeholder="Digite o título da sua lista..." value = {inputTitulo} onChange = {alterarTtitulo}/>
      </form>

      <br />
      <h1> { stateTitulo} </h1>

      <form onSubmit={adicionarProduto}>

        <input placeholder="Digite um produto..." 
        value={inputMercado} 
        onChange={(event) => setInputMercado(event.target.value)}/>

      <br />
      <br />

      <button class="btn btn-info"> Enviar</button>

      </form>

      <br />
      
      {produto.map((produto, index)=>{
        return (
          <li key={index}>{produto.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
