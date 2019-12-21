import React, { Component } from 'react'

import Button from '../atoms/buttons/button'
import OrganismsPageHeader from '../organisms/base/header-page'
import OrganismsHeaderMobile from '../organisms/base/header-mobile'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesLogin extends Component {
    render () {
        return (
            <>
                <OrganismsHeaderMobile />
                <div className='o-container-small'>
                    <OrganismsPageHeader title='Anmelden' />
                    <h2 className='c-title-level-3 o-distance-m'>Melde dich an oder erstelle ein Konto</h2>
                    <div className='o-buttonbar o-distance-s'>
                        <Button type='primary' size='boss' className='o-buttonbar__item'>Anmelden</Button>
                        <Button type='primary' size='boss' className='o-buttonbar__item'>Registrieren</Button>
                    </div>
                    <span className='c-divider c-divider--break o-distance-m' />
                    <section className='o-distance-m'>
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

TemplatesLogin.propTypes = {
}

TemplatesLogin.defaultProps = {
}

export default ComponentInjector.return('TemplatesLogin', TemplatesLogin)
