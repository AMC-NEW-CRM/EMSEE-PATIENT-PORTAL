
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkButton from '../spk-button';
import { Link } from 'react-router-dom';

const Spktitlecards = ({ ButtonTag, Imgsrc, Anchortagbefore = false, OnclickFunc, Navigate, AnchortagNavigate, Cardheader, Imagetag = false, Icontag = false, LinkClass, CustomBodyclass, Customfooterclass, Icon, Cardfooter, Customclass, CustomHeaderclass, children, Footertext, Title, Linktag }) => {
  return (
    <Fragment>
      <Card className={Customclass}>
        {Imagetag ? <img src={Imgsrc} className="card-img-top" alt="..." /> : ''}
        {Anchortagbefore ? <Link  to={AnchortagNavigate} className="card-anchor"></Link> : ""}
        {Cardheader ?
          <Card.Header className={CustomHeaderclass}>
            <Card.Title>
              {Title}
            </Card.Title>
            {Linktag ? <Link  to={Navigate} data-bs-toggle="card-remove" onClick={OnclickFunc} className={LinkClass}>
              {Icontag ? <i className={Icon}></i> : ''}
            </Link> : ''}
          </Card.Header>
          : ''}
        <Card.Body className={CustomBodyclass}>
          {children}
        </Card.Body>
        {Cardfooter ? <Card.Footer className={Customfooterclass}>
          {ButtonTag ? <SpkButton Buttonvariant="primary">Read More</SpkButton> : Footertext}
        </Card.Footer>
          : ''}
      </Card>
    </Fragment>
  )
}

export default Spktitlecards