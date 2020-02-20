import React from 'react'
import PropTypes from 'prop-types'
import FilterPanel from '../../../templates/slide-in-panels/filterPanel'
import { FormattedMessage } from 'react-intl'

const NewArrivalsPanel = ({ newArrivals, selectedNewArrivals, toggleSelectedNewArrivals, overlayClassName = '' }) => {
    return (
        <FilterPanel
            title={<FormattedMessage id={'filters.newArrivals'} />}
            items={newArrivals}
            selectedItems={selectedNewArrivals}
            toggleSelectedItems={toggleSelectedNewArrivals}
            overlayClassName={overlayClassName}
        />
    )
}

NewArrivalsPanel.propTypes = {
    newArrivals: PropTypes.array.isRequired,
    selectedNewArrivals: PropTypes.array.isRequired,
    toggleSelectedNewArrivals: PropTypes.func.isRequired,
    overlayClassName: PropTypes.string,
}

export default NewArrivalsPanel
