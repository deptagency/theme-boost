import React from 'react'

import Checkbox from 'Atoms/checkbox'

export default {
    title: 'Form',
}

export const checkbox = () => {
    return (
        <>
            <div className='p-2'>
                <Checkbox
                    className='border border-neutral-400 rounded'
                    label={'Join our mailing list for early access to new products, new arrivals, trends and promotions via mail.'}
                    onClick={(i) => {}}
                />
            </div>

            <div className='p-2'>
                <Checkbox
                    className=''
                    label={'Use different billing details'}
                    onClick={(i) => {}}
                />
            </div>
        </>
    )
}
