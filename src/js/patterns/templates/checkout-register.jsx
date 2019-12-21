import React, { Component, Fragment } from 'react'

import Button from '../atoms/buttons/button'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
import OrganismsFormRegister from '../organisms/form/form-register'
import OrganismsFooter from '../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesCheckoutRegister extends Component {
    render () {
        return (
            <>
                <OrganismsHeaderMobile />
                <div className='o-container-small'>
                    <OrganismsFormRegister />
                    <Button type='primary' size='boss' className='o-distance-m'>Jetzt Registrieren</Button>
                    <span className='c-divider c-divider--break o-distance-m' />
                    <section className='o-distance-m'>
                        <h2 className='c-title-level-3 u-text-center'>Melde dich jetzt an</h2>
                        <Button type='quiet' size='boss' className='o-distance-m'>Anmelden</Button>
                    </section>
                </div>
                <OrganismsFooter />
            </>
        )
    }
}

TemplatesCheckoutRegister.propTypes = {
}

TemplatesCheckoutRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesCheckoutRegister', TemplatesCheckoutRegister)
