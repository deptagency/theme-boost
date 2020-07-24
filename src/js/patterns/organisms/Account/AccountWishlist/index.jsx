import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import app from '@frontastic/catwalk/src/js/app/app'
import ProductTeaser from 'Molecules/ProductTeaser'
import EmptyWishlist from './emptyWishlist'

import { animated, useTransition } from 'react-spring'

import useComponentSize from '@rehooks/component-size'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'

const AccountWishlist = ({ wishlist }) => {
    const [ wishlistChanging, setWishlistChanging ] = useState(false)
    const [wishlistItems, setWishlistItems] = useState([])
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

    if (wishlistItems.length === 0) {
        return (
            <EmptyWishlist />
        )
    }

    return (
        <>
            {!wishlist.isComplete() && <div className='relative h-screen'><DefaultLoader /></div>}

            {wishlist.isComplete() && wishlistContainerTransition.map(({ item, key, props: containerProps }) => {
                return (
                    <>
                        {item && <animated.div style={containerProps} className='z-50 pt-2'>
                            <div ref={wishlistContainerRef} className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                {wishlistItemsTransitions.map(({ item, key, props }) => {
                                    return (
                                        <animated.div key={key} style={{ ...props, minHeight: '354px' }}>
                                            <div ref={itemRef}>
                                                <ProductTeaser
                                                    product={item}
                                                    showHeartIcon={false}
                                                    showCloseIcon
                                                    handleRemoveFromWishlist={() => {
                                                        setWishlistChanging(true)
                                                        app.getLoader('wishlist').removeLineItem(wishlist.data.wishlistId, {
                                                            lineItemId: item.lineItemId,
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </animated.div>
                                    )
                                })}
                            </div>
                        </animated.div>}
                    </>
                )
            })}
        </>
    )
}

AccountWishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

export default AccountWishlist
