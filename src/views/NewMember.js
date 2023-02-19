import React from "react";
import { useState } from 'react';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

let formulary_title = "Registro de nuevo miembro"


function NewUser() {

    const options = [
        { value: 'chocolate' },
        { value: 'strawberry' },
        { value: 'vanilla' }
    ]

    const [memberCi, setMemberCi] = useState('')
    const [memberName, setMemberName] = useState('')
    const [memberEmail, setMemberEmail] = useState('')
    const [memberAboutYou, setMemberAboutYou] = useState('')
    const [memberBirthDate, setmemberBirthDate] = useState('')
    const [memberCurrentAge, setmemberCurrentAge] = useState('')

    function calculateAge() {
        let birthdate = new Date(memberBirthDate)
        let current = new Date()
        return current.getFullYear() - birthdate.getFullYear()
    }


    const handleChange = (event) => {
        switch (event.target.id) {
            case 'ci':
                setMemberCi(event.target.value);
                break;
            case 'name':
                setMemberName(event.target.value);
                break;
            case 'email':
                setMemberEmail(event.target.value);
                break;
            case 'aboutYou':
                setMemberAboutYou(event.target.value);
                break;
            case 'birthdate':
                setmemberBirthDate(event.target.value);
                setmemberCurrentAge(calculateAge())
                break;
            default:
            // code block
        }
    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="8">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">{formulary_title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>Cedula de Identidad</label>
                                                <Input
                                                    id="ci"
                                                    placeholder="Cedula de Identidad"
                                                    type="text"
                                                    value={memberCi}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>Nombres</label>
                                                <Input
                                                    id="name"
                                                    placeholder="Nombre"
                                                    type="text"
                                                    value={memberName}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label>Apellidos</label>
                                                <Input
                                                    placeholder="Apellido"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <label>Fecha de Nacimiento</label>
                                                <Input
                                                    id="birthdate"
                                                    type="date"
                                                    value={memberBirthDate}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="8">
                                            <FormGroup>
                                                <label>Correo Electronico</label>
                                                <Input
                                                    id="email"
                                                    placeholder="correo@gmail.com"
                                                    type="text"
                                                    value={memberEmail}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Acerca de ti</label>
                                                <Input
                                                    id="aboutYou"
                                                    placeholder="Cuentame algo de ti"
                                                    type="textarea"
                                                    value={memberAboutYou}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Pertenece a alguna celula</label>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    {options.map((item, key) => {
                                                        return (
                                                            <option key={key}>{item.value}</option>
                                                        );
                                                    })}
                                                </Input>
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
                    <Col md="4">
                        <Card className="card-user">
                            <div className="image">
                                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={require("assets/img/profile.png")}
                                    />
                                    <h5 className="title">{memberName ? memberName : 'Member Name'}</h5>
                                    <p className="description">{memberEmail ? memberEmail : 'Member Email'}</p>
                                </div>
                                <p className="description text-center">
                                    {memberAboutYou ? memberAboutYou : 'Algo cool que rescatas de ti.!!'}
                                </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="6" md="6" xs="6">
                                            <h5>
                                                {memberCurrentAge ? memberCurrentAge : 0} <br />
                                                <small>Años</small>
                                            </h5>
                                        </Col>
                                        {/* Select to use better this space on the UI */}
                                        <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                                            <h5>
                                                Feliz?<br />
                                                <small>Si</small>
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

export default NewUser;