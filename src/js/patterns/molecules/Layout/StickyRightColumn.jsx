import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const StickyRightColumn = ({ variant = '', leftColumn, rightColumn }) => {
    return (
        <div className={classnames('md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1', variant)}>
            {leftColumn}

            <div className='self-baseline md:sticky md:top-0'>{rightColumn}</div>
        </div>
    )
}

StickyRightColumn.propTypes = {
    variant: PropTypes.string,
    leftColumn: PropTypes.node.isRequired,
    rightColumn: PropTypes.node.isRequired,
}

export default StickyRightColumn
