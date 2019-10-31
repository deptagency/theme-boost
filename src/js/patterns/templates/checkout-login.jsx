import React, { Component, Fragment } from 'react'

import MoleculesButton from '../molecules/buttons/button'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
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
                        <OrganismsPageHeader title='Anmelden' />
                        <h2 className='c-title-level-3 o-distance-m'>Melde dich an oder erstelle ein Konto</h2>
                        <div className='o-buttonbar o-distance-s'>
                            <MoleculesButton type='primary' className='o-buttonbar__item'>Anmelden</MoleculesButton>
                            <MoleculesButton type='primary' className='o-buttonbar__item'>Registrieren</MoleculesButton>
                        </div>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <h2 className='c-title-level-3'>Als Gast fortfahren</h2>
                            <form action='' className='o-distance-s'>
                                <label htmlFor='' className='c-label'>E-Mail-Adresse</label>
                                <input type='email' name='' id='' className='o-distance-xs' />
                            </form>
                            <MoleculesButton type='primary' size='boss' className='o-distance-m'>Als Gast zur Kasse</MoleculesButton>
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
