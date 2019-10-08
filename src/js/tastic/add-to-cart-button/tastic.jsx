import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoleculesButton from "../../patterns/molecules/buttons/button";

class AddToCartButtonTastic extends Component {
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

AddToCartButtonTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

AddToCartButtonTastic.defaultProps = {}

export default AddToCartButtonTastic
