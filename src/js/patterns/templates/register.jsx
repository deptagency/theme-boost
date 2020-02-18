import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'
import FormRegister from '../organisms/form/register'
import PageHeader from '../organisms/base/header-page'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Register extends Component {
    render () {
        return (
            <div className='o-container-small'>
                <PageHeader
                    title={<FormattedMessage id='account.register.createUser' />}
                    className='u-hidden-medium-up'
                    handleClick={() => { app.getRouter().history.replace('/') }}
                />
                <div className='u-hidden-until-medium'>
                    <h2 className='c-title'>
                        <FormattedMessage id='account.register.createUser' />
                    </h2>
                </div>
                <FormRegister />
            </div>
        )
    }
}

Register.propTypes = {
}

Register.defaultProps = {
}

export default ComponentInjector.return('Register', Register)
