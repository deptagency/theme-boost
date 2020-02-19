import React from 'react'
import PropTypes from 'prop-types'
import DropdownMultiSelectPlainList from '../../../molecules/dropdowns/multiSelectPlainList'
import { FormattedMessage } from 'react-intl'
import { dropdownScrollbars } from '../filters.module.scss'
import { Scrollbars } from 'react-custom-scrollbars'

const PatternDropdown = ({ patterns, selectedPatterns, toggleSelectedPatterns, resetPatternSelection, menuStyle = {} }) => {
    return (
        <DropdownMultiSelectPlainList
            title={<FormattedMessage id={'filters.pattern'} />}
            items={patterns}
            selectedItems={selectedPatterns}
            toggleSelectedItems={toggleSelectedPatterns}
            resetSelection={resetPatternSelection}
            menuStyle={{
                ...menuStyle,
                height: '376',
            }}

            component={Scrollbars}
            componentClassNames={`dropdownScrollbars ${dropdownScrollbars}`}
        />
    )
}

PatternDropdown.propTypes = {
    patterns: PropTypes.array.isRequired,
    selectedPatterns: PropTypes.array.isRequired,
    toggleSelectedPatterns: PropTypes.func.isRequired,
    resetPatternSelection: PropTypes.func.isRequired,
    menuStyle: PropTypes.object,
}

export default PatternDropdown
