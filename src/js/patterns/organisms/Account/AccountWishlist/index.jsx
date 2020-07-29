import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ProductTeaser from 'Molecules/ProductTeaser'
import EmptyWishlist from './emptyWishlist'
import Error from './error'
import { FormattedMessage } from 'react-intl'
import { animated, useTransition } from 'react-spring'
import useComponentSize from '@rehooks/component-size'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import usePhotoScale from './usePhotoScale'

const AccountWishlist = ({ wishlist, handleRemoveFromWishlist, returnToHomePage }) => {
    const [ wishlistChanging, setWishlistChanging ] = useState(false)
    const [ wishlistItems, setWishlistItems ] = useState([])
    const wishlistContainerRef = useRef(null)
    const itemRef = useRef(null)
    const { height: wishlistHeight } = useComponentSize(wishlistContainerRef)
    const { scale } = usePhotoScale()

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
                wishlistContainerTransition.map(({ item, key, props: containerProps }) => {
                    return <>
                        {item && <animated.div style={containerProps}>
                            <div ref={wishlistContainerRef}>
                                <div className='text-center my-3'>
                                    <div className='font-bold text-2xl'>
                                        <FormattedMessage id='wishlist.myWishlist' />
                                    </div>
                                    <div className='text-sm text-neutral-600'>
                                        {wishlistItems.length === 1 ?
                                            <FormattedMessage id='wishlist.product' /> :
                                            <FormattedMessage id='wishlist.products' values={{ count: wishlistItems.length }} />}
                                    </div>
                                </div>
                                <div className='grid gap-2 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between'>
                                    {wishlistItemsTransitions.map(({ item, key, props }) => {
                                            return (
                                                <animated.div key={key} style={{ ...props, minHeight: '354px' }}>
                                                    <div ref={itemRef}>
                                                        <ProductTeaser
                                                            product={item}
                                                            scale={scale}
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
                            </div>
                        </animated.div>}
                        {item && <div className='border-t-4 border-neutral-200 h-10' />}
                    </>
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
