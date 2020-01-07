import React, { Component } from 'react'

import Button from '../atoms/buttons/button'
import HeaderMobile from '../organisms/base/header-mobile'
import FormRegister from '../organisms/form/register'
import Footer from '../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class CheckoutRegister extends Component {
    render () {
        return (
            <>
                <HeaderMobile />
                <div className='o-container-small'>
                    <FormRegister />
                    <Button type='primary' size='boss' className='o-distance-m'>Jetzt Registrieren</Button>
                    <span className='c-divider c-divider--break o-distance-l' />
                    <section className='o-distance-l'>
                        <h2 className='c-title-level-3 u-text-center'>Melde dich jetzt an</h2>
                        <Button type='quiet' size='boss' className='o-distance-m'>Anmelden</Button>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}

CheckoutRegister.propTypes = {
}

CheckoutRegister.defaultProps = {
}

export default ComponentInjector.return('CheckoutRegister', CheckoutRegister)
