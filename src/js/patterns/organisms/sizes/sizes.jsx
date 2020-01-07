import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Sizes extends Component {
    render () {
        const { values, disabledValues } = this.props

        return (
            <div className='o-swiper'>
                <div className='o-swiper__holder'>
                    {values.map((v) => {
                        return (
                            <div className='o-swiper__item'>
                                <button
                                    className={classnames({
                                        'c-chip c-chip--squared': true,
                                        'is-disabled': disabledValues.includes(v),
                                    })}>
                                    {v}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Sizes.propTypes = {
    values: PropTypes.array,
    disabledValues: PropTypes.array,
}

Sizes.defaultProps = {
    values: [34, 36, 38, 40, 42, 44, 46, 48],
    disabledValues: [40],
}

export default ComponentInjector.return('Sizes', Sizes)
