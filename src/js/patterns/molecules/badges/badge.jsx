import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from '../../../app/injector'

class MoleculesBadge extends Component {
  render() {
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

MoleculesBadge.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  type: PropTypes.oneOf([null, 'danger', 'quiet', 'spot']),
  color: PropTypes.oneOf([null, 'green', 'blue', 'yellow']),
}

MoleculesBadge.defaultProps = {
  component: 'span',
  className: '',
  type: null,
  color: null,
}

export default ComponentInjector.return('MoleculesBadge', MoleculesBadge)
