import React, { Component } from 'react'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsTelevisionCartEmpty extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderSlideIn title='Mein Warenkorb' className='o-television__bar' />
                <div className='o-television__display' />
                <div className='o-television__remote-control'>
                    <MoleculesButton type='primary' size='boss'>Jetzt anmelden</MoleculesButton>
                </div>
            </div>
        )
    }
}

OrganismsTelevisionCartEmpty.propTypes = {
}

OrganismsTelevisionCartEmpty.defaultProps = {
}

export default ComponentInjector.return('OrganismsTelevisionCartEmpty', OrganismsTelevisionCartEmpty)
