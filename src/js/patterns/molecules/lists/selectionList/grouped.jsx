import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import groupByName from '../../../../helpers/groupByName'

import { filterItem, filterItemSelected, tickSelected } from './selectionList.module.scss'
import { ReactComponent as TickSelected } from '../../../../../icons/tick-selected.svg'

const GroupedSelectionList = ({ items, selectedItems, toggleSelection, onChange }) => {
    return (
        <>
            {Object.values(groupByName(items, selectedItems)).map(({ group, list }, i) => {
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
