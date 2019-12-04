import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import app from 'frontastic-catwalk/src/js/app/app'
import classnames from 'classnames'
import Button from '../../atoms/buttons/button'

class OrganismsFormRegister extends Component {
    constructor (props) {
        super(props)

        this.state = {
            register_salutation: '',
            register_firstName: '',
            register_lastName: '',
            register_email: '',
            register_password: '',
            register_tos: false,
        }
    }

    hasAllRequired = () => {
        return !!(
            this.state.register_salutation &&
            this.state.register_firstName &&
            this.state.register_lastName &&
            this.state.register_email &&
            this.state.register_password &&
            this.state.register_tos
        )
    }

    render () {
        return (
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <ul className='o-list-inline'>
                                <li className='o-list-inline__item' onClick={() => { return this.setState({ register_salutation: 'Frau' }) }}>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className={classnames({
                                                'c-form-radio': true,
                                                'is-active': this.state.register_salutation === 'Frau',

                                            })}>
                                                <input type='radio' id='inp-radio-02' name='salutation_frau' className='c-form-radio__input' />
                                                <span className='c-form-radio__backdrop' />
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-radio-02' className='c-form-label'>
                                                <FormattedMessage id='account.register.genderFemale' />
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li className='o-list-inline__item' onClick={() => { return this.setState({ register_salutation: 'Herr' }) }}>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className={classnames({
                                                'c-form-radio': true,
                                                'is-active': this.state.register_salutation === 'Herr',

                                            })}>
                                                <input type='radio' id='inp-radio-02' name='salutation_herr' className='c-form-radio__input' />
                                                <span className='c-form-radio__backdrop' />
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-radio-02' className='c-form-label'>
                                                <FormattedMessage id='account.register.genderMale' />
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>
                                <FormattedMessage id='account.register.firstName' />
                            </label>
                            <input
                                type='text'
                                className='o-distance-xs'
                                value={this.state.register_firstName}
                                onChange={(event) => {
                                    this.setState({ register_firstName: event.target.value })
                                }}
                            />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>
                                <FormattedMessage id='account.register.lastName' />
                            </label>
                            <input
                                type='text'
                                className='o-distance-xs'
                                value={this.state.register_lastName}
                                onChange={(event) => {
                                    this.setState({ register_lastName: event.target.value })
                                }}
                            />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-mail' className='c-form-label'>
                                <FormattedMessage id='account.login.emailAddress' />
                            </label>
                            <input
                                type='email'
                                id='inp-mail'
                                className='o-distance-xs'
                                value={this.state.register_email}
                                onChange={(event) => {
                                    this.setState({ register_email: event.target.value })
                                }}
                            />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>
                                <FormattedMessage id='account.login.password' />
                            </label>
                            <div className='c-form-unit o-distance-s'>
                                <input
                                    type='password'
                                    className='o-distance-xs'
                                    id='inp-password'
                                    value={this.state.register_password}
                                    onChange={(event) => {
                                        this.setState({ register_password: event.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <div className='o-block-short'>
                                <div className='o-block-short__short-item'>
                                    <div className='c-form-checkbox'>
                                        <input
                                            type='checkbox'
                                            checked={this.state.register_tos}
                                            id='inp-checkbox-02'
                                            name='checkbox'
                                            className='c-form-checkbox__input'
                                            onClick={(event) => {
                                                this.setState({ register_tos: event.target.checked })
                                            }}
                                        />
                                        <span className='c-form-checkbox__backdrop' />
                                        <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                            <path
                                                id='Check'
                                                className='st0'
                                                d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                      c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                      C203,40.1,200.1,25.5,189.3,18.4z'
                                />
                                        </svg>
                                    </div>
                                </div>
                                <div className='o-block-short__body'>
                                    <label htmlFor='inp-checkbox-02' className='c-form-label'>
                                        <FormattedMessage id='account.register.tcAgree' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        type='primary'
                        size='boss'
                        className='o-distance-m'
                        disabled={!this.hasAllRequired()}
                        onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()

                            app.getLoader('context').register({
                                salutation: this.state.register_salutation,
                                firstName: this.state.register_firstName,
                                lastName: this.state.register_lastName,
                                email: this.state.register_email,
                                password: this.state.register_password,
                                tos: this.state.register_tos,
                            })
                        }}
                    >
                        <FormattedMessage id='account.register.registerNow' />
                    </Button>
                </fieldset>
            </form>
        )
    }
}

OrganismsFormRegister.propTypes = {
}

OrganismsFormRegister.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormRegister', OrganismsFormRegister)
