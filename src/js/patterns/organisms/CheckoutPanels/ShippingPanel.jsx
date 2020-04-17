import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { stepObject } from 'Molecules/Layout/CheckoutPanels/stepObject'

const ShippingPanel = ({ step }) => {
    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-300 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            {step.name} Panel
        </div>
    )
}

ShippingPanel.propTypes = {
    step: PropTypes.shape(stepObject).isRequired,
}

export default ShippingPanel
