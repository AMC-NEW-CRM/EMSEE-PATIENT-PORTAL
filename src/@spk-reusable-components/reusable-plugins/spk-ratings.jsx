import React, { Fragment } from 'react';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const SpkRatings = ({ name, value, size = 'medium', defaultValue = null, max = 5, sx = {}, precision = 1, readOnly = false, onChange, getLabelText = (value) => `${value} Star`, onChangeActive, Icon }) => {
    return (
        <Fragment>
            <Box sx={sx}>
                <Rating name={name} value={value ?? undefined} onChange={onChange} onChangeActive={onChangeActive} getLabelText={getLabelText} emptyIcon={Icon} size={size} defaultValue={defaultValue ?? undefined} precision={precision} max={max} readOnly={readOnly} />
            </Box>
        </Fragment>
    );
};

export default SpkRatings;
