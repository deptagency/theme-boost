import React, { Component } from 'react'

import OrganismsFormSepa from 'js/patterns/organisms/form/form-sepa'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

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
                    <MoleculesButton type='primary' size='boss'>Speichern</MoleculesButton>
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
