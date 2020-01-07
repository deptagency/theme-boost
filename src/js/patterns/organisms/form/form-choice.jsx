import React, { Fragment, Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsChoice extends Component {
    render () {
        return (<Fragment>
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
        </Fragment>)
    }
}

OrganismsChoice.propTypes = {
}

OrganismsChoice.defaultProps = {
}

export default ComponentInjector.return('OrganismsChoice', OrganismsChoice)
