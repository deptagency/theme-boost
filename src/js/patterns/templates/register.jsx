import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'
import OrganismsFormRegister from '../organisms/form/form-register'
import OrganismsPageHeader from '../organisms/base/header-page'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesRegister extends Component {
    render () {
        return (
            <div className='o-container-small'>
                <OrganismsPageHeader
                    title={<FormattedMessage id='account.register.createUser' />}
                    className='u-hidden-medium-up'
                    handleClick={() => { app.getRouter().history.replace('/') }}
                />
                <div className='u-hidden-until-medium'>
                    <h2 className='c-title u-text-center'>
                        <FormattedMessage id='account.register.createUser' />
                    </h2>
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
