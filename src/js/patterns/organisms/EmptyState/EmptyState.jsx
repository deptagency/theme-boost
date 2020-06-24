import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const icons = {
    CHECKMARK_CIRCLE: IconCheckmarkCircle,
    EMOTION_SAD: IconEmotionSad,
}

function EmptyState({ icon, iconColor, image, title, subtitle, body, action, actionLabel, children }) {
    console.log('is react element', React.isValidElement(icon))
    return (
        <div className='my-10 md:mt-20 w-64 mx-auto text-center'>
            {icon}

            <div className='mt-4 text-center text-gray-800'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='mt-2 text-sm font-bold'>{subtitle}</p>
                <p className='mt-3 text-sm'>{children}</p>
                {action && actionLabel && (
                    <Button variant='btn-outline btn-outline-black mt-6' onClick={action}>
                        {actionLabel}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default EmptyState
