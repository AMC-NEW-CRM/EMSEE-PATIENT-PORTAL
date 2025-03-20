
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Spkbgcards = ({ Title, Customclass, color, Value, Imgsrc, Class, Textclass, Navigate }) => {
    return (
        <Fragment>
            <Card className={`custom-card card-bg-${color} ${Customclass}`}>
                <Card.Body>
                    <div className="d-flex align-items-center w-100">
                        <div className="me-2">
                            <span className="avatar avatar-rounded">
                                <img src={Imgsrc} alt="img" />
                            </span>
                        </div>
                        <div className="">
                            <div className="fs-15 fw-medium">{Title}</div>
                            <p className={`mb-0 text-${Textclass} op-7 fs-12`}>{Value}</p>
                        </div>
                        <div className="ms-auto">
                            <Link  to={Navigate} className={`text-${Class}`}><i className="bi bi-three-dots-vertical"></i></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Spkbgcards