import React from "react";
import {useState, useEffect} from "react";
import style from './CreateBooks.module.css'

import Input from "../forms/Input"
import Select from "../forms/Select";
import Button from "../forms/Button";


const CreateBooks =()=>{
    /* recupera os dados da  caegoria*/
    useEffect(()=> {
        fetch('http://localhost:5000/listagemCateorias',{
            method:'GET',
            headers:{
                'Content-Type':'aplication/json',
                'Access-Control-Allow-origin':'*',
                'Access-Control-Allow-Headers':'*',
            }
        }).then(
            (resp)=>
                // consolo.log('RESPOSTA:' + resp)
                resp.json()
            
        ).then(
            (data)=>{
                console.log('DATA: ' + data.data[0].nome_categoria)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }),[];


    return(

        <section className={style.create_books_container}>
            <h1> CRADASTRO DE LIVROS</h1>
            <Input 
                type= 'text'
                name='txt_livro'
                placeHolder='Digite o nome do seu livro aqui'
                text='Tituo do livro'/>
            <Input 
                type= 'text'
                name='txt_autor'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'/>

            <Input 
                type= 'text'
                name='txt_descricao_livro'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livro'/>
            <Select>
                name='categoria'
                text='escolha uma categoria'
            </Select>

            <Button 
                rotulo='Cadastrar Livro'
            />
        </section>
        
    )
}
export default CreateBooks