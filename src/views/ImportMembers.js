import React, { useState } from "react";
import NotificationAlert from "react-notification-alert";
import { useHistory } from "react-router-dom";

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
    Col,
    Table,
    Label,
    FormText,
    Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem
} from "reactstrap";

let formulary_title = "Import members"

function ImportMembers() {

    const headers = ["No.", "Ci", "Firstname", "Lastname", , "Email", "About You", "Birthdate"]
    const [members, setMembers] = useState([])
    const [modal, setModal] = useState(false)
    const [membersWithErrors, setMembersWithErrors] = useState([])
    const notificationAlert = React.useRef();
    const history = useHistory();
    const toggle = () => setModal(!modal);

    function handleChange(event) {
        const fileUploaded = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            var text = e.target.result;
            var splitted = text.split('\n')
            var fileData = []
            splitted.map((prop) => {
                var attributes = prop.split(";")
                var member = {
                    'ci': attributes[0],
                    'name': attributes[1],
                    'lastname': attributes[2],
                    'email': attributes[3],
                    'about_you': attributes[4],
                    'birthdate': attributes[5],
                    'cell': null
                }
                fileData.push(member)
            })
            setMembers(fileData)
        };
        reader.readAsText(fileUploaded)
    };

    function error_saving(member_obj, error) {
        var error_message = {
            place: "tr",
            message: (
                <div>
                    Error registering {member_obj.ci} - {member_obj.name}
                </div>
            ),
            type: 'danger',
            icon: "nc-icon nc-bell-55",
            autoDismiss: 40
        };
        notificationAlert.current.notificationAlert(error_message);
    }

    // The function is having problems trying to refresh the table into the modal, this is not updated
    function savingReport() {
        return (
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>List of members that were not saved</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {
                            membersWithErrors.map((prop, key) => {
                                return (
                                    <ListGroupItem key={key}>{prop.ci} - {prop.name}</ListGroupItem>
                                );
                            }) ? membersWithErrors.length > 0 : "All the members were saved successfully"
                        }
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { history.push('/members') }}>Go to Members List</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

    function saveMembers() {
        var membersErrors = []
        members.map((memberObj, key) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(memberObj)
            };
            // TODO: Move the URLs to a single file, use importing those.
            fetch('http://localhost:8000/church/person/', requestOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then((responseJson) => {
                    console.log("registration success" + responseJson)
                })
                .catch(error => {
                    error_saving(memberObj, error)
                    membersErrors.push(memberObj)
                })
        })
        setMembersWithErrors(membersErrors)
        setModal(true)
    }

    return (
        <>
            <div className="content">
                <NotificationAlert ref={notificationAlert} />
                <Row>
                    <Col md="12">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">{formulary_title}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="csv-file">
                                            Choose your CSV file
                                        </Label>
                                        <Input
                                            id="csv-file"
                                            name="file"
                                            type="file"
                                            accept=".csv"
                                            onChange={handleChange}
                                        />
                                        <FormText>
                                            Select a csv file with the information for each member
                                        </FormText>
                                    </FormGroup>
                                </Form>
                                <Card hidden={!members.length}>
                                    <CardHeader>
                                        <CardTitle tag="h4">Data from CSV</CardTitle>
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
                                                {members.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{prop['ci']}</td>
                                                            <td>{prop['name']}</td>
                                                            <td>{prop['lastname']}</td>
                                                            <td>{prop['email']}</td>
                                                            <td>{prop['about_you']}</td>
                                                            <td>{prop['birthdate']}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                    <CardFooter>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                    onClick={saveMembers}
                                                >
                                                    Registrar Miembros
                                                </Button>
                                            </div>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* {savingReport()} */}
            </div>
        </>
    )
}

export default ImportMembers;