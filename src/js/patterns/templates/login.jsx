import React, { Component, Fragment } from 'react'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFormLogin from 'js/patterns/organisms/form/form-login'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesLogin extends Component {
    render () {
        return (
            <Fragment>
                <div className="o-television">
                    <OrganismsHeaderMobile className="o-television__bar" />
                    <div className="o-television__display">
                        <OrganismsPageHeader />
                        <OrganismsFormLogin />
                        <MoleculesButton type="primary" size="boss" className='o-distance-m'>Anmelden</MoleculesButton>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className="o-distance-m">
                          <h2 className="c-title-level-3 u-text-center">Kostenloses Benutzerkonto</h2>
                          <MoleculesButton type="quiet" size="boss" className='o-distance-m'>Ich bin neu hier</MoleculesButton>
                        </section>
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
