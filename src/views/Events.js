import staticVariables from "../components/variables/resources";
import React, { useState, useEffect } from 'react';
import ItemsList from '../layouts/Items'

function EventsList() {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(staticVariables['HOST'] + staticVariables['ENTRY_POINTS']['events'])
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEvents(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let tittle = 'Lista de eventos registrados'
    let headers = ['No.', 'Nombre', 'Lugar', 'Fecha Inicio', 'Fecha Fin', 'Costo']
    let data_parsed = events.map((prop, key) => {
        return (
            <tr key={key}>
                <td>{key + 1}</td>
                <td>{prop.name}</td>
                <td>{prop.location}</td>
                <td>{prop.start_date}</td>
                <td>{prop.end_date}</td>
                <td>{prop.cost} Bs.</td>
            </tr>
        );
    })
    return ItemsList(tittle, headers, data_parsed, [{ 'to': 'new-event', 'title': 'Registrar nuevo evento' }])
}

export default EventsList;