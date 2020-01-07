import React, { Component } from 'react'

import FormSepa from '../../organisms/form/sepa'
import Button from '../../atoms/buttons/button'
import HeaderSlideIn from '../../organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TelevisionSepa extends Component {
    render () {
        return (
            <div className='o-television'>
                <HeaderSlideIn title='SEPA-Lastschrift' className='o-television__bar' />
                <div className='o-television__display'>
                    <FormSepa />
                </div>
                <div className='o-television__remote-control'>
                    <Button type='primary' size='boss'>Speichern</Button>
                </div>
            </div>
        )
    }
}

TelevisionSepa.propTypes = {
}

TelevisionSepa.defaultProps = {
}

export default ComponentInjector.return('TelevisionSepa', TelevisionSepa)
