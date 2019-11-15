import React, { Component } from 'react'

import Button from '../../atoms/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesPasswordResetConfirmation extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderSlideIn setIsOpen={() => {}} title='Bestätigung' className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <div className='u-text-center'>
                            <h1 className='c-title-level-3'>Überprüfe deine E-Mails</h1>
                            <p className='o-distance-s'>Wir haben dir eine E-Mail an folgende Adresse geschickt:</p>
                            <p className='u-text-strong o-distance'>tim.hartmann93@gmail.com</p>
                            <p className='u-text-s t-text-quiet o-distance'>Bitte überprüfe deine E-Mails und klicke auf dem Link, den du dort findest.</p>
                        </div>
                    </div>
                </div>
                <div className='o-television__remote-control'>
                    <div className='o-container-small'>
                        <Button type='primary' size='boss'>Zur Anmeldung</Button>
                    </div>
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
