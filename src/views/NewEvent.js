// TODO: Use tags for the requirements input, it's to improve the UI for the user.
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


class NewEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            start_date: '',
            end_date: '',
            location: '',
            cost: '',
            requirements: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'start-date':
                this.setState({ start_date: event.target.value });
                break;
            case 'end-date':
                this.setState({ end_date: event.target.value });
                break;
            case 'location':
                this.setState({ location: event.target.value });
                break;
            case 'cost':
                this.setState({ cost: event.target.value });
                break;
            case 'requirements':
                this.setState({ requirements: event.target.value });
                break;
            default:
            // code block
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const custom_body = {
            "name": this.state.name,
            "start_date": this.state.start_date,
            "end_date": this.state.end_date,
            "location": this.state.location,
            "cost": this.state.cost,
            "requirements": this.state.requirements,
        }
        console.log(custom_body)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(custom_body)
        };
        // TODO: Move the URLs to a single file, use importing those.
        fetch('http://localhost:8000/church/events/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }))
    }

    render() {
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
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col className="pr-1" md="8">
                                                <FormGroup>
                                                    <label>Nombre para el evento</label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Nombre de evento"
                                                        type="text"
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.start_date}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <label>Fecha de fin</label>
                                                    <Input
                                                        id="end-date"
                                                        type="date"
                                                        value={this.state.end_date}
                                                        onChange={this.handleChange}
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
                                                        value={this.state.cost}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Que debe llevar</label>
                                                    <Input
                                                        id="requirements"
                                                        placeholder="Everything that you should take before to go"
                                                        type="textarea"
                                                        value={this.state.requirements}
                                                        onChange={this.handleChange}>
                                                    </Input>
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
                                                        value={this.state.location}
                                                        onChange={this.handleChange}
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
}

export default NewEvent;