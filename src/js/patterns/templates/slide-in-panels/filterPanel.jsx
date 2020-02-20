import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BUTTON_STATE from '../../atoms/buttons/buttonState'
import PlainSelectionList from '../../molecules/lists/selectionList/plain'
import GroupedSelectionList from '../../molecules/lists/selectionList/grouped'
import FilterSubPanel from './filterSubPanel'
import PanelReference from '../../molecules/references/panelReference'
import InputWithLabelIcon from '../../molecules/forms/input-with-label-icon'
import { ReactComponent as SearchIcon } from '../../../../icons/search.svg'
import { grayColor } from './panels.module.scss'
import { FormattedMessage } from 'react-intl'

const FilterPanel = ({ title, items, selectedItems, toggleSelectedItems, groupItems = false, searchable = false, query, handleQueryChange, overlayClassName = '' }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [footerButtonState, setFooterButtonState] = useState(BUTTON_STATE.BACK)

    const ListType = groupItems ? GroupedSelectionList : PlainSelectionList

    return (
        <>
            <PanelReference
                onClick={() => {
                    setFooterButtonState(BUTTON_STATE.BACK)
                    setIsPanelOpen(true)
                }}
                title={title}
                selectedItems={selectedItems}
            />

            <FilterSubPanel
                title={title}
                isOpen={isPanelOpen}
                onClose={() => { setIsPanelOpen(false) }}
                footerButtonState={footerButtonState}
                onBackClick={() => { setIsPanelOpen(false) }}
                onSaveClick={() => { setIsPanelOpen(false) }}
                overlayClassName={overlayClassName}
                >

                {searchable && <>
                    <InputWithLabelIcon
                        id='brand'
                        icon={<SearchIcon className={grayColor} />}
                        label={<FormattedMessage id={'filters.search'} />}
                        value={query}
                        onChange={handleQueryChange}
                    />
                </>}
                <ListType
                    items={items}
                    selectedItems={selectedItems}
                    toggleSelection={(material) => {
                        toggleSelectedItems(material)
                        setFooterButtonState(BUTTON_STATE.SAVE)
                    }}
                />
            </FilterSubPanel>
        </>
    )
}

FilterPanel.propTypes = {
    title: PropTypes.any.isRequired,
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelectedItems: PropTypes.func.isRequired,
    groupItems: PropTypes.bool,
    searchable: PropTypes.bool,
    query: PropTypes.string,
    handleQueryChange: PropTypes.func,
    overlayClassName: PropTypes.string,
}

export default FilterPanel
