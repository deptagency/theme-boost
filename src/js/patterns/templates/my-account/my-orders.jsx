import React from 'react'
import OrganismsOrderDetail from 'js/patterns/organisms/blocks/order-detail'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import MoleculesArrowPanelBack from 'js/patterns/molecules/buttons/arrow-panel-back'
import MoleculesBadge from 'js/patterns/molecules/badges/badge'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFooter from 'js/patterns/organisms/base/foot'
import MoleculesReferalBordered from 'js/patterns/molecules/links/referal-bordered'

const TemplatesMyOrders = props => {
    const orderImageUrl = 'https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg'

    return (
        <div className='o-television'>
            <OrganismsHeaderMobile className='o-television__bar' />
            <div className='o-television__display'>
                <OrganismsPageHeader title='Bestellungen' />

                <article className='o-distance'>
                    <p className='c-title-level-4'>Letzte Bestellung</p>
                    <div className='o-order-detail o-distance-m'>
                        <div className='o-order-detail__header'>
                            <div>
                                <p itemProp='price' className='c-price'>59,95 €</p>
                                <p className='u-text-s t-text-quiet'>12. Mai 2019</p>
                            </div>
                            <MoleculesBadge type='quiet' color='red'>
                            Storniert
                            </MoleculesBadge>
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
                            <MoleculesButton type='primary'>Bestellung ansehen</MoleculesButton>
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
                        <MoleculesReferalBordered title='Bestellungen' />
                        <MoleculesReferalBordered title='Rücksendungen' />
                        <MoleculesReferalBordered title='Benutzerdaten' />
                        <MoleculesReferalBordered title='Adressen' />
                    </nav>
                </section>
                <OrganismsFooter />
            </div>
        </div>
    )
}

TemplatesMyOrders.propTypes = {

}

export default TemplatesMyOrders
