import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MobileNavigation from './'
import Button from 'js/patterns/atoms/buttons/button'

import topCategories from './topCategories.json'

export default {
    title: '4.Organisms|Navigations|Mobile',
}

const ctaLoggedIn = () => {
    return (
        <Button type='quiet' onClick={action('go to orders')}>
            Meine Bestellungen ansehen
        </Button>
    )
}

export const mobileNavigation = () => {
    return (
        <MobileNavigation
            open={boolean('Open', true)}
            onClose={action('close-menu')}
            topCategories={topCategories}
            callToAction={ctaLoggedIn()}
        />
    )
}

mobileNavigation.story = {
    name: 'Mobile Navigation',
    decorators: [withKnobs],
}
