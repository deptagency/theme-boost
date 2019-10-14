import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsSizes extends Component {
    render () {
        const { values, disabledValues } = this.props

        return (
            <div className='organism-sizes'>
                {values.map((v) => {
                    return (
                        <div
                            className={classnames({
                                'c-size__item': true,
                                'is-disabled': disabledValues.includes(v),
                            })}
                        >
                            {v}
                        </div>
                    )
                })}
            </div>
        )
    }
}

OrganismsSizes.propTypes = {
    values: PropTypes.array,
    disabledValues: PropTypes.array,
}

OrganismsSizes.defaultProps = {
    values: [34, 36, 38, 40, 42, 44, 46, 48],
    disabledValues: [40],
}

export default ComponentInjector.return('OrganismsSizes', OrganismsSizes)
