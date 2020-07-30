import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria(params) {

    const [categorias, setCategorias] = useState([])

    const valoresIniciais ={
        nome: '',
        descricao: '',
        cor: ''
    }
    
    const [valores, setValores] = useState(valoresIniciais)


    function setValor(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    return (
        <PageDefault page='CadastroCategoria'>
            <h1>Cadastro de Categorias: {valores.nome}</h1>
        
            <form onSubmit={(event) => {
                    event.preventDefault()

                    setCategorias([
                        ...categorias,
                        valores
                    ])

                    setValores(valoresIniciais)

                }}>

                <FormField 
                    label="Nome:"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={(evento) => setValor(evento.target.getAttribute('name'), evento.target.value)}
                />

                <FormField 
                    label="Descrição:"
                    type="text"
                    name="descricao"
                    value={valores.descricao}
                    onChange={(evento) => setValor(evento.target.getAttribute('name'), evento.target.value)}
                />


                <FormField 
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={(evento) => setValor(evento.target.getAttribute('name'), evento.target.value)}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

        </PageDefault>

    )
}

export default CadastroCategoria