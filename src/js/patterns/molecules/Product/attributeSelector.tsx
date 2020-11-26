import * as React from 'react'

import DropdownList, { DropdownItem } from '../DropdownList'

export type Attribute = { label: string; key: string } | string

interface Props {
    label: string
    value: string
    options: Attribute[]
    onChange: any
    isSingularSelectable: boolean
}

function AttributeSelector({ label, value, options, onChange, isSingularSelectable = true }: Props) {
    const toString = (item: Attribute): string => (typeof item === 'string' ? item : JSON.stringify(item))
    return (
        <div className='flex-col md:pb-4' key={label}>
            <label className='pb-2 text-gray-900 text-sm antialiased block'>{label}</label>
            <div className='w-full mb-6 md:mb-0'>
                {!isSingularSelectable && options.length < 2 ? (
                    <p>{typeof options[0] === 'string' ? options[0] : options[0].label}</p>
                ) : (
                    <DropdownList value={value} onChange={onChange}>
                        {options.map((option: Attribute) => {
                            return (
                                <DropdownItem
                                    key={toString(option)}
                                    value={toString(option)}
                                    label={typeof option === 'string' ? option : option.label}
                                />
                            )
                        })}
                    </DropdownList>
                )}
            </div>
        </div>
    )
}

export default AttributeSelector
