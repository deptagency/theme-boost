import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MoleculesMobileNavigation from '../../molecules/navigations/mobileNavigation'
import { topCategoryType } from '../../molecules/navigations/mobileNavigation/types'
import MoleculesTopCategoryNavLinks from '../../molecules/navigations/topCategoryNavLinks'
import MoleculesUserIconNav from '../../molecules/navigations/user-icon-nav'
import MobileMenuToggle from '../../molecules/buttons/mobile-menu-toggle'
import MoleculesButton from '../../molecules/buttons/button'

const ctaLoggedIn = () => {
    return (
        <MoleculesButton type='quiet' onClick={() => console.log('yea')}>
            Meine Bestellungen ansehen
        </MoleculesButton>
    )
}

const OrganismsHead = ({ topCategories }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    if (!topCategories) {
        return null
    }

    return (
        <div className='o-header'>
            <div className='o-header__top'>
                <div className='o-header__top-left'>
                    <MoleculesTopCategoryNavLinks items={topCategories} />
                </div>
                <MobileMenuToggle
                    isMenuOpen={isMobileMenuOpen}
                    onToggle={() => {
                        return setIsMobileMenuOpen(!isMobileMenuOpen)
                    }}
                />

                <a href='' className='c-logo' title='Catwalk'>
                    Catwalk
                </a>
                <MoleculesUserIconNav open />
            </div>
            <MoleculesMobileNavigation
                calltoAction={ctaLoggedIn()}
                onClose={() => {
                    return setIsMobileMenuOpen(false)
                }}
                open={isMobileMenuOpen}
                topCategories={topCategories}
            />
        </div>
    )
}

OrganismsHead.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
}

OrganismsHead.defaultProps = {}

export default ComponentInjector.return('OrganismsHead', OrganismsHead)
