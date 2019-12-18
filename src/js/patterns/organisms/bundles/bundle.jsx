import React from 'react'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import classnames from 'classnames'
import { ReactComponent as CartBin } from '../../../../icons/cart-bin.svg'
import {
    productRow,
    productImage,
    productInfo,
    productTitle,
    productDesigner,
    countSelect,
    rightColumn,
    cursorPointer,
    cartPrice,
} from './bundle.module.scss'

import MoleculesDetaillist from '../../molecules/lists/detaillist'
import AtomsPrice from '../../atoms/prices/price'

const OrganismsBundle = ({ itemId, image, name, designer, count, price, color, size }) => {
    // TODO create a counter with - and + instead of a dropdown
    const productCounter = Array.from(Array(10).keys())

    return (
        <div className={classnames(productRow, 'productRow')}>
            <div className={classnames(productImage, 'productImage')}>
                <img src={image} alt='' />
            </div>
            <div className={classnames(productInfo, 'productInfo')}>
                <div className='o-bundle__header'>
                    <div>
                        <div className={classnames(productTitle, 'productTitle')}>{name}</div>
                        <div className={classnames(productDesigner, 'productDesigner')}>{designer}</div>
                    </div>
                </div>
                <div className='o-bundle__body'>
                    <MoleculesDetaillist
                        color={color}
                        size={size}
                    />
                    <select
                        className={classnames(countSelect, 'o-distance-s')}
                        onChange={(event) => {
                            app.getLoader('cart').updateLineItem({
                                lineItemId: itemId,
                                count: event.target.value,
                            })
                        }}
                        value={count}
                    >
                        {productCounter.map((i) => {
                            const count = i + 1
                            return <option key={count} value={count}>{count}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className={classnames(rightColumn, 'rightColumn')}>
                <CartBin
                    className={cursorPointer}
                    onClick={() => {
                        app.getLoader('cart').removeLineItem({ lineItemId: itemId })
                    }}
                />
                <div className={classnames(cartPrice, 'cartPrice')}>
                    <AtomsPrice value={price} normal />
                </div>
            </div>
        </div>
    )
}

OrganismsBundle.propTypes = {
    itemId: PropTypes.string.isRequired,
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
