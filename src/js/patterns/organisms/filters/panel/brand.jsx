import React from 'react'
import PropTypes from 'prop-types'
import FilterPanel from '../../../templates/slide-in-panels/filterPanel'
import { FormattedMessage } from 'react-intl'

const BrandPanel = ({ filteredBrands, selectedBrands, toggleSelectedBrands, query, handleQueryChange, overlayClassName = '' }) => {
    return (
        <FilterPanel
            title={<FormattedMessage id={'filters.brand'} />}
            items={filteredBrands}
            selectedItems={selectedBrands}
            toggleSelectedItems={toggleSelectedBrands}
            groupItems
            searchable
            query={query}
            handleQueryChange={handleQueryChange}
            overlayClassName={overlayClassName}
        />

    )
}

BrandPanel.propTypes = {
    query: PropTypes.string.isRequired,
    handleQueryChange: PropTypes.func.isRequired,

    filteredBrands: PropTypes.array.isRequired,
    selectedBrands: PropTypes.array.isRequired,
    toggleSelectedBrands: PropTypes.func.isRequired,
    overlayClassName: PropTypes.string,
}

export default BrandPanel
