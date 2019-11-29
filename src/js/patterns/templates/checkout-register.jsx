import React, { Component, Fragment } from 'react'

import Button from '../atoms/buttons/button'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
import OrganismsFormRegister from '../organisms/form/form-register'
import OrganismsFooter from '../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesCheckoutRegister extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHeaderMobile />
                    <div className='o-television__display'>
                        <div className='o-container-small'>
                            <OrganismsFormRegister />
                            <Button type='primary' size='boss' className='o-distance-m'>Jetzt Registrieren</Button>
                            <div className='o-television__display__boundless'>
                                <span className='c-divider c-divider--break o-distance-m' />
                            </div>
                            <section className='o-distance-m'>
                                <h2 className='c-title-level-3 u-text-center'>Melde dich jetzt an</h2>
                                <Button type='quiet' size='boss' className='o-distance-m'>Anmelden</Button>
                            </section>
                        </div>
                        <OrganismsFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}

TemplatesCheckoutRegister.propTypes = {
}

TemplatesCheckoutRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesCheckoutRegister', TemplatesCheckoutRegister)
