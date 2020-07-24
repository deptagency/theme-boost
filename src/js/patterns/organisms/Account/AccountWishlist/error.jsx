import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useSpring, animated } from 'react-spring'

import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const Error = ({ returnToHomePage }) => {
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
                    <IconEmotionSad className='w-8 h-8 text-red-800 fill-current' />
                </div>
                <div>
                    <div className='font-bold text-2xl mb-2'>
                        <FormattedMessage id='wishlist.errorMessage' />
                    </div>
                </div>
                <Button
                    variant='btn btn-indigo mt-6 mr-2'
                    onClick={returnToHomePage}
                >
                    <FormattedMessage id='wishlist.keepBrowsing' />
                </Button>
            </div>
        </animated.div>
    )
}

Error.propTypes = {
    returnToHomePage: PropTypes.func.isRequired,
}

export default Error
