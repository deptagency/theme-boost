import React from 'react'

import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'
import { ReactComponent as IconEmotionHappy } from 'Icons/tailwind-icons/icon-emotion-happy.svg'

export const icons = {
    CHECKMARK_CIRCLE: 'checkmark_circle',
    EMOTION_SAD: 'emotion_sad',
    EMOTION_HAPPY: 'emotion_happy',
}

export function getIconComponent (src, color) {
    if (React.isValidElement(src)) {
        return src
    } else if (Object.prototype.toString.call(src) === '[object String]' && Object.values(icons).includes(src)) {
        const props = { className: `w-16 h-16 inline-block ${color || 'text-secondary-main'} fill-current` }
        switch (src) {
        case icons.CHECKMARK_CIRCLE:
            return <IconCheckmarkCircle {...props} />
        case icons.EMOTION_SAD:
            return <IconEmotionSad {...props} />
        case icons.EMOTION_HAPPY:
            return <IconEmotionHappy {...props} />
        default:
            return <IconCheckmarkCircle {...props} />
        }
    }
}
