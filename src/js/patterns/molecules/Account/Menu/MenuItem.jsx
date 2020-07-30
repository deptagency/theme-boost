import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const MenuItem = ({ onClick, children = () => {}, selected = false }) => {
    return (
        <div
            className={classnames({
                'flex mx-auto w-5/6 sm:w-8/12 md:w-5/6 md:mt-5 justify-between border-b border-neutral-300 pb-4 mb-6 focus:outline-none cursor-pointer': true,
                'font-bold': selected,
            })}
            onClick={onClick}
            >
            {children}
        </div>
    )
}

MenuItem.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    selected: PropTypes.bool,
}

export default MenuItem
