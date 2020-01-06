import React from 'react'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import classnames from 'classnames'
import { ReactComponent as CartBin } from '../../../../icons/cart-bin.svg'

import MoleculesDetaillist from '../../molecules/lists/detaillist'
import AtomsPrice from '../../atoms/prices/price'

const OrganismsBundle = ({ itemId, image, name, designer, count, price, color, size }) => {
    // TODO create a counter with - and + instead of a dropdown
    const productCounter = Array.from(Array(10).keys())

    return (
        <div className='o-bundle'>
            <div className='o-bundle__asset'>
                <img src={image} alt='' />
            </div>
            <div className='o-bundle__header'>
                <div>
                    <div className='c-title-level-4'>{name}</div>
                    <div className='u-text-s t-text-quiet'>{designer}</div>
                </div>
                <button onClick={() => {
                    app.getLoader('cart').removeLineItem({ lineItemId: itemId })
                }}>
                    <CartBin/>
                </button>
            </div>
            <div className='o-bundle__body'>
                <MoleculesDetaillist
                    color={color}
                    size={size}
                />
                <select
                    className='o-distance-m'
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
            <div className='o-bundle__footer'>
                <AtomsPrice value={price} normal />
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
