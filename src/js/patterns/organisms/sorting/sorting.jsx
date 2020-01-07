import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsSorting extends Component {
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

OrganismsSorting.propTypes = {
    values: PropTypes.array,
}

OrganismsSorting.defaultProps = {
    values: ['Neu hinzugefügt', 'Niedrigster Preis', 'Hocher Presis'],
}

export default ComponentInjector.return('OrganismsSorting', OrganismsSorting)
