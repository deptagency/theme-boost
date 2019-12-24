import React, { Component } from 'react'

import OrganismsFormPasswortReset from '../../organisms/form/password-reset'
import Button from '../../atoms/buttons/button'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import OrganismsPageHeader from '../../organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesNewPassword extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <div>
                            <OrganismsPageHeader title='Neues Passwort' />
                            <p className='u-text-s t-text-quiet'>Bitte gib ein neues Passwort ein, damit du wieder Zugang zu deinem Benutzerkonto erhältst.</p>
                        </div>
                        <OrganismsFormPasswortReset />
                    </div>
                </div>
                <div className='o-television__remote-control o-container-small'>
                    <Button type='primary' size='boss'>Neues Passwort anfordern</Button>
                </div>
            </div>
        )
    }
}

TemplatesNewPassword.propTypes = {
}

TemplatesNewPassword.defaultProps = {
}

export default ComponentInjector.return('TemplatesNewPassword', TemplatesNewPassword)
