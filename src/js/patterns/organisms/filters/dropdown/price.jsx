import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import FromTo from '../../form/from-to'
import { fromToInputStyle } from '../filters.module.scss'
import DropdownSinglePanel from '../../../molecules/dropdowns/singlePanel'
import { Dropdown } from 'rsuite'

const PriceDropdown = ({ selectedPrice, setSelectedPrice, menuStyle = {} }) => {
    return (
        <DropdownSinglePanel
            title={<FormattedMessage id={'filters.price'} />}
            selectedItem={selectedPrice}
            setSelectedItem={setSelectedPrice}
            menuStyle={menuStyle}
            renderChild={(selectedPrice) => {
                return (
                    <Dropdown.Item
                        renderItem={() => {
                            return (
                                <FromTo
                                    className={fromToInputStyle}
                                    value={selectedPrice}
                                    onChange={setSelectedPrice}
                                />
                            )
                        }}
                    />
                )
            }}
        />
    )
}

PriceDropdown.propTypes = {
    selectedPrice: PropTypes.object.isRequired,
    setSelectedPrice: PropTypes.func.isRequired,

    menuStyle: PropTypes.object,
}

export default PriceDropdown
