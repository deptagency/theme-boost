import React from 'react'

import Badge from 'js/patterns/atoms/badges/badge'

export default {
    title: '2.Atoms|Badges',
}

export const allBadges = () => {
    return (
        <div>
            <p className='o-distance-m'>
                <Badge>Neu</Badge>
            </p>
            <p className='o-distance-m'>
                <Badge type='quiet'>Neu</Badge>
            </p>
            <p className='o-distance-m'>
                <Badge type='spot'>Neu</Badge>
            </p>
            <p className='o-distance-m'>
                <Badge type='danger'>Sale</Badge>
            </p>
        </div>
    )
}

allBadges.story = {
    name: 'All Badges',
}
