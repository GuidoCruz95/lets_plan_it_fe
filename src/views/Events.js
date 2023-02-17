import events from "../data/events.json";
import ItemsList from '../layouts/Items'

function EventsList(){
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
    return ItemsList(tittle, headers, data_parsed)
}

export default EventsList;