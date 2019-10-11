import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '../../../app/injector'

import MoleculesSticker from '../sticker/sticker'
import MoleculesWishlist from '../wishlist/wishlist'
import MoleculesColorSwatch from '../colorswatches/colorswatch'

class MoleculesProduct extends Component {
    render () {
        const { width } = this.props
        let style = {}
        if (typeof width !== 'undefined') { style = { width } }

        return (<div style={style}>
            <article className='o-product'>
                <a href='' className='o-product__asset' title=''>
                    <div className='o-head-up'>
                        <img src='https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg' alt='' className='' />
                        <div className='o-head-up__item o-head-up__item--top-left'>
                            <MoleculesSticker />
                        </div>
                        <div className='o-head-up__item o-head-up__item--top-right'>
                            <MoleculesWishlist />
                        </div>
                        <div className='o-head-up__item o-head-up__item--middle-right'>
                            <div className='o-product__options c-box t-ghost'>
                                <MoleculesColorSwatch />
                            </div>
                        </div>
                    </div>
                </a>
                <div className='o-product__header o-distance-s'>
                    <div className='o-product__header__large-column'>
                        <h3 className='c-title-level-4'>Vero Moda</h3>
                        <p className='t-text-quiet'>Ballkleid</p>
                    </div>
                    <div>
                        <ul className='o-list-bare o-list-bare--tighty'>
                            <li className='o-list-bare__item'>
                                <span className='c-price c-price--highlight'>24,95 €</span>
                            </li>
                            <li className='o-list-bare__item'>
                                <span className='c-price c-price--old'>39,95 €</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>)
    }
}

MoleculesProduct.propTypes = {
    width: PropTypes.string,
}

MoleculesProduct.defaultProps = {
}

export default ComponentInjector.return('MoleculesProduct', MoleculesProduct)
