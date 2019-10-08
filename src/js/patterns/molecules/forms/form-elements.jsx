import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'
import MoleculesFormFromTo from './form-element-from-to'
import MoleculesFormCheckboxList from './form-checkbox-list'

class FormElements extends Component {
    render () {
        return (<div>
            <div className='c-form-element'>
                <label htmlFor='inp-textfield' className='c-form-label'>Default</label>
                <input type='text' id='inp-textfield' name='textfield' />
            </div>
            <div className='c-form-element'>
                <label htmlFor='inp-textfield-01' className='c-form-label'>Required</label>
                <input type='text' id='inp-textfield-01' name='textfield' required />
            </div>
            <div className='c-form-element'>
                <label htmlFor='inp-textfield-02' className='c-form-label'>Placeholder</label>
                <input type='text' id='inp-textfield-02' name='textfield' placeholder='Placeholder' />
            </div>
            <div className='c-form-element'>
                <div className='c-form-radio'>
                    <input type='radio' id='inp-radio-01' name='radio' className='c-form-radio__input' />
                    <span className='c-form-radio__backdrop' />
                </div>
            </div>
            <div className='c-form-element'>
                <div className='c-form-checkbox'>
                    <input type='checkbox' id='inp-checkbox-01' name='checkbox' className='c-form-checkbox__input' />
                    <span className='c-form-checkbox__backdrop' />
                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                        <path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                  c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                  C203,40.1,200.1,25.5,189.3,18.4z' />
                    </svg>
                </div>
            </div>
            <MoleculesFormCheckboxList />
            <p className='c-form-help-text'>Help Text</p>
            <div className='c-form-element'>
                <div className='o-block-short'>
                    <div className='o-block-short__short-item'>
                        <div className='c-form-radio'>
                            <input type='radio' id='inp-radio-02' name='radio' className='c-form-radio__input' />
                            <span className='c-form-radio__backdrop' />
                        </div>
                    </div>
                    <div className='o-block-short__body'>
                        <label htmlFor='inp-radio-02' className='c-form-label'>Radio</label>
                        <p className='c-form-help-text'>Lorem Ipsum Dolores</p>
                    </div>
                </div>
            </div>
            <div className='c-form-element'>
                <div className='c-form-choice'>
                    <div className='c-form-choice__control'>
                        <div className='c-form-checkbox'>
                            <input type='checkbox' id='inp-checkbox-02' name='checkbox' className='c-form-checkbox__input' />
                            <span className='c-form-checkbox__backdrop' />
                            <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                <path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                      c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                      C203,40.1,200.1,25.5,189.3,18.4z' />
                            </svg>
                        </div>
                    </div>
                    <div className='c-form-choice__body'>
                        <label htmlFor='inp-checkbox-02' className='c-form-label'>Checkbox</label>
                        <p className='c-form-help-text'>Lorem Ipsum Dolores</p>
                    </div>
                </div>
            </div>
            <div className='c-form-element'>
                <label htmlFor='inp-select'>Select</label>
                <select name='select' id='inp-select'>
                    <option value='Value'>Value</option>
                    <option value='Value'>Value</option>
                    <option value='Value'>Value</option>
                    <option value='Value'>Value</option>
                </select>
            </div>
            <div className='c-form-element'>
                <label htmlFor='inp-textarea'>Textarea</label>
                <textarea name='textarea' id='inp-textarea' />
            </div>
            <div className='c-form-element'>
                <label htmlFor='inp-unit' className='c-form-label'>Unit Area</label>
                <div className='c-form-unit'>
                    <input type='text' className='c-form-unit__input' id='inp-unit' />
                    <div className='c-form-unit__type'>€</div>
                </div>
            </div>
            <div className='c-form-element'>
                <label htmlFor=''>Label</label>
                <div className='o-grid o-grid--small-half'>
                    <div className='c-form-unit'>
                        <input type='text' className='c-form-unit__input' id='inp-unit' />
                        <div className='c-form-unit__type'>€</div>
                    </div>
                    <div className='c-form-unit'>
                        <input type='text' className='c-form-unit__input' id='inp-unit' />
                        <div className='c-form-unit__type'>€</div>
                    </div>
                </div>
            </div>
            <div className='c-form-element'>
                <label htmlFor=''>Label</label>
                <ul className='o-list-inline'>
                    <li className='o-list-inline__item'>
                        <div className='c-form-choice'>
                            <div className='c-form-choice__control'>
                                <div className='c-form-checkbox'>
                                    <input type='checkbox' id='inp-checkbox-02' name='checkbox' className='c-form-checkbox__input' />
                                    <span className='c-form-checkbox__backdrop' />
                                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                        <path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                          c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                          C203,40.1,200.1,25.5,189.3,18.4z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='c-form-choice__body'>
                                <label htmlFor='inp-checkbox-02' className='c-form-label'>Checkbox</label>
                            </div>
                        </div>
                    </li>
                    <li className='o-list-inline__item'>
                        <div className='c-form-choice'>
                            <div className='c-form-choice__control'>
                                <div className='c-form-checkbox'>
                                    <input type='checkbox' id='inp-checkbox-02' name='checkbox' className='c-form-checkbox__input' />
                                    <span className='c-form-checkbox__backdrop' />
                                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                        <path id='Check' className='st0' d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
                          c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
                          C203,40.1,200.1,25.5,189.3,18.4z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='c-form-choice__body'>
                                <label htmlFor='inp-checkbox-02' className='c-form-label'>Checkbox</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <MoleculesFormFromTo />
        </div>)
    }
}

FormElements.propTypes = {
}

FormElements.defaultProps = {
}

export default ComponentInjector.return('FormElements', FormElements)
