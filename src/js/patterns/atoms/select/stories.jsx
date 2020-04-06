import React from 'react'

import Select from 'Atoms/select'

export default {
    title: 'Form',
}

function selectLabel (option) {
    return `Custom label ${option}`
}

export const select = () => {
    const values = [1, 2, 3, 4, 5]

    return (
        <div className='p-4'>
            <Select
                value='2'
                values={values}
                variant='form-select'
                onSelect={(i) => {}}
            />

            <Select
                value='1'
                values={values}
                variant='form-select'
                formatLabel={(option) => { return selectLabel(option) }}
                onSelect={(i) => {}}
            />
        </div>
    )
}
