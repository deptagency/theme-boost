import React, { Component } from 'react'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesPasswortResetAddMail extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div>
                        <OrganismsPageHeader title='Neues Passwort anfordern' />
                        <p className='u-text-s t-text-quiet'>Bitte gib Deine E-Mail-Adresse ein. Wir werden Dir eine E-Mail zusenden, damit Du Dein Passwort zurücksetzen kannst.</p>
                    </div>
                    <form method=''>
                        <fieldset>
                            <div className='o-form-area o-distance-m'>
                                <div className='o-form-area__column-6-6 o-form-area__new-row'>
                                    <label htmlFor='inp-bank-owner' className='c-form-label'>E-Mail-Address</label>
                                    <input type='text' className='o-distance-xs' id='inp-bank-owner' />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className='o-television__remote-control'>
                    <MoleculesButton type='primary' size='boss'>Neues Passwort anfordern</MoleculesButton>
                </div>
            </div>
        )
    }
}

TemplatesPasswortResetAddMail.propTypes = {
}

TemplatesPasswortResetAddMail.defaultProps = {
}

export default ComponentInjector.return('TemplatesPasswortResetAddMail', TemplatesPasswortResetAddMail)
