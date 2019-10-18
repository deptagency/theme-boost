import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsHeaderSlideIn extends Component {
    render () {
        const Component = this.props.component
        const { title, setIsOpen } = this.props

        return (
            <Component
              {..._.omit(this.props, ['children', 'component', 'className', 'theme', 'title', 'setIsOpen'])}
              className={classnames(
                  'c-context-header',
                  this.props.className,
                  this.props.theme
              )}
              >
                <div className='o-container c-context-header__wrapper'>

                    <div className='c-context-header__middle'>
                        <div className='o-flex o-flex--justify-center'>
                            <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                                {title}
                            </h1>
                        </div>
                    </div>
                    <button onClick={() => { setIsOpen(false) }}>
                        <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
            </Component>
        )
    }
}

OrganismsHeaderSlideIn.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    setIsOpen: PropTypes.func.isRequired
}

OrganismsHeaderSlideIn.defaultProps = {
    component: 'header',
    theme: 't-spotlight',
    className: '',
    title: ''
}

export default ComponentInjector.return('OrganismsHeaderSlideIn', OrganismsHeaderSlideIn)
