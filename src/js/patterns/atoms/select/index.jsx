import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconSelectDown } from 'Icons/tailwind-icons/icon-select-down.svg'

const Select = ({ values, onSelect, formatLabel }) => {
    let listed = []

    return (
        <>
            <select
                className='appearance-none w-full bg-white border border-gray-300 text-base text-gray-800 font-bold py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-500'
                onChange={(e) => { return onSelect(e.target.options.selectedIndex) }}
            >
                {values.map((v, i) => {
                    const label = formatLabel(v)

                    if (listed.includes(label)) { return null }

                    listed.push(label)
                    return <option key={i}>{label}</option>
                })}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <IconSelectDown className='fill-current h-4 w-4' />
            </div>
        </>
    )
}

Select.propTypes = {
    values: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    formatLabel: PropTypes.func.isRequired,
}

export default Select
