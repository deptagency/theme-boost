import React from 'react'

import MoleculesBadge from 'js/patterns/molecules/badges/badge'

export default {
    title: '3.Molecules|Badges',
}

export const allBadges = () => {
    return (
        <div>
            <p className='o-distance-m'>
                <MoleculesBadge>Neu</MoleculesBadge>
            </p>
            <p className='o-distance-m'>
                <MoleculesBadge type='quiet'>Neu</MoleculesBadge>
            </p>
            <p className='o-distance-m'>
                <MoleculesBadge type='spot'>Neu</MoleculesBadge>
            </p>
            <p className='o-distance-m'>
                <MoleculesBadge type='danger'>Sale</MoleculesBadge>
            </p>
        </div>
    )
}

allBadges.story = {
    name: 'All Badges',
}
