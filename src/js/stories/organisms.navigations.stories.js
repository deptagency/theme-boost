import React from 'react'

import MoleculesSequentialNav from 'js/patterns/molecules/navigations/sequential-nav'
import MoleculesMobileNavigation from 'js/patterns/molecules/navigations/mobile-navigation'

export default {
    title: '3.Organisms|Navigations',
}

export const sequential = () => {
    return (
        <MoleculesSequentialNav />
    )
}

sequential.story = {
    name: 'Sequential',
}

export const mobileNavigation = () => {
    return (
        <MoleculesMobileNavigation />
    )
}

mobileNavigation.story = {
    name: 'Mobile Navigation',
}
