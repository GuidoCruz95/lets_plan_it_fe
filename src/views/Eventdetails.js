import React, { useState } from "react";
import NotificationAlert from "react-notification-alert";
import {
    Table,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

let formulary_title = "Event Details"
let headers = ['some', 'header', 'here']

function EventDetails() {

    let errorMessage = "error registering "
    let successMessage = "Saved successfully "
    let registered = [
        {
            'ci': 8822958,
            'name': 'guido',
            'lastname': 'Cruz Huanca'
        }
    ]
    let event = {
        'event_id': 'SOMETHING',
        'name': 'SOMETHING',
        'start_date': 'SOMETHING',
        'end_date': 'SOMETHING',
        'location': 'SOMETHING',
        'cost': 'SOMETHING',
        'requirements': 'SOMETHING'
    }

    const notificationAlert = React.useRef();

    function raiseAlert(info, type) {
        let message = (type === 'danger') ? errorMessage : successMessage
        console.log(message)
        var error_message = {
            place: "tr",
            message: (
                <div>
                    {info}: {message}
                </div>
            ),
            type: type,
            icon: "nc-icon nc-bell-55",
            autoDismiss: 10
        };
        notificationAlert.current.notificationAlert(error_message)
    }

    return (
        <>
            <div className="content">
                <NotificationAlert ref={notificationAlert} />
                <Row>
                    <Col md="4">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">{event.name}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                Esta activida inicia el <b>{event.start_date}</b>
                                y termina el <b>{event.end_date}</b>.
                                La actividad sera realizada en <b>{event.location}</b>
                                con un costo de <b>{event.cost}</b>.
                                Lo que se necesita para participar de este evento es:
                                
                                {/* All the event attributes */}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card className="card-user">
                            <div className="image">
                                <img alt="..." src={require("assets/img/letsplanIt/event.jpg")} />
                            </div>
                            <CardHeader>
                                <h2>Lista de Asistentes al evento</h2>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            {headers.map((prop, key) => {
                                                return (
                                                    <th key={key}>{prop}</th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {registered.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{key + 1}</td>
                                                    <td>{prop.ci}</td>
                                                    <td>{prop.name}</td>
                                                    <td>{prop.lastname}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="6" md="6" xs="6">
                                            <h5>
                                                200 <br />
                                                <small>Asistentes</small>
                                            </h5>
                                        </Col>
                                        {/* Select to use better this space on the UI */}
                                        <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                                            <h5>
                                                150<br />
                                                <small>listos</small>
                                            </h5>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default EventDetails;