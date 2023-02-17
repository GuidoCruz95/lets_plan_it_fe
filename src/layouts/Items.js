
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

function ItemsList(title, headers, data) {
    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">{title}</CardTitle>
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
