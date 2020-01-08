import React, { Component } from 'react'

import OrganismsFormLogin from 'js/patterns/organisms/form/login'
import Button from 'js/patterns/atoms/buttons/button'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsPopupLogin extends Component {
    render () {
        return (
            <div className='o-popup c-box u-box-shadow t-ghost is-active'>
                <div className='o-popup__holder'>
                    <h2 className='c-title'>Anmelden</h2>
                    <OrganismsFormLogin />
                    <Button type='primary' size='boss' className='o-distance'>Anmelden</Button>
                </div>
            </div>
        )
    }
}

OrganismsPopupLogin.propTypes = {
}

OrganismsPopupLogin.defaultProps = {
}

export default ComponentInjector.return('OrganismsPopupLogin', OrganismsPopupLogin)
