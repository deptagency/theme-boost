import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconSelectDown } from '../../../../icons/tailwind-icons/icon-select-down.svg'

const SelectVariant = ({ values, value, variant, onSelect, formatLabel }) => {
    let listed = []

    return (
        <div className='relative'>
            <select
                value={value}
                className={variant}
                onChange={(e) => {
                    return onSelect(e.target.options.selectedIndex)
                }}
            >
                {values.map((v, i) => {
                    const label = formatLabel ? formatLabel(v) : v

                    if (listed.includes(label)) {
                        return null
                    }

                    listed.push(label)
                    return <option key={i}>{label}</option>
                })}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700'>
                <IconSelectDown className='fill-current h-4 w-4' />
            </div>
        </div>
    )
}

SelectVariant.propTypes = {
    value: PropTypes.string,
    variant: PropTypes.string,
    values: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    formatLabel: PropTypes.func,
}

export default SelectVariant
