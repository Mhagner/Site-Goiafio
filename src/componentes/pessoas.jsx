import React from 'react'
import Button from '../componentes/buttonSubmit'

export default (props) => {
    const renderizarPessoas = () => {
        const lista = props.lista || []
        return lista.map(item => (
            <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.idade}</td>
                <td>
                    <Button
                        onClick={() => props.deletePessoa(item)}
                        name='Exluir'
                    />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="w3-table-all w3-hoverable">
                <tbody>
                    <tr>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>Idade</td>
                    </tr>


                    {renderizarPessoas()}

                </tbody>
            </table>
        </div>
    )
}