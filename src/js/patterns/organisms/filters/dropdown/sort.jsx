import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { plainListDropDownItem, plainListDropDownItemActive } from '../filters.module.scss'
import { ReactComponent as TickSelected } from '../../../../../icons/tick-selected.svg'
import DropdownSingleSelectPlainList from '../../../molecules/dropdowns/singleSelectPlainList'
import { Dropdown } from 'rsuite'
import classnames from 'classnames'

const SortDropdown = ({ sort, selectedSort, setSelectedSort, menuStyle = {} }) => {
    return (
        <DropdownSingleSelectPlainList
            title={<FormattedMessage id={'filters.sort'} />}
            items={sort}
            menuStyle={menuStyle}
            renderChild={(entry) => {
                const isSelected = selectedSort === entry

                return (
                    <Dropdown.Item
                        key={entry}
                        renderItem={() => {
                            return (
                                <div
                                    className={classnames({
                                        [plainListDropDownItem]: true,
                                        [plainListDropDownItemActive]: isSelected,

                                    })}
                                    onClick={() => {
                                        setSelectedSort(entry)
                                    }}
                                >
                                    {entry}
                                    {isSelected && <TickSelected className={plainListDropDownItemActive} />}
                                </div>
                            )
                        }}
                    />
                )
            }}
        />
    )
}

SortDropdown.propTypes = {
    sort: PropTypes.array.isRequired,
    selectedSort: PropTypes.string.isRequired,
    setSelectedSort: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default SortDropdown
