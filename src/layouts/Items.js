
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

import { Link } from "react-router-dom";

function ItemsList(title, headers, data, link_to = null) {
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">{title}</CardTitle>
                            {link_to.map((prop, key) => {
                                return (
                                    <Link key={key} to={prop.to}> {prop.title}</Link>
                                );
                            })}
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
                                    {data}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ItemsList;
