import React from 'react'
import PropTypes from 'prop-types'

const SelectedOrder = ({ order }) => {
    return (
        <div>
            {order && order.lineItems.map((item) => {
                return (
                    <div key={item.lineItemId}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}

SelectedOrder.propTypes = {
    order: PropTypes.object.isRequired,
}

export default SelectedOrder
