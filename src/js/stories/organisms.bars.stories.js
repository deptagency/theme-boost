import React from 'react'

import OrganismsFilterBar from 'js/patterns/organisms/bars/filter-bar'
import OrganismsButtonBar from 'js/patterns/organisms/bars/button-bar'

export default {
    title: '3.Organisms|Bars',
}

export const filter = () => {
    return (
        <OrganismsFilterBar />
    )
}

filter.story = {
    name: 'Filter',
}

export const buttonbar = () => {
    return (
        <div>
            <h3>Buttonbar</h3>
            <OrganismsButtonBar />
        </div>
    )
}

buttonbar.story = {
    name: 'Buttonbar',
}
