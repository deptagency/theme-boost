import React, { useState } from 'react'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MobileNavigation from '../../molecules/navigations/mobileNavigation'
import { topCategoryType } from '../../molecules/navigations/mobileNavigation/types'
import TopCategoryNav from '../../molecules/navigations/topCategoryNav'
import MoleculesUserIconNav from '../../molecules/navigations/user-icon-nav'
import MobileMenuToggle from '../../atoms/buttons/mobile-menu-toggle'
import Button from '../../atoms/buttons/button'
import {FormattedMessage} from "react-intl";

const OrganismsHead = ({ topCategories, loggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    if (!topCategories) {
        return null
    }

    const ctaLoggedIn = () => {
        return (
            <Button
                className='button-login-register'
                type='quiet'
                onClick={() => {
                    app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
                    setIsMobileMenuOpen(false)
                }}
                >
                {loggedIn ?
                    <FormattedMessage id='account.viewMyProfile' />
                    : <FormattedMessage id='account.signUp' /> }
            </Button>
        )
    }

    return (
        <div className='o-header'>
            <div className='o-header__top'>
                <div className='o-header__top-left u-hidden-until-medium'>
                    <TopCategoryNav items={topCategories} />
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
                callToAction={ctaLoggedIn()}
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
    loggedIn: PropTypes.bool.isRequired,
}

OrganismsHead.defaultProps = {
    loggedIn: false,
}

export default ComponentInjector.return('OrganismsHead', OrganismsHead)
