import React from "react";

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

function calculateAge(new_birthdate) {
    let birthdate = new Date(new_birthdate)
    let current = new Date()
    return current.getFullYear() - birthdate.getFullYear()
}

class NewMember extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            ci: '',
            name: '',
            lastname: '',
            email: '',
            aboutYou: '',
            birthdate: '',
            memberCurrentAge: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        switch (event.target.id) {
            case 'ci':
                this.setState({ ci: event.target.value });
                break;
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'lastname':
                this.setState({ lastname: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'about-you':
                this.setState({ aboutYou: event.target.value });
                break;
            case 'birthdate':
                this.setState({ birthdate: event.target.value });
                this.setState({ memberCurrentAge: calculateAge(this.state.birthdate) })
                break;
            default:
            // code block
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const custom_body = {
            "ci": this.state.ci,
            "email": this.state.email,
            "name": this.state.name,
            "lastname": this.state.lastname,
            "birthdate": this.state.birthdate,
            "about_you": this.state.aboutYou,
            "cell": null
        }
        console.log(custom_body)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(custom_body)
        };
        fetch('http://localhost:8000/church/person/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }


    render() {
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
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col className="pr-1" md="4">
                                                <FormGroup>
                                                    <label>Cedula de Identidad</label>
                                                    <Input
                                                        id="ci"
                                                        placeholder="Cedula de Identidad"
                                                        type="text"
                                                        value={this.state.ci}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.lastname}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.birthdate}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.aboutYou}
                                                        onChange={this.handleChange}
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
                                        <h5 className="title">{this.state.name ? this.state.name : 'Member Name'}</h5>
                                        <p className="description">{this.state.email ? this.state.email : 'Member Email'}</p>
                                    </div>
                                    <p className="description text-center">
                                        {this.state.aboutYou ? this.state.aboutYou : 'Algo cool que rescatas de ti.!!'}
                                    </p>
                                </CardBody>
                                <CardFooter>
                                    <hr />
                                    <div className="button-container">
                                        <Row>
                                            <Col className="ml-auto" lg="6" md="6" xs="6">
                                                <h5>
                                                    {this.state.memberCurrentAge ? this.state.memberCurrentAge : 0} <br />
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
}

export default NewMember;