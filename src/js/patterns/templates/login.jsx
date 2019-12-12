import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'

import Button from '../atoms/buttons/button'
import OrganismsPageHeader from '../organisms/base/header-page'

import { loginBorder } from './login.module.scss'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesLogin extends Component {
    constructor (props) {
        super(props)

        this.state = {
            login_email: '',
            login_password: '',
        }
    }

    render () {
        return (
            <div className='o-television o-television__display o-container-small'>
                <OrganismsPageHeader
                    title={<FormattedMessage id='account.login.welcomeBack' />}
                    handleClick={() => { app.getRouter().history.replace('/') }}
                />
                <div className='o-form-area o-distance-m'>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='inp-mail' className='c-form-label'>
                            <FormattedMessage id='account.login.emailAddress' />
                        </label>
                        <input
                            type='email'
                            className='o-distance-s'
                            value={this.state.login_email}
                            onChange={(event) => {
                                this.setState({ login_email: event.target.value })
                            }}
                        />
                    </div>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='inp-password' className='c-form-label'>
                            <FormattedMessage id='account.login.password' />
                        </label>
                        <input
                            type='password'
                            className='c-form-unit o-distance-s'
                            value={this.state.login_password}
                            onChange={(event) => {
                                this.setState({ login_password: event.target.value })
                            }}
                        />
                    </div>
                </div>
                <Button
                    type='primary'
                    size='boss'
                    className='o-distance-m'
                    disabled={!this.state.login_email || !this.state.login_password}
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        app.getLoader('context').login(this.state.login_email, this.state.login_password)
                    }}
                >
                    <FormattedMessage id='account.login.login' />
                </Button>
                <div className={`${ loginBorder } o-television__display__boundless c-divider c-divider--break o-distance-m`} />
            </div>
        )
    }
}

TemplatesLogin.propTypes = {
}

TemplatesLogin.defaultProps = {
}

export default ComponentInjector.return('TemplatesLogin', TemplatesLogin)
