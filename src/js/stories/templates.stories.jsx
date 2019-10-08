import React, { useState, createPortal } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Grid from '../patterns/catwalk-frontend/atoms/grid/grid'
import Cell from '../patterns/catwalk-frontend/atoms/grid/cell'
import TemplatesHome from '../patterns/catwalk-frontend/templates/home'
import VerticalSwipe from '../patterns/catwalk-frontend/templates/vertical-swipe'
import Pagination from '../patterns/catwalk-frontend/molecules/paginations/pagination'
import MoleculesProduct from '../patterns/catwalk-frontend/molecules/products/product'
import MoleculesHeading from '../patterns/catwalk-frontend/molecules/headings/heading'

import TemplatesFullCart from '../patterns/catwalk-frontend/templates/cart/full-cart'
import TemplatesEmptyCart from '../patterns/catwalk-frontend/templates/cart/empty-cart'
import MoleculesCart from '../patterns/catwalk-frontend/molecules/carts/cart'
import TemplatesSlideIn from '../patterns/catwalk-frontend/templates/slide-in'
import TemplatesSlideUp from '../patterns/catwalk-frontend/templates/slide-up'
import TemplatesFilter from '../patterns/catwalk-frontend/templates/filter'
import TemplatesHelp from '../patterns/catwalk-frontend/templates/help'
import OrganismsHeaderSlideIn from '../patterns/catwalk-frontend/organisms/base/header-slide-in'
import OrganismsDeliveryFeatures from '../patterns/catwalk-frontend/organisms/deliveryFeatures/delivery-features.jsx'
import OrganismsMoreInfoProduct from '../patterns/catwalk-frontend/organisms/moreInfoProduct/more-info'
import TemplatesMyOrders from '../patterns/catwalk-frontend/templates/my-orders'
import TemplatesMyOrderDetails from '../patterns/catwalk-frontend/templates/my-order-details'
import TemplatesProductReturn from '../patterns/catwalk-frontend/templates/product-return'
import TemplatesOrderSuccess from '../patterns/catwalk-frontend/templates/order-success'

storiesOf('4.Templates|All', module)
    .addDecorator(withKnobs)
    .add('Home', () => {
        return (
            <TemplatesHome />
        )
    })
    .add('Bestseller Swipe Vertical', () => {
        return (
            <div>
                <MoleculesHeading />
                <VerticalSwipe sliderId='swipe-content'>

                    <div style={{ display: 'grid', gridGap: '8px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                        <MoleculesProduct width='150px' />
                        <MoleculesProduct width='150px' />
                        <MoleculesProduct width='150px' />
                        <MoleculesProduct width='150px' />
                    </div>
                </VerticalSwipe>
            </div>
        )
    })
    .add('Leerer Warenkorb', () => {
        return (
            <TemplatesEmptyCart />
        )
    })
    .add('Mein Warenkorb', () => {
        return (
            <div>
                <TemplatesFullCart />
            </div>
        )
    })
    .add('Interactive Cart', () => {
        const emptyCart = boolean('Empty cart', true)

        if (emptyCart) { return <TemplatesEmptyCart /> } else { return <TemplatesFullCart /> }
    })
    .add('Cart Slide In', () => {
        const [isOpen, setIsOpen] = useState(false)
        const emptyCart = boolean('Empty cart', false)

        return [
            <div key='cart-icon' onClick={() => { setIsOpen(true) }} ><MoleculesCart /></div>,
            <TemplatesSlideIn
                key='slide-in-content'
                isOpen={isOpen}
                header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
                >
                {emptyCart ? <TemplatesEmptyCart setIsOpen={setIsOpen} /> : <TemplatesFullCart setIsOpen={setIsOpen} />}
            </TemplatesSlideIn>,
        ]
    })
    .add('Cart Slide Up', () => {
        const [isOpen, setIsOpen] = useState(false)
        const emptyCart = boolean('Empty cart', false)

        return [
            <div key='cart-icon' onClick={() => { setIsOpen(true) }} ><MoleculesCart /></div>,
            <TemplatesSlideUp
                key='slide-in-content'
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                header={<OrganismsHeaderSlideIn setIsOpen={setIsOpen} title='Main Warenkorb' />}
                >
                {emptyCart ? <TemplatesEmptyCart setIsOpen={setIsOpen} /> : <TemplatesFullCart setIsOpen={setIsOpen} />}
            </TemplatesSlideUp>,
        ]
    })
    .add('Filter', () => {
        return (
            <div className='fit-view'>
                <TemplatesFilter />
            </div>
        )
    })
    .add('Help', () => {
        return (
            <TemplatesHelp />
        )
    })
    .add('Delivery featrues', () => {
        return (
            <OrganismsDeliveryFeatures />
        )
    })
    .add('More info product', () => {
        return (
            <OrganismsMoreInfoProduct />
        )
    })
    .add('My Orders', () => {
        return (
            <div className='fit-view'>
                <TemplatesMyOrders />
            </div>
        )
    })
    .add('My Orders - Details', () => {
        return (
            <div className='fit-view'>
                <TemplatesMyOrderDetails products={[{}, {}]} />
            </div>
        )
    })
    .add('Product return - view', () => {
        return (
            <div className='fit-view'>
                <TemplatesProductReturn />
            </div>
        )
    })
    .add('Order Success', () => {
        return (
            <TemplatesOrderSuccess />
        )
    })
