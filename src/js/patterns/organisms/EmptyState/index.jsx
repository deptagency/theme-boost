import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'

import { getIconComponent } from './Icons'

function EmptyState({ icon: iconSrc, iconColor, image, title, subtitle, body, action, actionLabel, children }) {
    return (
        <div className='my-10 md:mt-20 w-64 mx-auto text-center'>
            {/*
                this function resolves which icon gets rendered.
                It can either be
                - a component
                - a string constant (selected from icons in Icons.js
            */}
            {getIconComponent(iconSrc, iconColor)}

            <div className='mt-4 text-center text-gray-800'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='mt-2 text-sm font-bold'>{subtitle}</p>
                <p className='mt-3 text-sm'>{children}</p>
                {action && actionLabel && (
                    <Button variant='btn-outline btn-outline-black mt-6' onClick={action}>
                        {actionLabel}
                    </Button>
                )}
            </div>
        </div>
    )
}

export { icons } from './Icons'
export default EmptyState
