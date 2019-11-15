import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Button extends Component {
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
                href={this.props.href}
                >
                {this.props.icon ?
                    <div className='o-block-short'>
                        <svg className='c-icon c-icon--s o-block-short__short-item' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M22.9 2.6c-0.2-0.4-0.5-0.6-0.9-0.6h-20c-0.4 0-0.7 0.2-0.9 0.6-0.2 0.3-0.1 0.7 0.1 1l7.8 9.2v6.2c0 0.4 0.2 0.7 0.6 0.9l4 2c0.1 0.1 0.2 0.1 0.4 0.1s0.4 0 0.5-0.1c0.3-0.2 0.5-0.5 0.5-0.9v-8.2l7.8-9.2c0.2-0.3 0.3-0.7 0.1-1zM13.2 11.8c-0.1 0.2-0.2 0.4-0.2 0.7v6.9l-2-1v-5.9c0-0.2-0.1-0.5-0.2-0.6l-6.6-7.9h15.7l-6.7 7.8z' />
                        </svg>
                        <span className='o-block-short__body'>
                            {this.props.children}
                        </span>
                    </div>
              :
                    <span>{this.props.children}</span>
              }

            </Component>
        )
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    type: PropTypes.oneOf([null, 'primary', 'quiet', 'ghost', 'plain', 'destructive']),
    size: PropTypes.oneOf([null, 'minion', 'boss']),
    htmlType: PropTypes.string,
    icon: PropTypes.bool,
    href: PropTypes.bool,
}

Button.defaultProps = {
    component: 'button',
    className: '',
    type: null,
    htmlType: null,
    href: '',
}

export default ComponentInjector.return('Button', Button)
