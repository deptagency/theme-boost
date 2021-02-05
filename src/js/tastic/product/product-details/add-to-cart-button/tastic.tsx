import * as React from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import app from '@frontastic/catwalk/src/js/app/app'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'

import LoaderButton from '../../../../patterns/molecules/Loaders/LoaderButton'
import Button from '../../../../patterns/atoms/button'
import IconButton from '../../../../patterns/atoms/button/IconButton'
import { ReactComponent as IconHeart } from '../../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as IconHeartFull } from '../../../../icons/tailwind-icons/icon-heart-full.svg'

import { Product, Variant } from '@frontastic/common/src/js/types/product'
import { Wishlist } from '@frontastic/common/src/js/types/wishlist'
//import { Variant as WishlistLineItem } from '@frontastic/common/src/js/types/wishlist/lineitem'

interface RootState {
    product: Product
    variants: Variant[]
    cart: any
}
type Props = {
    data: { isWishlistButton: boolean }
    intl: any // yea.
    wishlist: { data: Wishlist }
}

function AddToCartButton(props: Props) {
    const isLoading = useSelector((state: RootState) => state.cart && state.cart.cart.loading)
    const { product, variant } = useSelector((state: RootState) => productConnector(state, props))
    const { data, wishlist, intl } = props

    if (!product || !variant) return null

    const wishlistItem = wishlist?.data?.lineItems.find((item: any) => item.variant.sku === variant.sku)
    const handleAddToCart = () => {
        app.getLoader('cart').add(null, variant, 1, null)
    }
    const handleToggleWishlist = () => {
        !wishlistItem
            ? app.getLoader('wishlist').add(product, variant, 1, null)
            : app.getLoader('wishlist').removeLineItem(wishlist.data.wishlistId, {
                  lineItemId: wishlistItem.lineItemId,
              })
    }

    return (
        <div className='flex pb-6'>
            <Button
                name={intl.formatMessage({ id: 'inCartProduct' })}
                variant={classnames({
                    'btn bg-primary-600 text-white w-full h-10': true,
                    'cursor-default': isLoading,
                    'mr-4': data.isWishlistButton,
                })}
                onClick={handleAddToCart}
                disabled={!variant.isOnStock || isLoading}
            >
                {isLoading ? <LoaderButton /> : <FormattedMessage id='inCartProduct' />}
            </Button>
            {data.isWishlistButton && (
                <IconButton
                    name={intl.formatMessage({ id: 'wishlist.myWishlist' })}
                    variant='flex items-center justify-center text-neutral-900 border border-neutral-900 w-10 rounded outline-none focus:outline-none'
                    icon={wishlistItem ? <IconHeartFull /> : <IconHeart />}
                    onClick={handleToggleWishlist}
                />
            )}
        </div>
    )
}

export default tastify({ connect: { wishlist: true } })(injectIntl(AddToCartButton))
