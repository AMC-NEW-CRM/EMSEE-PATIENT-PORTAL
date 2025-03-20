import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const SpkMedicalcard = ({ price, title, percent, cardClass, bodyClass, svgIcon, color, icon }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <h5 className="mb-1">{price}</h5>
                    <div className="fw-medium op-7">{title}
                        <span className={`fw-normal ms-1 badge bg-${color}-transparent fs-9`}> {percent}
                            <i className={`ri-arrow-${icon}-s-fill`}></i>
                        </span>
                    </div>
                    {svgIcon}
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkMedicalcard;
