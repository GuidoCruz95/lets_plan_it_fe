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
    Col,
    Table,
    Label,
    FormText
} from "reactstrap";
import ItemsList from '../layouts/Items'

let formulary_title = "Import members"

class ImportMembers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            members: [],
            file: null,
            headers: ["Number", "Ci", "Firstname", "Lastname", , "Email", "About You", "Birthdate", "status"]
        };
    }

    handleChange = (event) => {
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
                    'first_name': attributes[1],
                    'last_name': attributes[2],
                    'email': attributes[3],
                    'about_you': attributes[4],
                    'birthdate': attributes[5]
                }
                fileData.push(member)
            })
            console.log(fileData)
            return this.setState({ members: fileData })
        };
        reader.readAsText(fileUploaded)
    };

    render() {
        return (
            <>
                <div className="content">
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
                                                onChange={this.handleChange}
                                            />
                                            <FormText>
                                                Select a csv file with the information for each member
                                            </FormText>
                                        </FormGroup>
                                    </Form>
                                    <Card hidden={!this.state.members.length}>
                                        <CardHeader>
                                            <CardTitle tag="h4">Data from CSV</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <Table responsive>
                                                <thead className="text-primary">
                                                    <tr>
                                                        {this.state.headers.map((prop, key) => {
                                                            return (
                                                                <th key={key}>{prop}</th>
                                                            );
                                                        })}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.members.map((prop, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{key + 1}</td>
                                                                <td>{prop['ci']}</td>
                                                                <td>{prop['first_name']}</td>
                                                                <td>{prop['last_name']}</td>
                                                                <td>{prop['email']}</td>
                                                                <td>{prop['about_you']}</td>
                                                                <td>{prop['birthdate']}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default ImportMembers;