import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MobileNavigation from '../../molecules/navigations/mobileNavigation'
import { topCategoryType } from '../../molecules/navigations/mobileNavigation/types'
import TopCategoryNavLinks from '../../molecules/navigations/topCategoryNavLinks'
import MoleculesUserIconNav from '../../molecules/navigations/user-icon-nav'
import MobileMenuToggle from '../../molecules/buttons/mobile-menu-toggle'
import MoleculesButton from '../../molecules/buttons/button'

const ctaLoggedIn = () => {
    return (
        <MoleculesButton type='quiet' onClick={() => { /* return console.log('yea') */ }}>
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
                <div className='o-header__top-left u-hidden-until-medium'>
                    <TopCategoryNavLinks items={topCategories} />
                </div>
                {/*
                    Although <MobileMenuToggle /> and <MobileNavigation />
                    set their own classNames inside the components,
                    I've added the media query classes to the top level
                    inside the Header component to have it all in one place.
                */}
                <MobileMenuToggle
                    isMenuOpen={isMobileMenuOpen}
                    className='u-hidden-medium-up'
                    onToggle={() => {
                        return setIsMobileMenuOpen(!isMobileMenuOpen)
                    }}
                />

                <a href='/' className='c-logo' title='Catwalk'>
                    Catwalk
                </a>
                <MoleculesUserIconNav open />
            </div>
            <MobileNavigation
                className='u-hidden-medium-up'
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
