import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterItem, filterItemSelected, tickSelected } from './selectionList.module.scss'
import { ReactComponent as TickSelected } from '../../../../../icons/tick-selected.svg'

const PlainSelectionList = ({ items, selectedItems, toggleSelection }) => {
    return (
        <>
            {Object.values(items).map((entry) => {
                const isSelected = selectedItems.some((v) => { return v.id === entry.id })
                return (
                    <div
                        key={entry.id}
                        className={classnames({
                            [filterItem]: true,
                            [filterItemSelected]: isSelected,
                        })}
                        onClick={() => { toggleSelection(entry) }}
                        >
                        {entry.name}
                        {isSelected && <TickSelected className={tickSelected} />}
                    </div>
                )
            })}
        </>
    )
}

PlainSelectionList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelection: PropTypes.func.isRequired,
}

export default PlainSelectionList
