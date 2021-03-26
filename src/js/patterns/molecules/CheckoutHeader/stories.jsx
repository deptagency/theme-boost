import React from 'react'
import { ReactComponent as IconLockClosed } from '../../../../icons/tailwind-icons/icon-lock-closed.svg'

export default {
    title: 'Checkout Header',
}

export const checkoutHeader = () => {
    return (
        <div className='flex h-12 shadow-md'>
            <div
                className='self-center h-6 w-full max-w-124px ml-4'
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dlwdq84ig/image/upload/c_fill,f_auto,g_faces:auto,h_24,q_auto,w_124/wdl9ur94jedxlaem3c52")`,
                }}
            />
            <div className='self-center flex w-11/12 justify-end mr-4 text-xs text-neutral-900'>
                Checkout
                <IconLockClosed className='text-sm ml-1 fill-current text-neutral-900' />
            </div>
        </div>
    )
}
