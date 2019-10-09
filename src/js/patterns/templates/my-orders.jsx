import React from 'react'
import MoleculesBadge from '../molecules/badges/badge'
import purpleArrowLeft from '../../../../icons/purple-arrow-left.svg'
import purpleArrowRight from '../../../../icons/purple-arrow-right.svg'
import MoleculesButton from '../molecules/buttons/button'
import MoleculesArrowPanelBack from '../molecules/buttons/arrow-panel-back'

const TemplatesMyOrders = props => {
    const orderImageUrl = 'https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg'

    return (
        <div className='organism-my-orders'>

            <div className='mo-header'>
                <img src={purpleArrowLeft} alt='back' />
                Meine Bestellungen
                <div />
            </div>

            <div className='mo-paid'>
                <div className='mo-paid-title'>
                    Letzte Bestellung
                </div>

                <div className='mo-paid-info'>
                    <div className='mo-paid-detail'>
                        <span itemProp='price' className='c-price'>23,95 €</span>
                        <span className='mo-date'>12. Mai 2019</span>
                    </div>

                    <div className='mo-badge'>
                        <MoleculesBadge type='quiet' color='green'>
                            Bezahlt
                        </MoleculesBadge>
                    </div>
                </div>

                <div className='mo-tiles'>
                    <div className='mo-tile' style={{ backgroundImage: `url(${orderImageUrl})` }} />
                    <div className='mo-tile' style={{ backgroundImage: `url(${orderImageUrl})` }} />
                    <div className='mo-tile mo-tile-count'>+6</div>

                    <div className='mo-tile mo-tiles-summary'>
                        <span>8. Artikel</span>
                        <span>P22KI23IACV</span>
                    </div>
                </div>

                <MoleculesButton className='mo-button-view-order' type='primary'>
                    Bestellung ansehen
                </MoleculesButton>

            </div>

            <div className='mo-canceled'>
                <div className='mo-paid-title'>
                    April 2019
                </div>

                <div className='mo-paid-info'>
                    <div className='mo-paid-detail'>
                        <span itemProp='price' className='c-price'>59,95 €</span>
                        <span className='mo-date'>12. Mai 2019</span>
                    </div>

                    <div className='mo-badge'>
                        <MoleculesBadge type='quiet' color='red'>
                            Storniert
                        </MoleculesBadge>
                    </div>

                    <div className='mo-canceled-info'>
                        <span>8. Artikel</span>
                        <span>P22KI23IACV</span>
                    </div>
                </div>

                <div className='mo-button-view-order-secondary'>
                    Bestellung ansehen
                    <img src={purpleArrowRight} alt='back' />
                </div>
            </div>

            <div className='mo-consignor'>
                <div className='mo-paid-info'>
                    <div className='mo-paid-detail'>
                        <span itemProp='price' className='c-price'>59,95 €</span>
                        <span className='mo-date'>12. Mai 2019</span>
                    </div>

                    <div className='mo-badge'>
                        <MoleculesBadge type='quiet' color='yellow'>
                            Versendet
                        </MoleculesBadge>
                    </div>

                    <div className='mo-canceled-info'>
                        <span>8. Artikel</span>
                        <span>P22KI23IACV</span>
                    </div>
                </div>

                <div className='mo-button-view-order-secondary'>
                    Bestellung ansehen
                    <img src={purpleArrowRight} alt='back' />
                </div>
            </div>

            <MoleculesArrowPanelBack title='Zurück zu meinem Konto' />
        </div>
    )
}

TemplatesMyOrders.propTypes = {

}

export default TemplatesMyOrders
