import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Scrollbars } from 'react-custom-scrollbars'
import classnames from 'classnames'
import { Dropdown } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import { ReactComponent as ArrowExpand } from '../../../../icons/arrow-expand.svg'
import {
    arrow,
    desktopButton, dropdownFooter,
    dropdownScrollbars,
    groupName, itemsWrapper, listDropDownItem, listDropDownItemActive, resetButton,
    searchLabel,
} from '../../organisms/filters/filters.module.scss'
import Button from '../../atoms/buttons/button'
import InputWithLabelIcon from '../forms/input-with-label-icon'
import { ReactComponent as SearchIcon } from '../../../../icons/tailwind-icons/icon-search.svg'
import { grayColor } from '../../templates/slide-in-panels/panels.module.scss'
import { ReactComponent as TickSelected } from '../../../../icons/tick-selected.svg'
import groupByName from '../../../helpers/groupByName'

const DropdownGroupedList = ({
    searchable,
    query, handleQueryChange,
    items, selectedItems, toggleSelectedItems,
    resetSelection, title,
    menuStyle = {},
}) => {
    const dropdownRef = useRef()

    const closeDropdown = () => {
        dropdownRef.current.getElementsByClassName('rs-dropdown-open')[0].classList.toggle('rs-dropdown-open')
    }

    return (
        <div ref={dropdownRef}>
            <Dropdown
                title={
                    <>
                        {title}
                        <ArrowExpand className={arrow} />
                    </>
                }
                renderTitle={(children) => {
                    return <Button type='quieter' size='minion' className={desktopButton}>{children}</Button>
                }}
                trigger={['click']}
                noCaret
                menuStyle={menuStyle}
            >

                {searchable && <>
                    <InputWithLabelIcon
                        id='brand'
                        icon={<SearchIcon className={grayColor} />}
                        label={<div className={`searchLabel ${searchLabel}`}><FormattedMessage id={'filters.search'} /></div>}
                        value={query}
                        onChange={handleQueryChange}
                    />
                </>}

                <Scrollbars className={`dropdownScrollbars ${dropdownScrollbars}`}>
                    {Object.values(groupByName(items, selectedItems)).map(({ group, list }, i) => {
                        return (
                            <Fragment key={i}>
                                <div className={classnames('u-text-strong', 'o-distance-s', 'groupName', groupName)}>
                                    {group}
                                </div>
                                <div className={`itemsWrapper ${itemsWrapper}`}>
                                    {list.map((b) => {
                                        return (
                                            <Dropdown.Item
                                                key={b.id}
                                                renderItem={() => {
                                                    return (
                                                        <div
                                                            className={classnames({
                                                                [listDropDownItem]: true,
                                                                [listDropDownItemActive]: b.isSelected,

                                                            })}

                                                            onClick={() => {
                                                                toggleSelectedItems(b)
                                                            }}
                                                        >
                                                            {b.name}
                                                            {b.isSelected && <TickSelected className={listDropDownItemActive} />}
                                                        </div>
                                                    )
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </Fragment>
                        )
                    })}
                </Scrollbars>

                <div className={dropdownFooter}>
                    <div
                        className={resetButton}
                        onClick={() => {
                            resetSelection()
                        }}
                    >
                        <FormattedMessage id={'filters.reset'} />
                    </div>

                    <Button
                        type='quiet'
                        onClick={closeDropdown}
                    >
                        <FormattedMessage id={'filters.save'} />
                    </Button>
                </div>

            </Dropdown>
        </div>
    )
}

DropdownGroupedList.propTypes = {
    title: PropTypes.any.isRequired,
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelectedItems: PropTypes.func.isRequired,
    searchable: PropTypes.bool,
    query: PropTypes.string,
    handleQueryChange: PropTypes.func,
    resetSelection: PropTypes.func,
    menuStyle: PropTypes.object,
}

export default DropdownGroupedList
