import staticVariables from "../components/variables/resources";
import React, { useState, useEffect } from 'react';
import ItemsList from '../layouts/Items'

function MembersList() {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch(staticVariables['HOST'] + staticVariables['ENTRY_POINTS']['people'])
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMembers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let tittle = 'Lista de miembros registrados'
    let headers = ['No.', 'Ci', 'Email', 'Name', 'LastName']
    let data_parsed = members.map((prop, key) => {
        return (
            <tr key={key}>
                <td>{key + 1}</td>
                <td>{prop.ci}</td>
                <td>{prop.email}</td>
                <td>{prop.name}</td>
                <td>{prop.lastname}</td>
            </tr>
        );
    })
    return ItemsList(tittle, headers, data_parsed, { 'to': 'new-member', 'title': 'Registrar nuevo' })
}

export default MembersList;