import React, { Component } from 'react'

import Button from '../atoms/buttons/button'
import PageHeader from '../organisms/base/header-page'
import HeaderMobile from '../organisms/base/header-mobile'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Login extends Component {
    render () {
        return (
            <>
                <HeaderMobile />
                <div className='o-container-small'>
                    <PageHeader title='Anmelden' />
                    <h2 className='c-title-level-3 o-distance-m'>Melde dich an oder erstelle ein Konto</h2>
                    <div className='o-buttonbar o-distance-s'>
                        <Button type='primary' size='boss' className='o-buttonbar__item'>Anmelden</Button>
                        <Button type='primary' size='boss' className='o-buttonbar__item'>Registrieren</Button>
                    </div>
                    <span className='c-divider c-divider--break o-distance-l' />
                    <section className='o-distance-l'>
                        <h2 className='c-title-level-3'>Als Gast fortfahren</h2>
                        <form action='' className='o-distance-s'>
                            <label htmlFor='' className='c-label'>E-Mail-Adresse</label>
                            <input type='email' name='' id='' className='o-distance-xs' />
                        </form>
                        <Button type='primary' size='boss' className='o-distance-m'>Als Gast zur Kasse</Button>
                    </section>
                </div>
            </>
        )
    }
}

Login.propTypes = {
}

Login.defaultProps = {
}

export default ComponentInjector.return('Login', Login)
