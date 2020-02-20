import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import FilterPanel from '../../../templates/slide-in-panels/filterPanel'

const MaterialPanel = ({ materials, selectedMaterials, toggleSelectedMaterial, overlayClassName = '' }) => {
    return (
        <FilterPanel
            title={<FormattedMessage id={'filters.material'} />}
            items={materials}
            selectedItems={selectedMaterials}
            toggleSelectedItems={toggleSelectedMaterial}
            overlayClassName={overlayClassName}
        />
    )
}

MaterialPanel.propTypes = {
    materials: PropTypes.array.isRequired,
    selectedMaterials: PropTypes.array.isRequired,
    toggleSelectedMaterial: PropTypes.func.isRequired,
    overlayClassName: PropTypes.string,
}

export default MaterialPanel
