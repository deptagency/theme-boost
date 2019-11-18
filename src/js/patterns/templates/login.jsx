import React, { Component, Fragment } from 'react'

import Button from '../atoms/buttons/button'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
import OrganismsFormLogin from '../organisms/form/form-login'
import OrganismsPageHeader from '../organisms/base/header-page'
import OrganismsFooter from '../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesLogin extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHeaderMobile className='o-television__bar' />
                    <div className='o-television__display'>
                        <div className='o-container-small'>
                            <OrganismsPageHeader />
                            <OrganismsFormLogin />
                            <Button type='primary' size='boss' className='o-distance-m'>Anmelden</Button>
                            <div className='o-television__display__boundless'>
                                <span className='c-divider c-divider--break o-distance-m' />
                            </div>
                            <section className='o-distance-m'>
                                <h2 className='c-title-level-3 u-text-center'>Kostenloses Benutzerkonto</h2>
                                <Button type='quiet' size='boss' className='o-distance-m'>Ich bin neu hier</Button>
                            </section>
                        </div>
                        <OrganismsFooter />
                    </div>
                </div>

            </Fragment>
        )
    }
}

TemplatesLogin.propTypes = {
}

TemplatesLogin.defaultProps = {
}

export default ComponentInjector.return('TemplatesLogin', TemplatesLogin)
