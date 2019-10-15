import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesChip extends Component {
    render () {
        const Component = this.props.component

        return (
          <Component
            {..._.omit(this.props, ['children', 'component', 'className', 'active', 'selected', 'title', 'htmlType'])}
            type={this.props.htmlType}
            className={classnames(
              'c-chip',
              this.props.className,
              this.props.active ? 'is-active' : null,
              this.props.selected ? 'is-selected' : null,
            )}
          >
              <span>{this.props.title}</span>
              {this.props.deleteable ?
                  <button className='c-chip__trigger' onClick={this.props.onClick}>
                      <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                          <title>Delete Item</title>
                          <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                      </svg>
                  </button>
              : null }
          </Component>
        )
    }
}

MoleculesChip.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    active: PropTypes.bool,
    selected: PropTypes.bool,
    deleteabled: PropTypes.bool,
    title: PropTypes.string,
    htmlType: PropTypes.string,
}

MoleculesChip.defaultProps = {
  component: 'div',
  className: '',
  active: null,
  selected: null,
  deleteabeld: null,
  title: "Chip",
  htmlType: null,
}

export default ComponentInjector.return('MoleculesChip', MoleculesChip)
