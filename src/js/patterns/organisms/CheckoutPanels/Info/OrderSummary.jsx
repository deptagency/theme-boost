import React from 'react'

import Button from 'Atoms/button'

const OrderSummary = ({ label, onClick }) => {
    return (
        <Button variant='btn btn-indigo w-full' onClick={onClick}>
            {label}
        </Button>
    )
}

export default OrderSummary