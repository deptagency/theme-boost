import React, { Component } from 'react'

import OrganismsFormBanking from 'js/patterns/organisms/form/form-banking'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFormSepa extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <ul className='o-list-bare'>
                                <li className='o-list-bare__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-radio'>
                                                <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' />
                                                <span className='c-form-radio__backdrop' />
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-radio-02' className='c-form-label'>
                            Tim Hartmann
                                                <p className='o-distance-xs'><span className='t-text-quiet'>IBAN:</span> DE 28 1234 5678 9876 52</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li className='o-list-bare__item'>
                                    <div className='o-block-short'>
                                        <div className='o-block-short__short-item'>
                                            <div className='c-form-radio'>
                                                <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' checked />
                                                <span className='c-form-radio__backdrop' />
                                            </div>
                                        </div>
                                        <div className='o-block-short__body'>
                                            <label htmlFor='inp-radio-02' className='c-form-label'>Neue Bankverbindung hinzufügen</label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <OrganismsFormBanking />
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                          <p className='u-text-s t-text-quiet'>Ich erteile der frontastic GmbH, Berlin ein SEPA-Lastschriftmandat für obiges Bankkonto. Ich kann die Erstattung einer Lastschrift innerhalb von 8 Wochen verlangen, nachdem der Betrag belastet wurde.</p>
                        </div>
                    </div>
                </fieldset>
                <div className='o-distance-l'>
                    <button type='submit' className='c-button c-button--primary c-button--boss'>Speichern</button>
                </div>
            </form>
        </div>)
    }
}

OrganismsFormSepa.propTypes = {
}

OrganismsFormSepa.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormSepa', OrganismsFormSepa)
