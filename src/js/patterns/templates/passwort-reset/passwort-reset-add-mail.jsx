import React, { Component } from 'react'

import Button from '../../atoms/buttons/button'
import HeaderMobile from '../../organisms/base/header-mobile'
import PageHeader from '../../organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class PasswortResetAddMail extends Component {
    render () {
        return (
            <div className='o-television'>
                <HeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <div>
                            <PageHeader title='Neues Passwort anfordern' />
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
                </div>
                <div className='o-television__remote-control'>
                    <div className='o-container-small'>
                        <Button type='primary' size='boss'>Neues Passwort anfordern</Button>
                    </div>
                </div>
            </div>
        )
    }
}

PasswortResetAddMail.propTypes = {
}

PasswortResetAddMail.defaultProps = {
}

export default ComponentInjector.return('PasswortResetAddMail', PasswortResetAddMail)
