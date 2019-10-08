import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AtomsFormLabel from "../../patterns/atoms/forms/form-label";
import VerticalSwipe from "../../patterns/templates/vertical-swipe";
import OrganismsSizes from "../../patterns/organisms/sizes/sizes";

class SizeFilterTastic extends Component {
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

SizeFilterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

SizeFilterTastic.defaultProps = {}

export default SizeFilterTastic
