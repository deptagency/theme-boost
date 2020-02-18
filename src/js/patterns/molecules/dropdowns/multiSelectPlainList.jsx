import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import { Dropdown } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import { ReactComponent as ArrowExpand } from '../../../../icons/arrow-expand.svg'
import {
    arrow,
    desktopButton, dropdownFooter,
    resetButton,
    plainListDropDownItem, plainListDropDownItemActive,
} from '../../organisms/filters/filters.module.scss'
import Button from '../../atoms/buttons/button'
import { ReactComponent as TickSelected } from '../../../../icons/tick-selected.svg'

const DropdownMultiSelectPlainList = ({
    items, selectedItems, toggleSelectedItems,
    resetSelection, title,
    menuStyle,
    component = 'div',
    componentClassNames = '',

}) => {
    const Component = component
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
                <Component className={componentClassNames}>

                    {Object.values(items).map((entry) => {
                        const isSelected = selectedItems.some((v) => { return v.id === entry.id })

                        return (
                            <Dropdown.Item
                                key={entry.id}
                                renderItem={() => {
                                    return (
                                        <div
                                            className={classnames({
                                                [plainListDropDownItem]: true,
                                                [plainListDropDownItemActive]: isSelected,

                                            })}

                                            onClick={() => {
                                                toggleSelectedItems(entry)
                                            }}
                                        >
                                            {entry.name}
                                            {isSelected && <TickSelected className={plainListDropDownItemActive} />}
                                        </div>
                                    )
                                }}
                            />
                        )
                    })}
                </Component>

                <div className={`dropdownFooter ${dropdownFooter}`}>
                    <div
                        className={`resetButton ${resetButton}`}
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

DropdownMultiSelectPlainList.propTypes = {
    title: PropTypes.any.isRequired,
    items: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelectedItems: PropTypes.func.isRequired,
    resetSelection: PropTypes.func,
    menuStyle: PropTypes.object,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    componentClassNames: PropTypes.string,
}

DropdownMultiSelectPlainList.defaultProps = {
    component: 'div',
    componentClassNames: '',
    menuStyle: {},
}

export default DropdownMultiSelectPlainList
