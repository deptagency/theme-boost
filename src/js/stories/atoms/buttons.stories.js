import React from 'react'

import { action } from '@storybook/addon-actions'

import Button from 'js/patterns/atoms/buttons/button'

export default {
    title: '2.Atoms|Buttons',
}

export const allButtons = () => {
    return (
        <div>
            <p>
                <Button onClick={action('clicked')}>Default Button</Button>
            </p>
            <p>
                <Button type='quiet' onClick={action('clicked')}>
                    Quiet Button
                </Button>
            </p>
            <p>
                <Button type='ghost' onClick={action('clicked')}>
                    Ghost Button
                </Button>
            </p>
            <p>
                <Button type='plain' onClick={action('clicked')}>
                    Plain Button
                </Button>
            </p>
            <p>
                <Button type='destructive' onClick={action('clicked')}>
                    Destructive Button
                </Button>
            </p>
            <p>
                <Button type='minion' onClick={action('clicked')}>
                    Minion Button
                </Button>
            </p>
            <p>
                <Button type='quiet' icon='true' onClick={action('clicked')}>
                    Button with Icon
                </Button>
            </p>
        </div>
    )
}

allButtons.story = {
    name: 'All Buttons',
}
