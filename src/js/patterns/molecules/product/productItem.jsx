import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class ProductItem extends Component {
    render () {
        let product = this.props.product

        const { name, category, price, variants } = product

        return (
            <div>
                <article class="o-product">
                    <Link itemProp='url' path={product._url || ''}>
                        <div className='o-head-up'>
                            <img
                                className='tns-lazy'
                                src={variants[0].images[0]}
                                data-src={variants[0].images[0]}
                                alt={name}
                                style={{ width: '320px', margin: '0 auto' }}
                            />
                            <div class="o-head-up__item o-head-up__item--top-right">
                                <button class="u-icon-line-height">
                                    <svg class="c-icon c-icon--xs" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200">
                                        <path d="M122.4,100.1l71.7-71.7c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3c-6.2-6.2-16.3-6.2-22.5,0L99.9,77.6 L28.2,5.9c-3-3-7-4.7-11.3-4.7c-4.3,0-8.3,1.7-11.3,4.7c-6.2,6.2-6.2,16.3,0,22.5l71.7,71.7L5.7,171.8c-3,3-4.7,7-4.7,11.3 c0,4.3,1.7,8.3,4.7,11.3c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7l71.7-71.7l71.7,71.7c3,3,7,4.7,11.3,4.7c4.3,0,8.3-1.7,11.3-4.7 c3-3,4.7-7,4.7-11.3s-1.7-8.3-4.7-11.3L122.4,100.1z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <div class="o-product__header o-distance-s">
                        <div class="o-product__header__large-column">
                            <h3 class="c-title-level-4">{name}</h3>
                            <p class="u-text-s t-text-quiet">{category}</p>
                        </div>
                        <div>
                            <p class="c-price">{price}</p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

ProductItem.defaultProps = {
}

export default ComponentInjector.return('ProductItem', ProductItem)
