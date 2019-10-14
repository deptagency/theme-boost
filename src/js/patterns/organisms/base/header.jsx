import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MoleculesMobileNavigation from '../../molecules/navigations/mobile-navigation'
import MoleculesGenderNavLinks from '../../molecules/navigations/gender-nav-links'
import MoleculesUserIconNav from '../../molecules/navigations/user-icon-nav'
import MobileMenuToggle from '../../molecules/buttons/mobile-menu-toggle'

const OrganismsHead = ({ genderNavEntries }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <div className='o-header'>
            <div className='o-header__top'>
                <div className='o-header__top-left'>
                    <MoleculesGenderNavLinks items={genderNavEntries} />
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
            <MoleculesMobileNavigation open={isMobileMenuOpen} genderNavEntries={genderNavEntries} />
        </div>
    )
}

OrganismsHead.propTypes = {
    genderNavEntries: PropTypes.arrayOf(PropTypes.object),
}

OrganismsHead.defaultProps = {}

export default ComponentInjector.return('OrganismsHead', OrganismsHead)
