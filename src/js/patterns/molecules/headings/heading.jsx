import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesHeading extends Component {
    render () {
        const { title, description } = this.props

        return (<div>
            <header className='o-heading'>
                {title && <div className='o-heading__title'>
                    <h2 className='c-title'>{title}</h2>
                </div>}
                {description && <div className='o-heading__topic'>
                    <p className='c-topic'>{description}</p>
                </div>}
            </header>
        </div>)
    }
}

MoleculesHeading.propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
}

export default ComponentInjector.return('MoleculesHeading', MoleculesHeading)
