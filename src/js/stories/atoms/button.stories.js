import React from 'react'

import Button from 'Atoms/buttons/button'

export default {
    title: 'Button',
}

export const simple = () => {
    return (
        <div>
            <p>
                <Button className='btn btn-blue mr-2'>Start</Button> 
                <Button className='btn btn-gray'>Start</Button>
            </p>
        </div>
    )
}

export const pill = () => {
    return (
        <div>
            <p>
                <Button className='btn-pill btn-blue mr-2'>Start</Button>
                <Button className='btn-pill btn-gray'>Start</Button>
            </p>
        </div>
    )
}

export const outline = () => {
    return (
        <div>
            <p>
                <Button className='btn-outline btn-outline-blue mr-2'>Start</Button>
                <Button className='btn-outline btn-outline-gray'>Start</Button>
            </p>
        </div>
    )
}

export const elevated = () => {
    return (
        <div>
            <p>
                <Button className='btn-elevated'>Start</Button>
            </p>
        </div>
    )
}