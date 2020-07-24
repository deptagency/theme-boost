import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useSpring, animated } from 'react-spring'

import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const EmptyWishlist = ({ returnToHomePage }) => {
    const fading = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    })

    return (
        <animated.div style={fading} className='z-50 pt-2 mt-8'>
            <div className='border-b-4 border-gray-100 mb-4 min-h-354px'>
                <div className='flex flex-col text-center w-64 mx-auto pt-16'>
                    <div className='mx-auto mb-3'>
                        <IconEmotionSad className='w-8 h-8 text-gray-800 fill-current' />
                    </div>
                    <div>
                        <div className='font-bold text-2xl mt-1 mb-3'>
                            <FormattedMessage id='wishlist.emptyWishlist' />
                        </div>
                    </div>
                    <Button
                        variant='btn btn-indigo mt-6 mr-2'
                        onClick={returnToHomePage}
                    >
                        <FormattedMessage id='wishlist.keepBrowsing' />
                    </Button>
                </div>
                
            </div>
        </animated.div>
    )
}

EmptyWishlist.propTypes = {
    returnToHomePage: PropTypes.func.isRequired,
}

export default EmptyWishlist
