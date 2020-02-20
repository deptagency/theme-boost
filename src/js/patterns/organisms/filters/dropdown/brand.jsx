import React from 'react'
import PropTypes from 'prop-types'
import DropdownGroupedList from '../../../molecules/dropdowns/groupedList'
import { FormattedMessage } from 'react-intl'

const BrandDropdown = ({ searchable, query, handleQueryChange, filteredBrands, selectedBrands, toggleSelectBrand, resetBrandSelection, menuStyle = {} }) => {
    return (
        <DropdownGroupedList
            title={<FormattedMessage id={'filters.brand'} />}
            searchable={searchable}
            query={query}
            handleQueryChange={handleQueryChange}

            items={filteredBrands}
            selectedItems={selectedBrands}
            toggleSelectedItems={toggleSelectBrand}
            resetSelection={resetBrandSelection}

            menuStyle={menuStyle}
        />
    )
}

BrandDropdown.propTypes = {
    searchable: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    handleQueryChange: PropTypes.func.isRequired,

    filteredBrands: PropTypes.array.isRequired,
    selectedBrands: PropTypes.array.isRequired,
    toggleSelectBrand: PropTypes.func.isRequired,
    resetBrandSelection: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,

}

export default BrandDropdown
