import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ShippingPanel = ({ name }) => {
    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-300 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            {name} Panel
        </div>
    )
}

ShippingPanel.propTypes = {
    name: PropTypes.node.isRequired,
}

export default ShippingPanel
