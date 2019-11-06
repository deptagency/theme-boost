import React, { Component } from 'react'

import MobileSwipe from '../../patterns/templates/mobile-swipe'
import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import MoleculesButton from '../../patterns/molecules/buttons/button'

class CategoryButtonBoxesTastic extends Component {
    render () {
        return (
            // TODO "o-grid  o-region" here?
            <div className='o-grid  o-region'>
                <MobileSwipe sliderId='swipe-category-boxes'>
                    <div className='catwalk-category-button-boxes-tastic'>
                        <OrganismsPromoboxWithPositioning key='1' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                MÄNNER
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                        <OrganismsPromoboxWithPositioning key='2' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                FRAUEN
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                        <OrganismsPromoboxWithPositioning key='3' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                KINDER
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                    </div>
                </MobileSwipe>
            </div>
        )
    }
}

CategoryButtonBoxesTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryButtonBoxesTastic.defaultProps = {}

export default CategoryButtonBoxesTastic
