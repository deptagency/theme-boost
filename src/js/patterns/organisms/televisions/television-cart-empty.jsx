import React, { Component } from 'react'

import Button from 'js/patterns/molecules/buttons/button'
import HeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TelevisionCartEmpty extends Component {
    render () {
        return (
            <div className='o-television'>
                <HeaderSlideIn title='Mein Warenkorb' className='o-television__bar' />
                <div className='o-television__display' />
                <div className='o-television__remote-control'>
                    <Button type='primary' size='boss'>Jetzt anmelden</Button>
                </div>
            </div>
        )
    }
}

TelevisionCartEmpty.propTypes = {
}

TelevisionCartEmpty.defaultProps = {
}

export default ComponentInjector.return('TelevisionCartEmpty', TelevisionCartEmpty)
