import React, { Component } from 'react'

import FormLogin from 'js/patterns/organisms/form/login'
import Button from 'js/patterns/atoms/buttons/button'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class PopupLogin extends Component {
    render () {
        return (
            <div className='o-popup c-box u-box-shadow t-ghost is-active'>
                <div className='o-popup__holder'>
                    <h2 className='c-title'>Anmelden</h2>
                    <FormLogin />
                    <Button type='primary' size='boss' className='o-distance'>Anmelden</Button>
                </div>
            </div>
        )
    }
}

PopupLogin.propTypes = {
}

PopupLogin.defaultProps = {
}

export default ComponentInjector.return('PopupLogin', PopupLogin)
