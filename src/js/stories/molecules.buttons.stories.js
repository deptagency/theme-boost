import React from 'react'

import { action } from '@storybook/addon-actions'

import MoleculesButton from 'js/patterns/molecules/buttons/button'

export default {
    title: '2.Molecules|Buttons',
}

export const allButtons = () => {
    return (
        <div>
            <p>
                <MoleculesButton onClick={action('clicked')}>Default Button</MoleculesButton>
            </p>
            <p>
                <MoleculesButton type='quiet' onClick={action('clicked')}>
                    Quiet Button
                </MoleculesButton>
            </p>
            <p>
                <MoleculesButton type='ghost' onClick={action('clicked')}>
                    Ghost Button
                </MoleculesButton>
            </p>
            <p>
                <MoleculesButton type='plain' onClick={action('clicked')}>
                    Plain Button
                </MoleculesButton>
            </p>
            <p>
                <MoleculesButton type='destructive' onClick={action('clicked')}>
                    Destructive Button
                </MoleculesButton>
            </p>
            <p>
                <MoleculesButton type='minion' onClick={action('clicked')}>
                    Minion Button
                </MoleculesButton>
            </p>
        </div>
    )
}

allButtons.story = {
    name: 'All Buttons',
}
