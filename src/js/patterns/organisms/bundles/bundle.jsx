import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { ReactComponent as CartBin } from '../../../../icons/cart-bin.svg'
import {
    productRow,
    productImage,
    productInfo,
    productTitle,
    productDesigner,
    countSelect,
    rightColumn,
    cartPrice,
} from './bundle.module.scss'

import MoleculesDetaillist from '../../molecules/lists/detaillist'
import AtomsPrice from '../../atoms/prices/price'

class OrganismsBundle extends Component {
    render () {
        const { image, name, designer, count, price, color, size } = this.props

        return (
            <div className={`${productRow} productRow`}>
                <div className={`${productImage} productImage`}>
                    <img src={image} alt='' />
                </div>
                <div className={`${productInfo} productInfo`}>
                    <div className='o-bundle__header'>
                        <div>
                            <div className={`${productTitle} productTitle`}>{name}</div>
                            <div className={`${productDesigner} productDesigner`}>{designer}</div>
                        </div>
                    </div>
                    <div className='o-bundle__body'>
                        <MoleculesDetaillist
                            color={color}
                            size={size}
                            count={count}
                        />
                        <select className={`${countSelect} o-distance-s`} name='' id=''>
                            {Array.from(Array(10).keys()).map((i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className={`${rightColumn} rightColumn`}>
                    <CartBin />
                    <div className={`${cartPrice} cartPrice`}>
                        <AtomsPrice value={price} normal />
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsBundle.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    designer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

OrganismsBundle.defaultProps = {
}

export default ComponentInjector.return('OrganismsBundle', OrganismsBundle)
