import React, { Component, Fragment } from 'react'

import MoleculesButton from '../molecules/buttons/button'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
import OrganismsFormRegister from '../organisms/form/form-register'
import OrganismsPageHeader from '../organisms/base/header-page'
import OrganismsFooter from '../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesRegister extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHeaderMobile className='o-television__bar' />
                    <div className='o-television__display'>
                        <OrganismsPageHeader title='Benutzerkonto erstellen' />
                        <OrganismsFormRegister />
                        <MoleculesButton type='primary' size='boss' className='o-distance-m'>Jetzt Registrieren</MoleculesButton>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <h2 className='c-title-level-3 u-text-center'>Melde dich jetzt an</h2>
                            <MoleculesButton type='quiet' size='boss' className='o-distance-m'>Anmelden</MoleculesButton>
                        </section>
                        <OrganismsFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}

TemplatesRegister.propTypes = {
}

TemplatesRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesRegister', TemplatesRegister)
