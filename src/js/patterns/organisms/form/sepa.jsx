import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Sepa extends Component {
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
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-bank-owner' className='c-form-label'>Kontoinhaber</label>
                            <input type='text' className='o-distance-xs' id='inp-bank-owner' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-iban' className='c-form-label'>IBAN</label>
                            <input type='text' className='o-distance-xs' id='inp-iban' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <p className='u-text-s t-text-quiet'>Ich erteile der frontastic GmbH, Berlin ein SEPA-Lastschriftmandat für obiges Bankkonto. Ich kann die Erstattung einer Lastschrift innerhalb von 8 Wochen verlangen, nachdem der Betrag belastet wurde.</p>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>)
    }
}

Sepa.propTypes = {
}

Sepa.defaultProps = {
}

export default ComponentInjector.return('Sepa', Sepa)
