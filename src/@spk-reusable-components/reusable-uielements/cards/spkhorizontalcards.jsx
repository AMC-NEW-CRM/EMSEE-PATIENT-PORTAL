
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Spkhorizontalcards = ({ Imagesrc, CardHeader, Imgclass, Navigate, Imgposition, children, CardFooter, Title, Linktag, Footertext }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                {Linktag ? <Link  to={Navigate} className="card-anchor"></Link> : ''}
                <div className="row g-0">
                    {Imgposition === "before" ?
                        <div className="col-md-4">
                            <img src={Imagesrc} className={Imgclass} alt="..." />
                        </div>
                        : ''}
                    <div className="col-md-8">
                        {CardHeader ?
                            <Card.Header>
                                <div className="card-title">{Title}</div>
                            </Card.Header>
                            : ''}

                        <Card.Body>
                            {children}
                        </Card.Body>

                        {CardFooter ?
                            <Card.Footer>
                                <p className="card-text"><small className="text-muted">{Footertext}</small></p>
                            </Card.Footer> : ''}
                    </div>

                    {Imgposition === "after" ?
                        <div className="col-md-4">
                            <img src={Imagesrc} className="img-fluid rounded-sm-end rounded-bottom h-100 w-100" alt="..." />
                        </div>
                        : ''}
                </div>
            </Card>
        </Fragment>
    )
}

export default Spkhorizontalcards