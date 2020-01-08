import React, { Component, Fragment } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Banking extends Component {
    render () {
        return (<Fragment>
            <div className='o-form-area'>
                <div className='o-form-area__column-6-6 o-form-area__new-row'>
                    <label htmlFor='inp-bank-owner' className='c-form-label'>Kontoinhaber</label>
                    <input type='text' className='o-distance-xs' id='inp-bank-owner' />
                </div>
                <div className='o-form-area__column-6-6 o-form-area__new-row'>
                    <label htmlFor='inp-iban' className='c-form-label'>IBAN</label>
                    <input type='text' className='o-distance-xs' id='inp-iban' />
                </div>
            </div>
        </Fragment>)
    }
}

Banking.propTypes = {
}

Banking.defaultProps = {
}

export default ComponentInjector.return('Banking', Banking)
