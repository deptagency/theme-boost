import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AtomsFormLabel from '../../patterns/atoms/forms/form-label'
import MobileSwipe from '../../patterns/templates/mobile-swipe'
import OrganismsSizes from '../../patterns/organisms/sizes/sizes'

class SizeFilterTastic extends Component {
    render () {
        return (
            <div className='filter-component display-grid'>
                <AtomsFormLabel className='filter-input-label text-align--center' value='Größe' />
                <MobileSwipe sliderId='swipe-sizes'>
                    <OrganismsSizes />
                </MobileSwipe>
            </div>
        )
    }
}

SizeFilterTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

SizeFilterTastic.defaultProps = {}

export default SizeFilterTastic
