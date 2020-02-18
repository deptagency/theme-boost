import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { Dropdown } from 'rsuite'
import { Scrollbars } from 'react-custom-scrollbars'

import { dropdownScrollbars, plainListDropDownItem, plainListDropDownItemActive } from '../filters.module.scss'
import { ReactComponent as TickSelected } from '../../../../../icons/tick-selected.svg'
import DropdownSingleSelectPlainList from '../../../molecules/dropdowns/singleSelectPlainList'

const SizeDropdown = ({ sizes, selectedSize, setSelectedSize, menuStyle = {} }) => {
    return (
        <DropdownSingleSelectPlainList
            title={<FormattedMessage id={'filters.size'} />}
            items={sizes}
            menuStyle={{
                ...menuStyle,
                height: '376px',
            }}

            component={Scrollbars}
            componentClassNames={`dropdownScrollbars ${dropdownScrollbars}`}
            renderChild={(entry) => {
                const isSelected = selectedSize === entry

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
                                        setSelectedSize(entry)
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

SizeDropdown.propTypes = {
    sizes: PropTypes.array.isRequired,
    selectedSize: PropTypes.number.isRequired,
    setSelectedSize: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default SizeDropdown
