import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import { ReactComponent as CartIcon } from './../../../../icons/cart.svg'

class MoleculesCart extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <div className='o-counter'>
                        <CartIcon />
                        <span className='c-bubble o-counter__spot'>2</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

MoleculesCart.propTypes = {}

MoleculesCart.defaultProps = {}

export default ComponentInjector.return('MoleculesCart', MoleculesCart)
