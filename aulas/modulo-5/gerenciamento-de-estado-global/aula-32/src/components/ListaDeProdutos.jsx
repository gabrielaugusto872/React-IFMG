import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../redux/ShopSlice';
import { useState } from 'react';

function ListaDeProdutos(){
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("")
    const dispatch = useDispatch();

    const cadastra = (e) => {
        e.preventDefault();
        dispatch(ADD_ITEM({nome, preco}));
        setNome("");
        setPreco(""); 
    }


    return (
        <>
            <form onSubmit={cadastra}>
                <h1>Cadastro de Produtos</h1>
                <label htmlFor="nome">Produto: </label>
                <input 
                type="text"
                id='nome'
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                placeholder='Nome do produto' /> <br />

                <label htmlFor="preco">Preço: </label>
                <input 
                type="number"
                id='preco'
                onChange={(e) => setPreco(e.target.value)}
                value={preco}
                placeholder='Preço do Produto'
                /> <br />
                <button type='submit'>Cadastrar</button>
            </form>
        </>
    )
}

export default ListaDeProdutos;