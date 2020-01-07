import React, { Component } from 'react'

import FormSepa from 'js/patterns/organisms/form/sepa'
import Button from 'js/patterns/atoms/buttons/button'
import HeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class PopupSepa extends Component {
    render () {
        return (
            <div className='o-popup c-box u-box-shadow t-ghost is-active'>
                <div className='o-popup__header'>
                    <HeaderSlideIn title='Sepa-Lastschrift' />
                </div>
                <div className='o-popup__holder'>
                    <FormSepa />
                    <Button type='primary' size='boss' className='o-distance'>Speichern</Button>
                </div>
            </div>
        )
    }
}

PopupSepa.propTypes = {
}

PopupSepa.defaultProps = {
}

export default ComponentInjector.return('PopupSepa', PopupSepa)
