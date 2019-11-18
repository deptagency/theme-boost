import React, { Component } from 'react'

import OrganismsFormSepa from '../../organisms/form/form-sepa'
import Button from '../../atoms/buttons/button'
import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsTelevisionSepa extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderSlideIn title='SEPA-Lastschrift' className='o-television__bar' />
                <div className='o-television__display'>
                    <OrganismsFormSepa />
                </div>
                <div className='o-television__remote-control'>
                    <Button type='primary' size='boss'>Speichern</Button>
                </div>
            </div>
        )
    }
}

OrganismsTelevisionSepa.propTypes = {
}

OrganismsTelevisionSepa.defaultProps = {
}

export default ComponentInjector.return('OrganismsTelevisionSepa', OrganismsTelevisionSepa)
