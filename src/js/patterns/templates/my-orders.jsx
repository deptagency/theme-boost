import React from 'react'
import OrganismsOrderDetail from '../organisms/blocks/order-detail'
import MoleculesButton from '../molecules/buttons/button'
import MoleculesArrowPanelBack from '../molecules/buttons/arrow-panel-back'
import MoleculesBadge from 'js/patterns/molecules/badges/badge'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'

const TemplatesMyOrders = props => {
    const orderImageUrl = 'https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg'

    return (
        <div className='o-television'>
            <OrganismsHeaderMobile className='o-television__bar' />
            <div className='o-television__display'>
                <OrganismsPageHeader title='Bestellungen' />

                <article className='o-distance'>
                    <p className='c-title-level-4'>Letzte Bestellung</p>
                    <div className="o-order-detail o-distance-m">
                    <div className="o-order-detail__header">
                        <div>
                            <p itemProp='price' className='c-price'>59,95 €</p>
                            <p className='u-text-s t-text-quiet'>12. Mai 2019</p>
                        </div>
                        <MoleculesBadge type='quiet' color='red'>
                            Storniert
                        </MoleculesBadge>
                    </div>
                    <div className="o-order-detail__body">
                        <p className='u-text-s t-text-quiet'>8. Artikel</p>
                        <p className='u-text-s t-text-quiet'>P22KI23IACV</p>
                        <div className='c-box t-quietlight u-text-center'>
                          +6
                        </div>
                    </div>
                    <div className="o-order-detail__footer u-text-center">
                        <MoleculesButton type="primary">Bestellung ansehen</MoleculesButton>
                    </div>
                  </div>
                </article>
                <div className="o-television__display__boundless">
                    <span className="c-divider c-divider--break o-distance-l"></span>
                </div>

                <article className='o-distance'>
                    <p className='c-title-level-4'>April 2019</p>
                    <div className='o-distance-m'>
                        <div className="o-list-bare">
                          <div className="o-list-bare__item">
                              <OrganismsOrderDetail />
                          </div>
                          <span className='c-divider o-list-bare__item' />
                          <div className="o-list-bare__item">
                              <OrganismsOrderDetail />
                          </div>
                          <span className='c-divider o-list-bare__item' />
                          <div className="o-list-bare__item">
                              <OrganismsOrderDetail />
                          </div>
                          <span className='c-divider o-list-bare__item' />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

TemplatesMyOrders.propTypes = {

}

export default TemplatesMyOrders
