import React from 'react';

const SpkActivityCard = ({ activityCard,activityClass="fs-12 activity-time" ,showTime = false }) => {
    return (
        <li>
            <div>
                <div className='d-flex justify-content-between'>
                    <div className="fw-medium fs-14">{activityCard?.activityUser}</div>
                    {showTime && (
                        <span className={activityClass}>
                            {activityCard?.activityTime}
                        </span>
                    )}
                </div>
                <span
                    className="d-block text-muted"
                    dangerouslySetInnerHTML={{ __html: activityCard?.activityDesc }}
                />
            </div>
        </li>
    );
};

export default SpkActivityCard;
