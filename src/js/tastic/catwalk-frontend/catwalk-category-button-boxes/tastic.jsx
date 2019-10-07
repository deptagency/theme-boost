import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VerticalSwipe from "../../../patterns/catwalk-frontend/templates/vertical-swipe";
import OrganismsPromoboxWithPositioning from "../../../patterns/catwalk-frontend/molecules/promobox/promobox-with-positioning";
import MoleculesButton from "../../../patterns/catwalk-frontend/molecules/buttons/button";

class CatwalkCategoryButtonBoxesTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // TODO "o-grid  o-region" here?
            <div className="o-grid  o-region">
                <VerticalSwipe sliderId='swipe-category-boxes'>
                    <div className='catwalk-category-button-boxes-tastic'>
                        <OrganismsPromoboxWithPositioning key='1' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                MÄNNER
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                        <OrganismsPromoboxWithPositioning  key='2' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                FRAUEN
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                        <OrganismsPromoboxWithPositioning  key='3' width='306px' height='204px' vertical='middle' horizontal='center'>
                            <MoleculesButton type='primary'>
                                KINDER
                            </MoleculesButton>
                        </OrganismsPromoboxWithPositioning>
                    </div>
                </VerticalSwipe>
            </div>
        )
    }
}

CatwalkCategoryButtonBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkCategoryButtonBoxesTastic.defaultProps = {}

export default CatwalkCategoryButtonBoxesTastic
