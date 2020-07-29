import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { ReactComponent as CheckoutTick } from 'Icons/tailwind-icons/checkout-tick.svg'

const Step = ({ current = false, completed = false, onSelect }) => {
    return (
        <div
            className='flex flex-col items-center'
            onClick={onSelect}
            >
            <div className={classnames({
                'rounded-full border-2 mx-1 h-5 w-5 cursor-pointer z-10': true,
                'bg-neutral-300 border-neutral-300': !current && !completed,
                'bg-background-primary border-primary-main': current,
                'bg-secondary-main border-secondary-main': completed,
            })}>
                {completed && <CheckoutTick />}
            </div>
        </div>
    )
}

Step.propTypes = {
    current: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Step
