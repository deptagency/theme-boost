import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoleculesButton from "../../../patterns/catwalk-frontend/molecules/buttons/button";

class CatwalkAddToCartButtonTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="margin-12">
                <MoleculesButton className='c-button--full-width o-distance-m display-grid' type='primary'>
                    In den Warenkorb
                </MoleculesButton>
            </div>
        )
    }
}

CatwalkAddToCartButtonTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkAddToCartButtonTastic.defaultProps = {}

export default CatwalkAddToCartButtonTastic
