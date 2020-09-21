import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import RangeSlider from 'Atoms/rangeSlider'

const RangeFacet = ({ facet, onChange }) => {
    const [, useForceUpdate] = useState()

    const min = Math.round(facet.min / 100)
    const max = Math.round(facet.max / 100)

    const [tmpMin, setTmpMin] = useState(facet.value.min ? Math.round(parseFloat(facet.value.min) / 100) : min)
    const [tmpMax, setTmpMax] = useState(facet.value.max ? Math.round(parseFloat(facet.value.max) / 100) : max)
    const [value, setValue] = useState([tmpMin, tmpMax])

    useEffect(() => {
        setTmpMin(facet.value.min ? Math.round(parseFloat(facet.value.min) / 100) : min)
        setTmpMax(facet.value.max ? Math.round(parseFloat(facet.value.max) / 100) : max)
        setValue([tmpMin, tmpMax])
    }, [facet, max, min, tmpMax, tmpMin])

    const onRangeChange = (v) => {
        setValue(v)

        setTmpMin(v[0])
        setTmpMax(v[1])

        if (v[0] === facet.min && v[1] === facet.max) {
            facet.selected = false
        } else {
            facet.selected = true
        }

        facet.value.min = v[0] * 100
        facet.value.max = v[1] * 100

        useForceUpdate({})

        if (onChange) {
            onChange(facet)
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='mt-8 w-full px-4'>
                <RangeSlider
                    value={value}
                    min={min}
                    max={max}
                    onChange={onRangeChange}
                />
            </div>

            <div className='my-8 w-full flex justify-between'>
                <span className='text-gray-600 absolute left-0 ml-6 mt-2 select-none'>€</span>

                <input
                    name='min'
                    type='number'
                    value={tmpMin}
                    onChange={(e) => {
                        setTmpMin(e.target.value)
                    }}
                    onBlur={() => {
                        if (Number.isNaN(tmpMin) || tmpMin < min) {
                            onRangeChange([parseFloat(min), value[1]])
                        } else {
                            onRangeChange([parseFloat(tmpMin), value[1]])
                        }
                    }}
                    style={{ height: '36px' }}
                    className='w-20 px-3 py-2 border border-gray-400 rounded-md box-border text-sm text-right leading-normal'
                />

                <span className='text-gray-600 absolute right-0 mr-20 mt-2 select-none'>€</span>
                <input
                    name='max'
                    type='number'
                    value={tmpMax}
                    onChange={(e) => {
                        setTmpMax(e.target.value)
                    }}
                    onBlur={() => {
                        if (Number.isNaN(tmpMax) || tmpMax > max) {
                            onRangeChange([value[0], parseFloat(max)])
                        } else {
                            onRangeChange([value[0], parseFloat(tmpMax)])
                        }
                    }}
                    style={{ height: '36px' }}
                    className='w-20 px-3 py-2 border border-gray-400 rounded-md box-border text-sm text-right leading-normal'
                />
            </div>
        </div>
    )
}

RangeFacet.propTypes = {
    facet: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default RangeFacet
