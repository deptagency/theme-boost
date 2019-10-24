import React from 'react'

import OrganismsFoot from 'js/patterns/organisms/base/foot'
import OrganismsHeader from 'js/patterns/organisms/base/header'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsHeaderContext from 'js/patterns/organisms/base/header-context'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

export default {
    title: '3.Organisms|Base',
}

export const footer = () => {
    return (
        <div>
            <OrganismsFoot />
        </div>
    )
}

footer.story = {
    name: 'Footer',
}

export const header = () => {
    return (
        <div>
            <OrganismsHeader />
        </div>
    )
}

header.story = {
    name: 'Header',
}

export const mobileHeader = () => {
    return (
        <div>
            <OrganismsHeaderMobile />
        </div>
    )
}

mobileHeader.story = {
    name: 'Mobile Header',
}

export const contextHeader = () => {
    return (
        <div>
            <OrganismsHeaderContext />
        </div>
    )
}

contextHeader.story = {
    name: 'Context Header',
}

export const slideInHeader = () => {
    return (
        <div>
            <OrganismsHeaderSlideIn title='Custom title' />
        </div>
    )
}

slideInHeader.story = {
    name: 'Slide In Header',
}
