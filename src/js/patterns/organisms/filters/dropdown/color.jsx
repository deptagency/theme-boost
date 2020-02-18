import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { dropdownScrollbars, plainListDropDownItem, plainListDropDownItemActive } from '../filters.module.scss'
import DropdownSingleSelectPlainList from '../../../molecules/dropdowns/singleSelectPlainList'
import { Dropdown } from 'rsuite'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

const ColorDropdown = ({ colors, selectedColor, setSelectedColor, menuStyle = {} }) => {
    return (
        <DropdownSingleSelectPlainList
            title={<FormattedMessage id={'filters.color'} />}
            items={colors}
            menuStyle={menuStyle}

            component={Scrollbars}
            componentClassNames={dropdownScrollbars}
            iterationFunction={Object.keys}
            renderChild={(c, i) => {
                const isSelected = Object.keys(selectedColor) && (c === Object.keys(selectedColor)[0])

                return (
                    <Dropdown.Item
                        key={i}
                        renderItem={() => {
                            return (
                                <div
                                    key={i}
                                    style={{ marginRight: '12px' }}
                                    className={classnames({
                                        [plainListDropDownItem]: true,
                                        [plainListDropDownItemActive]: isSelected,
                                    })}
                                    onClick={() => { setSelectedColor({ [c]: colors[c] }) }}
                                >
                                    <div
                                        style={{
                                            background: `${colors[c]}`,
                                        }}
                                        className='c-colorswatch__item c-colorswatch__item--small'
                                    />
                                    <div className='u-text-xs'>{c}</div>
                                </div>
                            )
                        }}
                    />
                )
            }}
        />
    )
}

ColorDropdown.propTypes = {
    colors: PropTypes.object.isRequired,
    selectedColor: PropTypes.object.isRequired,
    setSelectedColor: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default ColorDropdown
