import TagsInput from "layouts/TagsInput";
import React from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

let formulary_title = "Registro de nuevo evento"


function NewEvent() {

    // let eventName = ''
    // let eventStartDate = ''
    // let eventEndDate = ''
    // let eventLocation = ''
    // let eventCost = ''
    // let eventRequirements = ''


    return (
        <>
            <div className="content">
                <Row>
                    <Col md='2'></Col>
                    <Col md="8">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">{formulary_title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="8">
                                            <FormGroup>
                                                <label>Nombre para el evento</label>
                                                <Input
                                                    id="name"
                                                    placeholder="Nombre de evento"
                                                    type="text"
                                                // value={eventName}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <label>Fecha de inicio</label>
                                                <Input
                                                    id="start-date"
                                                    type="date"
                                                // value={eventStartDate}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <label>Fecha de fin</label>
                                                <Input
                                                    id="end-date"
                                                    type="date"
                                                // value={eventEndDate}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md='4'>
                                            <FormGroup>
                                                <label>Costo en Bs.</label>
                                                <Input
                                                    id="cost"
                                                    placeholder="Costo en Bs."
                                                    type="text"
                                                // value={eventCost}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Que debe llevar</label>
                                                <TagsInput></TagsInput>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Lugar del evento</label>
                                                <Input
                                                    id="location"
                                                    placeholder="Ubicacion donde se realizara el evento"
                                                    type="textarea"
                                                // value={eventLocation}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="update ml-auto mr-auto">
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                            >
                                                Registrar
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default NewEvent;