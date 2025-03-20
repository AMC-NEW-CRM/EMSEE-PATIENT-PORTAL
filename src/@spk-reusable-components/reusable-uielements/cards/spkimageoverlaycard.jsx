import React, { Fragment } from 'react'
import { Card, } from 'react-bootstrap'

const Spkimageoverlaycard = ({ Imgsrc, CustomClass, CardHeader = true, Overlayclass, CardFooter = true, Footertext, Customfooterclass, Custombodyclass, CustomTitleclass, Customimgclass, Title, children }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${CustomClass}`}>
        <img src={Imgsrc} className={Customimgclass} alt="..." />
        <div className={`card-img-overlay d-flex flex-column p-0 ${Overlayclass}`}>
          {CardHeader ?
            <Card.Header className="card-header">
              <div className={`card-title ${CustomTitleclass}`}>
                {Title}
              </div>
            </Card.Header>
            : ""}
          <Card.Body className={Custombodyclass}>
            {children}
          </Card.Body>
          {CardFooter ? <Card.Footer className={Customfooterclass}>{Footertext}</Card.Footer> : ""}

        </div>
      </Card>
    </Fragment>
  )
}

export default Spkimageoverlaycard