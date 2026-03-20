import { useEffect, useState } from "react";
import { REMOVE_ITEM } from "../redux/ShopSlice";
import { useSelector } from "react-redux";

function Carrinho(){
    const items = useSelector(state => state.shop.items);
     
    let lista;

        if (items.length === 0){
            lista = <p>Nenhum produto cadastrado</p>
        } else {
            lista = items.map((item, index) => (
                <li key={index}>
                    {item.nome} - R$ {item.preco}
                </li>
            ));
        }

    return (
        <>
            <h1>Lista de produtos</h1>
            <ul>
                {lista}
            </ul>
        </>
    )
}

export default Carrinho;
