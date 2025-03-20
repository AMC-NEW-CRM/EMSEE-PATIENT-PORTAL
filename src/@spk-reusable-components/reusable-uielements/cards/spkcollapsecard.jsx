
import React, { Fragment } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import SpkButton from '../spk-button'
import { Link } from 'react-router-dom'

const SpkCollapsecard = ({ Customheaderclass, OnClickFunc, Expand, children, Title, footertext, Timeout, Navigate }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Header className={`card-header justify-content-between border-bottom-0 ${Customheaderclass}`}>
                    <Card.Title>
                        {Title}
                    </Card.Title>
                    <Link  to={Navigate} onClick={OnClickFunc} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className={`ri-${Expand ? 'arrow-down-s-line' : 'arrow-up-s-line'} fs-18`}></i>
                    </Link>
                </Card.Header>
                <Collapse className="border-top" in={Expand} timeout={Timeout}>
                    <div>
                        <Card.Body>
                            {children}
                        </Card.Body>
                        <Card.Footer>
                            <SpkButton Buttonvariant="primary">{footertext}</SpkButton>
                        </Card.Footer>
                    </div>
                </Collapse>
            </Card>
        </Fragment>
    )
}

export default SpkCollapsecard
