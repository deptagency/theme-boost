import React from 'react'
import PropTypes from 'prop-types'

import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

const RangeSlider = ({ value, min, max, onChange }) => {
    return (
        <Range
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            railStyle={{
                backgroundColor: '#CBD5E0',
                height: '5px',
            }}
            handleStyle={[
                {
                    backgroundColor: '#2D3748',
                    borderColor: '#2D3748',
                    width: '24px',
                    height: '24px',
                    marginTop: '-10px',
                },
                {
                    backgroundColor: '#2D3748',
                    borderColor: '#2D3748',
                    width: '24px',
                    height: '24px',
                    marginTop: '-10px',
                },
            ]}
            trackStyle={[{ backgroundColor: '#718096' }]}
        />
    )
}

RangeSlider.propTypes = {
    value: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
}

export default RangeSlider
