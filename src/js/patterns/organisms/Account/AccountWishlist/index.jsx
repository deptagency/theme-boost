import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ProductTeaser from 'Molecules/ProductTeaser'
import EmptyWishlist from './emptyWishlist'
import Error from './error'
import { FormattedMessage } from 'react-intl'
import { animated, useTransition } from 'react-spring'
import useComponentSize from '@rehooks/component-size'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'

const AccountWishlist = ({ wishlist, handleRemoveFromWishlist, returnToHomePage }) => {
    const [ wishlistChanging, setWishlistChanging ] = useState(false)
    const [ wishlistItems, setWishlistItems ] = useState([])
    const wishlistContainerRef = useRef(null)
    const itemRef = useRef(null)
    const { height: wishlistHeight } = useComponentSize(wishlistContainerRef)

    useEffect(() => {
        if (wishlist.data && wishlist.data.lineItems) {
            setWishlistItems(wishlist.data.lineItems)
            setWishlistChanging(true)
        } else {
            setWishlistChanging(false)
        }
    }, [wishlist])

    const wishlistContainerTransition = useTransition(wishlistChanging, null, {
        initial: {
            height: wishlistHeight > 0 ? wishlistHeight : 'auto',
        },
        update: { height: wishlistHeight > 0 ? wishlistHeight : 'auto' },
    })

    const wishlistItemsTransitions = useTransition(
        wishlistItems,
        item => { return item.lineItemId },
        {
            initial: {
                opacity: 1,
            },
            from: {
                opacity: 0,
            },
            enter: {
                opacity: 1,
            },
            leave: {
                height: 0,
                opacity: 0,
            },
        })

    return (
        <>
            {!wishlist.isComplete() && wishlist.loading &&
                <div className='relative h-screen'><DefaultLoader /></div>}

            {wishlist.error &&
                <Error returnToHomePage={returnToHomePage} />}

            {wishlist.isComplete() && wishlistItems.length === 0 &&
                <EmptyWishlist returnToHomePage={returnToHomePage} />}

            {wishlist.isComplete() && wishlistItems.length > 0 &&
                wishlistContainerTransition.map(({ item }) => {
                    var lineItemSum = 0
                    wishlist.data.lineItems.map(lineItem => {
                        return (
                            lineItemSum += lineItem.count
                        )
                    })
                    return (
                        <div className='border-b-4 border-gray-100 mb-4'>
                            {item && <animated.div className='z-50 pt-2 min-h-354px'>
                                <div className='text-center my-3'>
                                    <div className='font-bold text-2xl'>
                                        <FormattedMessage id='wishlist.myWishlist' />
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        {lineItemSum === 1 && <div>{lineItemSum} <FormattedMessage id='wishlist.product' /></div>}
                                        {lineItemSum > 1 && <div>{lineItemSum} <FormattedMessage id='wishlist.products' /></div>}
                                    </div>
                                </div>
                                <div ref={wishlistContainerRef} className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                    {wishlistItemsTransitions.map(({ item, key, props }) => {
                                        return (
                                            <animated.div key={key} style={{ ...props }}>
                                                <div ref={itemRef}>
                                                    <ProductTeaser
                                                        product={item}
                                                        showHeartIcon={false}
                                                        showCloseIcon
                                                        handleRemoveFromWishlist={() => {
                                                            setWishlistChanging(true)
                                                            handleRemoveFromWishlist(item.lineItemId)
                                                        }}
                                                    />
                                                </div>
                                            </animated.div>
                                        )
                                    })}
                                </div>
                            </animated.div>}
                        </div>
                    )
                })
            }
        </>
    )
}

AccountWishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
    handleRemoveFromWishlist: PropTypes.func.isRequired,
    returnToHomePage: PropTypes.func.isRequired,
}

export default AccountWishlist
