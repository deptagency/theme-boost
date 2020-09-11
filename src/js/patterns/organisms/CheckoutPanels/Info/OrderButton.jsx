import React from 'react'
import PropTypes from 'prop-types'

import Button from 'Atoms/button'

const OrderButton = ({ label, onClick }) => {
    return (
        <Button name={label} variant='btn btn-primary w-full h-10' onClick={onClick}>
            {label}
        </Button>
    )
}

OrderButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default OrderButton
