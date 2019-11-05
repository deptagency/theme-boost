import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AtomsFormLabel from '../../patterns/atoms/forms/form-label'
import Swiper from '../../patterns/templates/swiper'
import OrganismsSizes from '../../patterns/organisms/sizes/sizes'

class SizeFilterTastic extends Component {
    render () {
        return (
            <div className='filter-component display-grid'>
                <AtomsFormLabel className='filter-input-label text-align--center' value='Größe' />
                <Swiper sliderId='swipe-sizes'>
                    <OrganismsSizes />
                </Swiper>
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
