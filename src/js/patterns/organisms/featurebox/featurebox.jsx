import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Featurebox extends Component {
    render () {
        return (
            <div className='c-box t-quietlight'>
                <div className='o-block-short o-block-short--centered'>
                    <div className='o-block-short__short-item u-line-height-fix-tiny'>
                        {this.props.icon}
                    </div>
                    <div className='o-block-short__body'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Featurebox.propTypes = {
    description: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
}

Featurebox.defaultProps = {}

export default ComponentInjector.return('Featurebox', Featurebox)
