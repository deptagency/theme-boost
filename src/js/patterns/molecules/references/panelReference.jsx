import React from 'react'
import PropTypes from 'prop-types'
import { nextPanel, filterSelectionSample, selection } from './references.module.scss'
import { ReactComponent as ArrowRightGray } from '../../../../icons/arrow-right-gray.svg'

const PanelReference = ({ onClick, title, selectedItems }) => {
    let selectionSample = ''
    if (selectedItems.length > 0) {
        selectionSample = (selectedItems[1] ? `${selectedItems[0].name}, ${selectedItems[1].name}` : selectedItems[0].name).substring(0, 30)
    }

    return (
        <div
            className={nextPanel}
            onClick={onClick}
            >
            {title}
            <div className={selection}>
                {selectedItems.length > 0 && <div className={filterSelectionSample}>{selectionSample}...</div>}
                <ArrowRightGray />
            </div>
        </div>
    )
}

PanelReference.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.any.isRequired,
    selectedItems: PropTypes.array.isRequired,
}

export default PanelReference
