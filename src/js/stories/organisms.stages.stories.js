import React from 'react'

import OrganismsStage from 'js/patterns/organisms/stages/stage'
import OrganismsProductStage from 'js/patterns/organisms/stages/stage-product'

export default {
    title: '3.Organisms|Stages',
}

export const defaultStage = () => {
    return (
        <OrganismsStage />
    )
}

defaultStage.story = {
    name: 'Default Stage',
}

export const productStage = () => {
    return (
        <OrganismsProductStage />
    )
}

productStage.story = {
    name: 'Product Stage',
}
