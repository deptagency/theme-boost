import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const OverviewPanel = ({ name }) => {
    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-500 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            {name} Panel
        </div>
    )
}

OverviewPanel.propTypes = {
    name: PropTypes.node.isRequired,
}

export default OverviewPanel
