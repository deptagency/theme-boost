import React from 'react'
import { ReactComponent as IconSelectDown } from 'Icons/tailwind-icons/icon-select-down.svg'

export default function DropdownList({ children, onChange, value }) {
    return (
        <div className='relative'>
            <select className='form-select' value={value} onChange={onChange}>
                {children}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700'>
                <IconSelectDown className='fill-current h-4 w-4' />
            </div>
        </div>
    )
}

export function DropdownItem({ label, value, disabled = false }) {
    return (
        <option value={value} disabled={disabled}>
            {label}
        </option>
    )
}
