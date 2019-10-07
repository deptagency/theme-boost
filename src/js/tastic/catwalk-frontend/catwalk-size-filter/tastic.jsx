import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AtomsFormLabel from "../../../patterns/catwalk-frontend/atoms/forms/form-label";
import VerticalSwipe from "../../../patterns/catwalk-frontend/templates/vertical-swipe";
import OrganismsSizes from "../../../patterns/catwalk-frontend/organisms/sizes/sizes";

class CatwalkSizeFilterTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='filter-component display-grid'>
                <AtomsFormLabel className='filter-input-label text-align--center' value='Größe' />
                <VerticalSwipe sliderId='swipe-sizes'>
                    <OrganismsSizes />
                </VerticalSwipe>
            </div>
        )
    }
}

CatwalkSizeFilterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkSizeFilterTastic.defaultProps = {}

export default CatwalkSizeFilterTastic
