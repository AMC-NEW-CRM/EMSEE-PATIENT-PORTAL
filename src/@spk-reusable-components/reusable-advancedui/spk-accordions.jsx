import React, { useState, Fragment } from 'react';
import { Accordion } from 'react-bootstrap';

const SpkAccordions = ({ items, defaultActiveKey, flush = false, accordionClass, closeAll = false }) => {

    const [activeKey, setActiveKey] = useState(
        closeAll ? null : (defaultActiveKey || (items.length > 0 ? items[0].id : null))
    );

    return (
        <Fragment>
            <Accordion className={accordionClass} activeKey={activeKey} flush={flush} onSelect={(k) => setActiveKey(k)}>
                {items.map((item, index) => (
                    <Accordion.Item eventKey={item.id} className={item.itemClass} key={item.id || `${item.title}-${index}`}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body className={item.bodyClass}>{item.content}</Accordion.Body>

                        {item.footer && <div className="accordion-footer">{item.footer}</div>}

                    </Accordion.Item>
                ))}
            </Accordion>
        </Fragment>
    );
};

export default SpkAccordions;