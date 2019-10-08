import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MoleculesArrowPanelBack from '../molecules/buttons/arrow-panel-back'
import MoleculesButton from '../molecules/buttons/button'
import OrganismsHeaderSlideIn from '../organisms/base/header-slide-in'
import OrganismsSummary from '../organisms/blocks/summary'
import MoleculesProductRow from '../molecules/products/product-row'

const TemplatesMyOrderDetails = ({ products }) => {
    return (
        <div className='organism-my-orders organism-my-orders--details'>

            <OrganismsHeaderSlideIn setIsOpen={() => {}} title='P22KI23IACV' />

            <div className='mo-paid mod-margin'>
                <div className='mo-paid-title'>
                    Versendet an
                </div>

                <div className='mo-sent-to'>
                    <div className='mo-sent-name'>
                        Tim Hartmann
                    </div>
                    <div className='mo-sent-address'>
                        Ewaldstr. 2
                        59174 Kamen
                        Deutschland</div>
                </div>

                <div className='mo-payment-type'>
                    <div className='margin-bottom--8'>Zahlungsmittel: <span className='font--bold-black'>Rechnung</span></div>
                    <div>Rechnungsadresse entspricht Lieferanschrift</div>
                </div>

            </div>

            <div className='c-divider c-divider--break' />

            <div className='mo-product-list mod-margin'>
                {products.map((p, i) => {
                    return (
                        <Fragment>
                            <MoleculesProductRow
                                showWishListIcon={false}
                                showCloseIcon={false}
                                showProductCount
                                {...p}
                            />
                            {(i + 1 < products.length) && <div className='c-divider' />}
                        </Fragment>
                    )
                })}

            </div>

            <div className='c-divider c-divider--break' />

            <OrganismsSummary className='mod-margin padding-top--10' />

            <div className='padding--10'>
                <MoleculesButton className='width--100 height--52px' type='quiet'>
                    Artikel zurückschicken
                </MoleculesButton>
            </div>

            <MoleculesArrowPanelBack title='Zurück zu meinem Konto' />
        </div>
    )
}

TemplatesMyOrderDetails.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyOrderDetails
