import React from 'react'

import OrganismsGuide from 'js/patterns/organisms/guides/guide'
import OrganismsGuideBrand from 'js/patterns/organisms/guides/guide-brand'

export default {
    title: '3.Organisms|Guide',
}

export const defaultStory = () => {
    return (
        <OrganismsGuide />
    )
}

defaultStory.story = {
    name: 'Default',
}


export const guideBrand = () => {
    return (
        <OrganismsGuideBrand />
    )
}

guideBrand.story = {
    name: 'Brand',
}
