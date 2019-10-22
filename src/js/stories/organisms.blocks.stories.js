import React from 'react'

import OrganismsNewsletterBlock from 'js/patterns/organisms/blocks/newsletter'
import OrganismsSummary from 'js/patterns/organisms/blocks/summary'
import OrganismsCreditCard from 'js/patterns/organisms/blocks/creditcard'
import OrganismsAddressblock from 'js/patterns/organisms/blocks/addressblock'
import OrganismsDeliveryFeatures from 'js/patterns/organisms/blocks/delivery-features'

export default {
    title: '3.Organisms|Blocks',
}

export const creditcard = () => {
    return (
        <OrganismsCreditCard />
    )
}

creditcard.story = {
    name: 'Creditcard',
}

export const media = () => {
    return (
        <div>
            <div className='o-media-block'>
                <div className='o-media-block__asset'>
                    <img src='https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' />
                </div>
                <div className='o-media-block__body'>
                    <p className='c-topic u-text-light'>Topic</p>
                    <h2 className='c-title'>Media Block</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cum quisquam excepturi nisi neque, ea fuga, odio expedita quis dicta vero? Animi molestias minus ad possimus deserunt laboriosam tempora sit!</p>
                </div>
            </div>
        </div>
    )
}

media.story = {
    name: 'Media',
}

export const newsletter = () => {
    return (
        <OrganismsNewsletterBlock />
    )
}

newsletter.story = {
    name: 'Newsletter',
}

export const summary = () => {
    return (
        <OrganismsSummary />
    )
}

summary.story = {
    name: 'Summary',
}

export const addressblock = () => {
    return (
        <OrganismsAddressblock />
    )
}

addressblock.story = {
    name: 'Addressblock',
}

export const deliveryBlock = () => {
    return (
        <OrganismsDeliveryFeatures />
    )
}

deliveryBlock.story = {
    name: 'Delivery Block',
}
