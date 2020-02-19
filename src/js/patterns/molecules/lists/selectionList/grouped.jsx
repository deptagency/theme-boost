import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterItem, filterItemSelected, tickSelected } from './selectionList.module.scss'
import { ReactComponent as TickSelected } from '../../../../../icons/tick-selected.svg'

const GroupedSelectionList = ({ items, selectedItems, toggleSelection, onChange }) => {
    // TODO Sanja - duplicate code
    const sortedItems = items.sort((a, b) => { return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 })

    let groupedItems = sortedItems.reduce((r, e) => {
        let group = e.name[0].toUpperCase()
        const entryItem = {
            ...e,
            isSelected: selectedItems.some(i => { return i.id === e.id }),
        }

        if (!r[group]) { r[group] = { group, list: [entryItem] } } else { r[group].list.push(entryItem) }
        return r
    }, {})

    return (
        <>
            {Object.values(groupedItems).map(({ group, list }, i) => {
                return (
                    <Fragment key={i}>
                        <div className={classnames('u-text-strong', 'o-distance-s')}>
                            {group}
                        </div>
                        {list.map((b) => {
                            return (
                                <div
                                    key={b.id}
                                    className={classnames({
                                        [filterItem]: true,
                                        [filterItemSelected]: b.isSelected,
                                    })}
                                    onClick={() => {
                                        toggleSelection(b)
                                        if (onChange) { onChange() }
                                    }}
                                >
                                    {b.name}
                                    {b.isSelected && <TickSelected className={tickSelected} />}
                                </div>
                            )
                        })}
                    </Fragment>
                )
            })}
        </>
    )
}

GroupedSelectionList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelection: PropTypes.func.isRequired,
    onChange: PropTypes.func,
}

export default GroupedSelectionList
