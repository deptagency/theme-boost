import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesButton extends Component {
    render () {
        const Component = this.props.component

        return (
            <Component
                {..._.omit(this.props, ['children', 'component', 'className', 'type', 'htmlType'])}
                type={this.props.htmlType}
                className={classnames(
                    'c-button',
                    this.props.className,
                    this.props.type ? 'c-button--' + this.props.type : null,
                    this.props.size ? 'c-button--' + this.props.size : null
                )}
                >
                {this.props.children}
            </Component>
        )
    }
}

MoleculesButton.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    type: PropTypes.oneOf([null, 'primary', 'quiet', 'ghost', 'plain', 'destructive']),
    size: PropTypes.oneOf([null, 'minion', 'boss']),
    htmlType: PropTypes.string,
}

MoleculesButton.defaultProps = {
    component: 'button',
    className: '',
    type: null,
    htmlType: null,
}

export default ComponentInjector.return('MoleculesButton', MoleculesButton)
