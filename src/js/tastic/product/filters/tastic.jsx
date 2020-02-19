import React from 'react'
import PropTypes from 'prop-types'
import Filters from '../../../patterns/organisms/filters/filters'

const FiltersTastic = () => {
    return (
        <Filters />
    )
}

/* eslint-disable react/no-unused-prop-types */
FiltersTastic.propTypes = {
    rawData: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

FiltersTastic.defaultProps = {
}

export default FiltersTastic
