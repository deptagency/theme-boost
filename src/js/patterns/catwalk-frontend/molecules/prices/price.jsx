import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class MoleculesPrice extends Component {
    render () {
        return (<div>
          <h2>Current Price</h2>
          <span itemprop="price" class="c-price">23,95 €</span>
          <h2 className='o-distance'>Price Offer</h2>
          <span itemprop="price" class="c-price t-text-danger">19,95 €</span>
          <h2 className='o-distance'>Old Price</h2>
          <span itemprop="price" class="c-price c-price--old t-text-quiet">39,95 €</span>
        </div>)
    }
}

MoleculesPrice.propTypes = {
}

MoleculesPrice.defaultProps = {
}

export default ComponentInjector.return('MoleculesPrice', MoleculesPrice)
