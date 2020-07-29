import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import MarginBreakout from 'Molecules/Layout/MarginBreakout'
import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import { ReactComponent as IconLockClosed } from 'Icons/tailwind-icons/icon-lock-closed.svg'

const CheckoutHeader = ({ logo }) => {
    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, logo)

    return (
        <MarginBreakout variant='flex h-12 shadow-md'>
            <div
                className='self-center h-6 w-full max-w-124px ml-4'
                ref={ref}
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className='self-center flex w-11/12 justify-end mr-4 text-xs text-neutral-900'>
                <FormattedMessage id='cart.checkout' />
                <IconLockClosed className='text-sm ml-1 fill-current text-neutral-900' />
            </div>
        </MarginBreakout>
    )
}

CheckoutHeader.propTypes = {
    logo: PropTypes.object,
}

export default CheckoutHeader
