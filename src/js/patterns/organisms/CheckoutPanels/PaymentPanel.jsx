import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { stepObject } from 'Molecules/Layout/CheckoutPanels/stepObject'

const PaymentPanel = ({ step }) => {
    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-400 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            {step.name} Panel
        </div>
    )
}

PaymentPanel.propTypes = {
    step: PropTypes.shape(stepObject).isRequired,

}

export default PaymentPanel
