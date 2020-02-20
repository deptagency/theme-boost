import React from 'react'
import PropTypes from 'prop-types'
import DropdownMultiSelectPlainList from '../../../molecules/dropdowns/multiSelectPlainList'
import { FormattedMessage } from 'react-intl'

const MaterialDropdown = ({ materials, selectedMaterials, toggleSelectedMaterial, resetMaterialSelection, menuStyle = {} }) => {
    return (
        <DropdownMultiSelectPlainList
            title={<FormattedMessage id={'filters.material'} />}
            items={materials}
            selectedItems={selectedMaterials}
            toggleSelectedItems={toggleSelectedMaterial}
            resetSelection={resetMaterialSelection}
            menuStyle={{
                ...menuStyle,
                height: '312px',
            }}
        />
    )
}

MaterialDropdown.propTypes = {
    materials: PropTypes.array.isRequired,
    selectedMaterials: PropTypes.array.isRequired,
    toggleSelectedMaterial: PropTypes.func.isRequired,
    resetMaterialSelection: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default MaterialDropdown
