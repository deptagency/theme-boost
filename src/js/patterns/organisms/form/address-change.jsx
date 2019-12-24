import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AddressChange extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <ul className='o-list-inline'>
                                <li className='o-list-inline__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-radio'>
                                                <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' />
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
                                <li className='o-list-inline__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-radio'>
                                                <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' checked />
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
                            <input type='text' className='o-distance-xs' value='Tim' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>
                                <FormattedMessage id='account.register.lastName' />
                            </label>
                            <input type='text' className='o-distance-xs' value='Hartmann' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-mail' className='c-form-label'>
                                <FormattedMessage id='account.address.street' />
                            </label>
                            <input type='text' id='inp-street' className='o-distance-s' value='Ewaldstr. 2' />
                        </div>
                        <div className='o-form-area__column-2-6 o-form-area__new-row'>
                            <label htmlFor='inp-text' className='c-form-label'>
                                <FormattedMessage id='account.address.zip' />
                            </label>
                            <input type='text' className='o-distance-s' id='inp-text' value='59174' />
                        </div>
                        <div className='o-form-area__column-4-6'>
                            <label htmlFor='inp-text' className='c-form-label'>
                                <FormattedMessage id='account.address.location' />
                            </label>
                            <input type='text' className='o-distance-s' id='inp-text' value='Kamen' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-hint-address' className='c-form-label'>
                                <FormattedMessage id='account.address.hint' />
                            </label>
                            <input type='text' id='inp-hint-address' className='o-distance-s' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-hint-address' className='c-form-label'>
                                <FormattedMessage id='account.address.land' />
                            </label>
                            <select name='' id='' className='o-distance-s'>
                                <option value=''>
                                    <FormattedMessage id='account.choose' />
                                </option>
                            </select>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <ul className='o-list-bare'>
                                <li className='o-list-bare__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-checkbox'>
                                                <input type='checkbox' id='inp-checkbox-02' name='checkbox' className='c-form-checkbox__input' checked />
                                                <span className='c-form-checkbox__backdrop' />
                                                <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'><path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9 c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121 C203,40.1,200.1,25.5,189.3,18.4z' /></svg>
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-checkbox-02' className='c-form-label'>
                                                <FormattedMessage id='account.address.delivery' />
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li className='o-list-bare__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-checkbox'>
                                                <input type='checkbox' id='inp-checkbox-02' name='checkbox' className='c-form-checkbox__input' />
                                                <span className='c-form-checkbox__backdrop' />
                                                <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                                    <path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9 c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121 C203,40.1,200.1,25.5,189.3,18.4z' />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-checkbox-02' className='c-form-label'>
                                                <FormattedMessage id='account.address.billing' />
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>)
    }
}

AddressChange.propTypes = {
}

AddressChange.defaultProps = {
}

export default ComponentInjector.return('AddressChange', AddressChange)
