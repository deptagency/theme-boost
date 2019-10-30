import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MoleculesMobileNavigation from './'
import MoleculesButton from 'js/patterns/molecules/buttons/button'

import topCategories from './topCategories.json'

export default {
    title: '3.Organisms|Navigations|Mobile',
}

const ctaLoggedIn = () => {
    return (
        <MoleculesButton type='quiet' onClick={action('go to orders')}>
            Meine Bestellungen ansehen
        </MoleculesButton>
    )
}

export const mobileNavigation = () => {
    return (
        <MoleculesMobileNavigation
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
