import React from 'react'
import PropTypes from 'prop-types'

export default function Badge ({ count, children, displayZeroCount, onClick }) {
    return (
        <div className='badge-wrapper pl-6' onClick={onClick}>
            {children}
            {(displayZeroCount || count !== 0) && (
                <span className='badge-count text-xs'>
                    {count}
                </span>
            )}
        </div>
    )
}

Badge.propTypes = {
    /**
     * @property displayZeroCount - indicates, that even if count = 0 - we should show badge anyway
     */
    displayZeroCount: PropTypes.bool,
    /**
     * @property count - indicates count in badge
     */
    count: PropTypes.number,
    /**
     * @property children - normal React children
     */
    children: PropTypes.node.isRequired,
    /**
     * @property onClick - click listener for cases when children should have click handler.
     * Needed in order to avoid double click handling.
     */
    onClick: PropTypes.func,
}

Badge.defaultProps = {
    displayZeroCount: false,
    count: 0,
}
