import React from 'react'

import OrganismsGuide from 'js/patterns/organisms/guides/guide'
import OrganismsGuideBrand from 'js/patterns/organisms/guides/guide-brand'
import OrganismsGuideMaterial from 'js/patterns/organisms/guides/guide-material'
import OrganismsGuidePatterns from 'js/patterns/organisms/guides/guide-patterns'
import OrganismsGuideSorting from 'js/patterns/organisms/guides/guide-sorting'

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

export const guideMaterial = () => {
    return (
        <OrganismsGuideMaterial />
    )
}

guideMaterial.story = {
    name: 'Material',
}

export const guidePatterns = () => {
    return (
        <OrganismsGuidePatterns />
    )
}

guidePatterns.story = {
    name: 'Patterns',
}

export const guideSorting = () => {
    return (
        <OrganismsGuideSorting />
    )
}

guideSorting.story = {
    name: 'Sorting',
}
