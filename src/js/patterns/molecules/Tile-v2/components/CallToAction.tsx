import React from 'react'
import Reference from '@frontastic/catwalk/src/js/component/reference'

import { CtaColor } from '../'

interface Props {
    label: string
    reference: any
    color: CtaColor
    isButton: boolean
}

export default function Cta({ label, reference, color, isButton = false }: Props) {
    return (
        <>
            {label && reference && (
                <Reference
                    reference={reference}
                    className={`text-white ${
                        isButton ? 'bg' : 'text'
                    }-${color}-600 text-base font-semibold py-3 px-4 mt-6 rounded`}
                >
                    {label}
                </Reference>
            )}
        </>
    )
}
