import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from '../../../app/injector'

class OrganismsSorting extends Component {
    render () {
        const { values } = this.props

        return (<div className='organism-sorting'>
              <div className="c-chip is-active min-width-160">Topseller</div>
              {values.map((v) => {
                  return <div className="c-chip min-width-160">{v}</div>
              })}
        </div>)
    }
}

OrganismsSorting.propTypes = {
    values: PropTypes.array
}

OrganismsSorting.defaultProps = {
    values: ['Neu hinzugefügt', 'Niedrigster Preis', 'Hocher Presis']
}

export default ComponentInjector.return('OrganismsSorting', OrganismsSorting)
