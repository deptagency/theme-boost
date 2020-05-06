import React from 'react'

import Button from 'Atoms/button'
import IconButton from 'Atoms/button/IconButton'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'

export default {
    title: 'Button',
}

export const simple = () => {
    return (
        <div>
            <p>
                <Button variant='btn btn-blue mr-2'>Start</Button>
                <Button variant='btn btn-gray mr-2'>Start</Button>
                <Button variant='btn btn-blue' disabled>Disabled</Button>
            </p>
        </div>
    )
}

export const pill = () => {
    return (
        <div>
            <p>
                <Button variant='btn-pill btn-blue mr-2'>Start</Button>
                <Button variant='btn-pill btn-gray'>Start</Button>
            </p>
        </div>
    )
}

export const outline = () => {
    return (
        <div>
            <p>
                <Button variant='btn-outline btn-outline-blue mr-2'>Start</Button>
                <Button variant='btn-outline btn-outline-gray'>Start</Button>
            </p>
        </div>
    )
}

export const elevated = () => {
    return (
        <div>
            <p>
                <Button variant='btn-elevated'>Start</Button>
            </p>
        </div>
    )
}

export const withIcon = () => {
    return (
        <div>
            <p>
                <IconButton variant='p-6' icon={<CartIcon />} />
                <IconButton variant='p-6 btn-elevated' icon={<CartIcon />} />
            </p>
        </div>
    )
}
