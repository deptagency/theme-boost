import React, { Component } from 'react'

import OrganismsFormPasswortReset from 'js/patterns/organisms/form/form-password-reset'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesPasswordResetConfirmation extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='u-text-center'>
                        <h1 className='c-title-level-3'>Überprüfe deine E-Mails</h1>
                        <p className='o-distance-s'>Wir haben dir eine E-Mail an folgende Adresse geschickt:</p>
                        <p className='u-text-strong o-distance'>tim.hartmann93@gmail.com</p>
                        <p className='u-text-s t-text-quiet o-distance'>Bitte überprüfe deine E-Mails und klicke auf dem Link, den du dort findest.</p>
                    </div>
                </div>
                <div className='o-television__remote-control'>
                    <MoleculesButton type='primary' size='boss'>Zur Anmeldung</MoleculesButton>
                </div>
            </div>
        )
    }
}

TemplatesPasswordResetConfirmation.propTypes = {
}

TemplatesPasswordResetConfirmation.defaultProps = {
}

export default ComponentInjector.return('TemplatesPasswordResetConfirmation', TemplatesPasswordResetConfirmation)
