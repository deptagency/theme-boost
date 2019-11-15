import React from 'react'

import MoleculesFormUnit from 'js/patterns/molecules/forms/form-unit'

export default {
    title: '3.Molecules|Forms',
}

export const radio = () => {
    return (
        <div>
            <h3>Default Radio</h3>
            <div className='c-form-radio'>
                <input type='radio' id='inp-radio-01' name='radio' className='c-form-radio__input' />
                <span className='c-form-radio__backdrop' />
            </div>
            <h3 className='o-distance'>Checked Radio</h3>
            <div className='c-form-radio'>
                <input type='radio' id='inp-radio-01' name='radio' className='c-form-radio__input' checked />
                <span className='c-form-radio__backdrop' />
            </div>
        </div>
    )
}

radio.story = {
    name: 'Radio',
}

export const checkbox = () => {
    return (
        <div>
            <h3>Default Checkbox</h3>
            <div className='c-form-checkbox'>
                <input type='checkbox' id='inp-checkbox-01' name='checkbox' className='c-form-checkbox__input' />
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
            <h3 className='o-distance'>Active Checkbox</h3>
            <div className='c-form-checkbox'>
                <input
                    type='checkbox'
                    id='inp-checkbox-01'
                    name='checkbox'
                    className='c-form-checkbox__input'
                    checked
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
    )
}

checkbox.story = {
    name: 'Checkbox',
}

export const unit = () => {
    return (
        <div>
            <MoleculesFormUnit />
        </div>
    )
}

unit.story = {
    name: 'Unit',
}

export const helpText = () => {
    return <p className='c-form-help-text'>Help Text</p>
}

helpText.story = {
    name: 'Help Text',
}

export const choice = () => {
    return (
        <div>
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
                        Checkbox
                    </label>
                </div>
            </div>
            <div className='o-block-short'>
                <div className='o-block-short__short-item'>
                    <div className='c-form-checkbox'>
                        <input
                            type='checkbox'
                            id='inp-checkbox-03'
                            name='checkbox'
                            className='c-form-checkbox__input'
                            checked
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
                    <label htmlFor='inp-checkbox-03' className='c-form-label'>
                        Checkbox
                    </label>
                </div>
            </div>
        </div>
    )
}

choice.story = {
    name: 'Choice',
}
