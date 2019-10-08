import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsPromoboxWithPositioning from '../../patterns/molecules/promobox/promobox-with-positioning'
import MoleculesButton from "../../patterns/molecules/buttons/button";

class PromoBoxTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { verticalPosition, horizontalPosition } = this.props.data

        return <OrganismsPromoboxWithPositioning vertical={verticalPosition} horizontal={horizontalPosition}>
            <p className='c-topic'>Jetzt für den Sommer</p>
            <h1 className="c-title">Viele Angebote bei Levi´s </h1>
            <MoleculesButton type='primary'>
                Jetzt shoppen
            </MoleculesButton>
        </OrganismsPromoboxWithPositioning>
    }
}

PromoBoxTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

PromoBoxTastic.defaultProps = {}

export default PromoBoxTastic
