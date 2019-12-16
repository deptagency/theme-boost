import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'

import OrganismsFormRegister from '../organisms/form/form-register'

import { registerTitle } from './register.module.scss'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesRegister extends Component {
    render () {
        return (
            <div className='o-television o-television__display o-container-small'>
                <div className={registerTitle}>
                    <FormattedMessage id='account.newHere' />
                </div>
                <OrganismsFormRegister />
            </div>
        )
    }
}

TemplatesRegister.propTypes = {
}

TemplatesRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesRegister', TemplatesRegister)
