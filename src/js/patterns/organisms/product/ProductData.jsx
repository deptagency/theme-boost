import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'

import MarginBreakout from 'Molecules/Layout/MarginBreakout'
import StarRating from './StarRating'

import Button from 'Atoms/button'
import Price from 'Atoms/price'
import IconButton from 'Atoms/button/IconButton'

import ColorSelector from './selectors/ColorSelector'
import SizeSelector from './selectors/SizeSelector'

import { ReactComponent as IconHeartBorder } from 'Icons/tailwind-icons/icon-heart-border.svg'
import { ReactComponent as IconRocket } from 'Icons/tailwind-icons/icon-rocket.svg'
import { ReactComponent as IconRefresh } from 'Icons/tailwind-icons/icon-refresh.svg'

const ProductData = ({ name, variants, selectedVariant, onChange }) => {
    return (
        <div className='mt-4 md:mt-6'>
            <div className='text-xl font-bold text-gray-900'>{name}</div>
            <Price
                variant='text-lg text-gray-600 py-1'
                value={selectedVariant.price}
                currency={selectedVariant.currency}
            />

            <StarRating />
            <ColorSelector
                value={selectedVariant.attributes.color}
                variants={variants}
                onChange={onChange}
            />

            <SizeSelector
                value={selectedVariant.attributes.size}
                variants={variants}
                onChange={onChange}
            />

            <div className='flex pb-6'>
                <Button
                    variant='btn bg-indigo-500 text-white w-full pt-2 h-10 lg:mr-4'
                    onClick={() => {
                        app.getLoader('cart').add(null, selectedVariant, 1, null)
                    }}
                >
                    <FormattedMessage id='inCartProduct' />
                </Button>
                <IconButton variant='text-icon-size hidden lg:block' icon={<IconHeartBorder />} />
            </div>

            <div className='flex flex-col md:flex-row md:border-b border-gray-300'>
                <div className='flex p-4 border-b md:border-b-0 lg:border-b-0 border-gray-300'>
                    <IconRocket className='text-xl mr-3' />
                    <FormattedMessage id='product.delivery24hs' />
                </div>

                <div className='flex p-4'>
                    <IconRefresh className='text-xl mr-3' />
                    <FormattedMessage id='product.freeReturns' />
                </div>
                <MarginBreakout variant='border-b-4 border-gray-100 md:hidden' />
            </div>
        </div>
    )
}

ProductData.propTypes = {
    name: PropTypes.string.isRequired,
    variants: PropTypes.array.isRequired,
    selectedVariant: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,

}

export default ProductData
