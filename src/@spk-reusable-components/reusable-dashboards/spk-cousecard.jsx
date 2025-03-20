import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const SpkCoursecardcomponent = ({ cardClass, color, svgIcon, total, price, inc, percent, color1, icon }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className="text-center">
                    <span className={`avatar avatar-md bg-${color} svg-white avatar-rounded`}>
                        {svgIcon}
                    </span>
                    <p className="mb-1 mt-3 fw-medium">{total}</p>
                    <h4 className="fw-semibold">{price}</h4>
                    <div className="text-muted fs-13">
                        {inc && (
                            <>
                                {inc} By <span className={`mb-0 badge bg-${color1}-transparent rounded-pill`}>
                                    {percent}
                                    <i className={`ri-arrow-${icon}-line fs-10 align-middle ms-1`}></i>
                                </span>
                            </>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default SpkCoursecardcomponent;
