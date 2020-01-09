import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class HeaderContext extends Component {
    render () {
        const Component = this.props.component
        return (
            <Component
                {..._.omit(this.props, ['children', 'component', 'className', 'theme'])}
                className={classnames(
              'c-context-header',
              this.props.className,
              this.props.theme
            )}
                >
                <div className='o-container c-context-header__wrapper'>
                    {this.props.backButton &&
                        <button className='o-flex o-flex--center'>
                            <svg className='o-flex__item c-icon c-icon--m u-icon-line-height' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <title><FormattedMessage id='back' /></title>
                                <path d='M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z' />
                            </svg>
                            <span className='o-flex__item u-hidden-until-large'><FormattedMessage id='back' /></span>
                        </button>
                    }

                    <div className='c-context-header__middle'>
                        {this.props.subtitle && <p className='u-text-s'>{this.props.subtitle}</p>}

                        <div className='o-flex o-flex--center o-flex--justify-center'>
                            <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                                {this.props.title}
                            </h1>
                            {this.props.removeSearchValue &&
                                <button className='o-flex__item c-icon-circle c-icon-circle--xs'>
                                    <svg className='c-icon c-icon--xs c-icon-circle__icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title><FormattedMessage id='header.cross' /></title>
                                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                                    </svg>
                                </button>
                            }
                        </div>
                    </div>
                    {this.props.closeButton &&
                        <button className='u-icon-line-height'>
                            <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <title><FormattedMessage id='header.closeView' /></title>
                                <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                            </svg>
                        </button>
                    }
                </div>
            </Component>
        )
    }
}

HeaderContext.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    backButton: PropTypes.bool,
    closeButton: PropTypes.bool,
    removeSearchValue: PropTypes.bool,
}

HeaderContext.defaultProps = {
    component: 'header',
    theme: '',
    className: '',
    title: 'Festival Summer Outfit',
    subtitle: '',
    backButton: false,
    closeButton: false,
    removeSearchValue: false,
}

export default ComponentInjector.return('HeaderContext', HeaderContext)
