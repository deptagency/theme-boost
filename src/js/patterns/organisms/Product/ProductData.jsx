import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import classnames from 'classnames'

import FullPageWidthWrapper from '../../molecules/Layout/FullPageWidthWrapper'
import LoaderButton from '../../molecules/Loaders/LoaderButton'
import StarRating from './StarRating.tsx'

import Price from '../../atoms/price'
import Button from '../../atoms/button'
import IconButton from '../../atoms/button/IconButton'

import ColorSelector from './Selectors/ColorSelector'
import SizeSelector from './Selectors/SizeSelector'

import { ReactComponent as IconHeart } from '../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as IconHeartFull } from '../../../icons/tailwind-icons/icon-heart-full.svg'
import { ReactComponent as IconRocket } from '../../../icons/tailwind-icons/icon-rocket.svg'
import { ReactComponent as IconRefresh } from '../../../icons/tailwind-icons/icon-refresh.svg'

const ProductData = ({
    intl,
    name,
    variants,
    selectedVariant,
    onChange,
    handleAddToCart,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    wishlisted = false,
}) => {
    /* preventing showing LoaderButton on initial page load */
    const [showLoader, setShowLoader] = useState(false)
    const isLoading = useSelector((globalState) => {
        return globalState.cart && globalState.cart.cart.loading
    })
    let loading = showLoader && isLoading

    return (
        <>
            <div className='text-xl font-bold text-neutral-900'>{name}</div>

            <Price
                variant='text-lg text-neutral-700 py-1'
                value={selectedVariant.discountedPrice || selectedVariant.price}
                currency={selectedVariant.currency}
            />

            <StarRating />

            {selectedVariant.attributes.color && (
                <ColorSelector
                    value={selectedVariant.attributes.color?.label || selectedVariant.attributes.color}
                    variants={variants}
                    onChange={onChange}
                />
            )}

            {selectedVariant.attributes.size && (
                <SizeSelector
                    value={selectedVariant.attributes.size?.label || selectedVariant.attributes.size}
                    variants={variants}
                    onChange={onChange}
                />
            )}

            <div className='flex pb-6'>
                <Button
                    name={intl.formatMessage({ id: 'inCartProduct' })}
                    variant={classnames({
                        'btn bg-primary-600 text-white w-full mr-2 h-10': true,
                        'cursor-default': loading,
                    })}
                    onClick={() => {
                        setShowLoader(true)
                        handleAddToCart(selectedVariant).then(() => {
                            return setShowLoader(false)
                        })
                    }}
                    disabled={loading || selectedVariant.isOnStock === false}
                >
                    {loading ? <LoaderButton /> : <FormattedMessage id='inCartProduct' />}
                </Button>
                <IconButton
                    name={intl.formatMessage({ id: 'wishlist.myWishlist' })}
                    variant='flex items-center justify-center text-neutral-900 border border-neutral-900 w-10 rounded outline-none focus:outline-none'
                    icon={wishlisted ? <IconHeartFull /> : <IconHeart />}
                    onClick={() => {
                        !wishlisted && handleAddToWishlist()
                        wishlisted && handleRemoveFromWishlist()
                    }}
                />
            </div>

            <div className='flex flex-col md:flex-row md:border-b border-neutral-300'>
                <div className='flex p-4 border-b md:border-b-0 lg:border-b-0 border-neutral-300'>
                    <IconRocket className='text-xl mr-3 fill-current text-primary-500' />
                    <FormattedMessage id='product.delivery24hs' />
                </div>

                <div className='flex p-4'>
                    <IconRefresh className='text-xl mr-3 fill-current text-primary-500' />
                    <FormattedMessage id='product.freeReturns' />
                </div>
                <FullPageWidthWrapper className='border-b-4 border-neutral-100 md:hidden' />
            </div>
        </>
    )
}

ProductData.propTypes = {
    intl: intlShape.isRequired,
    name: PropTypes.string.isRequired,
    variants: PropTypes.array.isRequired,
    selectedVariant: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleAddToWishlist: PropTypes.func.isRequired,
    handleRemoveFromWishlist: PropTypes.func.isRequired,
    wishlisted: PropTypes.bool,
}

export default injectIntl(ProductData)
