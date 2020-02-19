import React from 'react'
import PropTypes from 'prop-types'
import FilterPanel from '../../../templates/slide-in-panels/filterPanel'
import { FormattedMessage } from 'react-intl'

const PatternPanel = ({ patterns, selectedPatterns, toggleSelectedPatterns, overlayClassName = '' }) => {
    return (
        <FilterPanel
            title={<FormattedMessage id={'filters.pattern'} />}
            items={patterns}
            selectedItems={selectedPatterns}
            toggleSelectedItems={toggleSelectedPatterns}
            overlayClassName={overlayClassName}
        />
    )
}

PatternPanel.propTypes = {
    patterns: PropTypes.array.isRequired,
    selectedPatterns: PropTypes.array.isRequired,
    toggleSelectedPatterns: PropTypes.func.isRequired,
    overlayClassName: PropTypes.string,
}

export default PatternPanel
