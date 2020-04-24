import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import { ReactComponent as IconLockClosed } from 'Icons/tailwind-icons/icon-lock-closed.svg'

const CheckoutHeader = ({ logoStoryBook }) => {
    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, logoStoryBook)

    return (
        <div className='flex h-12 shadow-lg'>
            <div
                className='self-center h-6 w-full max-w-124px ml-4'
                ref={ref}
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            />
            <div className='self-center flex w-11/12 justify-end mr-4 text-xs text-gray-800'>
                Checkout
                <IconLockClosed className='text-sm ml-1 fill-current text-gray-800' />
            </div>
        </div>
    )
}

CheckoutHeader.propTypes = {
    logoStoryBook: PropTypes.object.isRequired,
}

export default CheckoutHeader
