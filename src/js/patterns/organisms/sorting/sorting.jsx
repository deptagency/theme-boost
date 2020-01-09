import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Sorting extends Component {
    render () {
        const { values } = this.props

        return (
            <div className='o-swiper'>
                <div className='o-swiper__holder'>
                    <div className='o-swiper__item'>
                        <button className='c-chip c-chip--content-width is-active'>Topseller</button>
                    </div>
                    {values.map((v) => {
                          return <div className='o-swiper__item'><button className='c-chip c-chip--content-width'>{v}</button></div>
                      })}
                </div>
            </div>
        )
    }
}

Sorting.propTypes = {
    values: PropTypes.array,
}

Sorting.defaultProps = {
    values: ['Neu hinzugefügt', 'Niedrigster Preis', 'Hocher Presis'],
}

export default ComponentInjector.return('Sorting', Sorting)
