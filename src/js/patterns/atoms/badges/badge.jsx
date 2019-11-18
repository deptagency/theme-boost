import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Badge extends Component {
    render () {
        const Component = this.props.component

        return (
            <Component
                {..._.omit(this.props, ['children', 'component', 'className', 'type'])}
                className={classnames(
          'c-badge',
          this.props.className,
          this.props.type ? 'c-badge--' + this.props.type : null,
          this.props.color ? 'c-badge--' + this.props.color : null,
        )}
                >
                {this.props.children}
            </Component>
        )
    }
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    type: PropTypes.oneOf([null, 'danger', 'quiet', 'spot']),
    color: PropTypes.oneOf([null, 'green', 'blue', 'yellow', 'red']),
}

Badge.defaultProps = {
    component: 'span',
    className: '',
    type: null,
    color: null,
}

export default ComponentInjector.return('Badge', Badge)
