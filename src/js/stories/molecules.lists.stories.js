import React from 'react'

import MoleculesDetaillist from 'js/patterns/molecules/lists/detaillist'

export default {
    title: '2.Molecules|Lists',
}

export const detaillist = () => {
    return (
        <div>
            <MoleculesDetaillist />
        </div>
    )
}

detaillist.story = {
    name: 'Detaillist',
}
