import React from 'react'
import Button from '../componentes/buttonSubmit'
import { Table } from 'react-bootstrap'

export default (props) => {
    const renderUsers = () => {
        const users = props.users || []
        return users.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Button
                        onClick={() => props.deleteUser(user)}
                        name='Exluir'
                    />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                </tbody>
            </Table>
        </div>
    )
}