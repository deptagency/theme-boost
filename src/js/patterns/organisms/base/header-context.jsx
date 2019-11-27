import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsHeaderContext extends Component {
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
                        <button>
                            <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <title>Zurück</title>
                                <path d='M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z' />
                            </svg>
                        </button>
                    }

                    <div className='c-context-header__middle'>
                        {this.props.subtitle && <p className='u-text-s'>{this.props.subtitle}</p>}

                        <div className='o-flex o-flex--center'>
                            <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                                {this.props.title}
                            </h1>
                            {this.props.removeSearchValue &&
                                <button className='o-flex__item c-icon-circle c-icon-circle--xs'>
                                    <svg className='c-icon c-icon--xs c-icon-circle__icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                        <title>cross</title>
                                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                                    </svg>
                                </button>
                            }
                        </div>
                    </div>
                    {this.props.closeButton &&
                        <button>
                            <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <title>Ansicht schließen</title>
                                <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                            </svg>
                        </button>
                    }
                </div>
            </Component>
        )
    }
}

OrganismsHeaderContext.propTypes = {
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

OrganismsHeaderContext.defaultProps = {
    component: 'header',
    theme: '',
    className: '',
    title: 'Festival Summer Outfit',
    subtitle: '',
    backButton: false,
    closeButton: false,
    removeSearchValue: false,
}

export default ComponentInjector.return('OrganismsHeaderContext', OrganismsHeaderContext)
