import React from 'react'
import PropTypes from 'prop-types'

const StickyRightColumn = ({ leftColumn, rightColumn }) => {
    return (
        <div className='my-4 max-w-960px md:px-4 mx-auto md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1'>
            {leftColumn}

            <div className='self-baseline md:sticky md:top-0'>
                {rightColumn}
            </div>
        </div>
    )
}

StickyRightColumn.propTypes = {
    leftColumn: PropTypes.node.isRequired,
    rightColumn: PropTypes.node.isRequired,
}

export default StickyRightColumn
