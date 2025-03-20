import  { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import HorizontalNonLinearStepper from "./formwizarddata";

const MedicalRecords = () => {

    const [key, setKey] = useState('first');
    const [key1, setKey1] = useState('first1');

    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                FORM WIZARD
                            </div>
                        </Card.Header>
                        <div className="card-body p-0 form-wizard1">
                            <HorizontalNonLinearStepper />
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};
export default MedicalRecords;