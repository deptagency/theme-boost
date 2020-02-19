import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import DropdownMultiSelectPlainList from '../../../molecules/dropdowns/multiSelectPlainList'

const NewArrivalsDropdown = ({ newArrivals, selectedNewArrivals, toggleSelectedNewArrivals, resetNewArrivalsSelection, menuStyle = {} }) => {
    return (
        <DropdownMultiSelectPlainList
            title={<FormattedMessage id={'filters.newArrivals'} />}
            items={newArrivals}
            selectedItems={selectedNewArrivals}
            toggleSelectedItems={toggleSelectedNewArrivals}
            resetSelection={resetNewArrivalsSelection}
            menuStyle={menuStyle}
        />
    )
}

NewArrivalsDropdown.propTypes = {
    newArrivals: PropTypes.array.isRequired,
    selectedNewArrivals: PropTypes.array.isRequired,
    toggleSelectedNewArrivals: PropTypes.func.isRequired,
    resetNewArrivalsSelection: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default NewArrivalsDropdown
