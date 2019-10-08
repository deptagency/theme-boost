import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class OrganismsFormRegister extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <legend>Kostenloses Benutzerkonto erstellen</legend>
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
                                            <label htmlFor='inp-radio-02' className='c-form-label'>Frau</label>
                                        </div>
                                    </div>
                                </li>
                                <li className='o-list-inline__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-radio'>
                                                <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' />
                                                <span className='c-form-radio__backdrop' />
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-radio-02' className='c-form-label'>Herr</label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>Firstname</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>Lastname</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-mail' className='c-form-label'>E-Mail Adresse</label>
                            <input type='email' id='inp-mail' className='o-distance-s' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>Passwort</label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                                <button className='c-form-unit__type c-link c-link--quiet'>Zeigen</button>
                            </div>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <div className='o-block-short'>
                                <div className='o-block-short__short-item'>
                                    <div className='c-form-checkbox'>
                                        <input
                                            type='checkbox'
                                            id='inp-checkbox-02'
                                            name='checkbox'
                                            className='c-form-checkbox__input'
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
                            Ja, ich stimme den AGB und den Datenschutzbestimmungen von frontastic zu.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className='o-distance-l'>
                    <button type='submit' className='c-button c-button--primary c-button--boss'>Jetzt registrieren</button>
                </div>
            </form>
        </div>)
    }
}

OrganismsFormRegister.propTypes = {
}

OrganismsFormRegister.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormRegister', OrganismsFormRegister)
