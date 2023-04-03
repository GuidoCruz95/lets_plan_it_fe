import React, { useState } from "react";
import NotificationAlert from "react-notification-alert";
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

const options = [
    { value: 'Vengadores' },
    { value: 'Redimidos' },
    { value: 'Siempre Listos' }
]

function NewMember() {

    let errorMessage = "error registering "
    let successMessage = "Saved successfully "

    const [ci, setCi] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [aboutYou, setAboutYou] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const [currentAge, setCurrentAge] = useState('')

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

    function calculateAge(new_birthdate) {
        let birthdate = new Date(new_birthdate)
        let current = new Date()
        return current.getFullYear() - birthdate.getFullYear()
    }

    function clearFormulary() {
        setCi('')
        setName('')
        setLastname('')
        setEmail('')
        setAboutYou('')
        setBirthdate('')
        setCurrentAge('')
    }

    function handleChange(event) {
        var value = event.target.value
        switch (event.target.id) {
            case 'ci':
                setCi(value)
                break;
            case 'name':
                setName(value)
                break;
            case 'lastname':
                setLastname(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'about-you':
                setAboutYou(value)
                break;
            case 'birthdate':
                setBirthdate(value)
                setCurrentAge(calculateAge(value))
                break;
            default:
            // code block
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const custom_body = {
            "ci": ci,
            "email": email,
            "name": name,
            "lastname": lastname,
            "birthdate": birthdate,
            "about_you": aboutYou,
            "cell": null
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(custom_body)
        };
        // TODO: Move the URLs to a single file, use importing those.
        fetch('http://localhost:8000/church/person/', requestOptions)
            .then((response) => {
                if (response.ok) {
                    raiseAlert(custom_body['ci'], 'success')
                    clearFormulary()
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
                raiseAlert(custom_body['ci'], 'danger')
            })
    }

    return (
        <>
            <div className="content">
                <NotificationAlert ref={notificationAlert} />
                <Row>
                    <Col md="8">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">{formulary_title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>Cedula de Identidad</label>
                                                <Input
                                                    id="ci"
                                                    placeholder="Cedula de Identidad"
                                                    type="text"
                                                    value={ci}
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
                                                    value={name}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label>Apellidos</label>
                                                <Input
                                                    id="lastname"
                                                    placeholder="Apellido"
                                                    type="text"
                                                    value={lastname}
                                                    onChange={handleChange}
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
                                                    value={birthdate}
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
                                                    value={email}
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
                                                    id="about-you"
                                                    placeholder="Cuentame algo de ti"
                                                    type="textarea"
                                                    value={aboutYou}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Pertenece a alguna celula(#)</label>
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
                                            {/* <input type="submit" value="Registrar"/> */}
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
                                    <h5 className="title">{name ? name : 'Member Name'}</h5>
                                    <p className="description">{email ? email : 'Member Email'}</p>
                                </div>
                                <p className="description text-center">
                                    {aboutYou ? aboutYou : 'Algo cool que rescatas de ti.!!'}
                                </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="6" md="6" xs="6">
                                            <h5>
                                                {currentAge || 0} <br />
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

export default NewMember;