import React from 'react'

import List from '.'

export default {
    title: 'List',
}

export const simple = () => {
    const links = [{ item: 'Cookies' }, { item: 'Privacy policy' }, { item: 'T&C' }]

    return (
        <div>
            <List links={links} variant='flex flex-col' itemVariant='mb-2 text-sm leading-tight text-black' />
        </div>
    )
}

export const reference = () => {
    const linkRef = {
        nodeId: '92834989893841',
        type: 'link',
        target: 'http://english-demo.frontastic.io.local/',
    }

    const links = [
        { item: 'Cookies', reference: linkRef },
        { item: 'Privacy policy', reference: linkRef },
        { item: 'T&C', reference: linkRef },
    ]

    return (
        <div>
            <List links={links} variant='flex flex-col' itemVariant='mb-2 text-sm leading-tight text-black' />
        </div>
    )
}
