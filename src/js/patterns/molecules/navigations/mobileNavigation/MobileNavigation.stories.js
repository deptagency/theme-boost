import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MobileNavigation from './'
import DesktopNavigationItem from '../desktopNavigation/components/item'

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
        <div>
            <MobileNavigation
                open={boolean('Open', true)}
                onClose={action('close-menu')}
                topCategories={topCategories}
                callToAction={ctaLoggedIn()}
            />
            <DesktopNavigationItem
                topCategories={topCategories}
            />
        </div>
    )
}

mobileNavigation.story = {
    name: 'Mobile Navigation',
    decorators: [withKnobs],
}
