import React from 'react'
import { FormattedMessage } from 'react-intl'

import OrganismsOrderDetail from '../../organisms/blocks/order-detail'
import Button from '../../atoms/buttons/button'
import Badge from '../../atoms/badges/badge'
import OrganismsPageHeader from '../../organisms/base/header-page'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import ReferalBordered from '../../atoms/links/referal-bordered'

const TemplatesMyOrders = props => {
    return (
        <div className='o-television'>
            <OrganismsHeaderMobile />
            <div className='o-television__display'>
                <div className='o-container-medium'>
                    <OrganismsPageHeader title='Bestellungen' />

                    <article className='o-distance'>
                        <p className='c-title-level-4'>
                            <FormattedMessage id='order.lastOrder' />
                        </p>
                        <div className='o-order-detail o-distance-m'>
                            <div className='o-order-detail__header'>
                                <div>
                                    <p itemProp='price' className='c-price'> 59,95 € </p>
                                    <p className='u-text-s t-text-quiet'>12. Mai 2019</p>
                                </div>
                                <Badge type='quiet' color='red'>
                                    <FormattedMessage id='account.cancel' />
                                </Badge>
                            </div>
                            <div className='o-order-detail__body o-box-center'>
                                <div className='o-stacked o-order-detail__body__item'>
                                    <div className='o-stacked__item'>
                                        <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='' className='c-avatar o-stacked__item t-ghost-border' />
                                    </div>
                                    <div className='o-stacked__item'>
                                        <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='' className='c-avatar o-stacked__item t-ghost-border' />
                                    </div>
                                    <div className='c-avatar c-avatar--counter t-quietlight t-ghost-border u-text-center o-stacked__item'>
                                        <span className='c-avatar__holder'>+6</span>
                                    </div>
                                </div>
                                <div className='o-order-detail__body__item'>
                                    <p className='u-text-s t-text-quiet'>8. Artikel</p>
                                    <p className='u-text-s t-text-quiet'>P22KI23IACV</p>
                                </div>
                            </div>
                            <div className='o-order-detail__footer u-text-center'>
                                <Button type='primary'>
                                    <FormattedMessage id='order.viewOrder' />
                                </Button>
                            </div>
                        </div>
                    </article>
                    <div className='o-television__display__boundless'>
                        <span className='c-divider c-divider--break o-distance-l' />
                    </div>

                    <article className='o-distance'>
                        <p className='c-title-level-4'>April 2019</p>
                        <div className='o-distance-m'>
                            <div className='o-list-bare'>
                                <div className='o-list-bare__item'>
                                    <OrganismsOrderDetail />
                                </div>
                                <span className='c-divider o-list-bare__item' />
                                <div className='o-list-bare__item'>
                                    <OrganismsOrderDetail />
                                </div>
                                <span className='c-divider o-list-bare__item' />
                                <div className='o-list-bare__item'>
                                    <OrganismsOrderDetail />
                                </div>
                            </div>
                        </div>
                    </article>

                    <section className='o-distance'>
                        <nav role='navigation'>
                            <ReferalBordered title={<FormattedMessage id='account.orders' />} />
                            <ReferalBordered title={<FormattedMessage id='account.returns' />} />
                            <ReferalBordered title={<FormattedMessage id='account.userInfo' />} />
                            <ReferalBordered title={<FormattedMessage id='account.addresses' />} />
                        </nav>
                    </section>
                </div>
            </div>
        </div>
    )
}

TemplatesMyOrders.propTypes = {

}

export default TemplatesMyOrders
