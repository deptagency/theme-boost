import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { useSpring, animated } from 'react-spring'

import { FormattedMessage } from 'react-intl'
import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const EmptyWishlist = () => {
    const fading = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    return (
        <animated.div style={fading} className='z-50 pt-2 min-h-354px '>
            <div className='flex flex-col text-center w-64 mx-auto mt-16'>
                <div className='mx-auto mb-3'>
                    <IconEmotionSad className='w-8 h-8 text-gray-800 fill-current' />
                </div>
                <div>
                    <div className='font-bold text-2xl mb-2'>
                        <FormattedMessage id='wishlist.emptyWishlist' />
                    </div>
                </div>
                <Button
                    variant='btn btn-indigo mt-6 mr-2'
                    onClick={() => {
                        app.getRouter().history.replace('/')
                    }}
                >
                    <FormattedMessage id='wishlist.keepBrowsing' />
                </Button>
            </div>
        </animated.div>
    )
}

export default EmptyWishlist
