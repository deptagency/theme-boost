import React from 'react'
import PropTypes from 'prop-types'

import Button from 'Atoms/button'

const OrderButton = ({ label, onClick }) => {
    return (
        <Button variant='btn btn-indigo w-full' onClick={onClick}>
            {label}
        </Button>
    )
}

OrderButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default OrderButton