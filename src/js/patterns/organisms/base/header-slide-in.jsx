import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsHeaderSlideIn extends Component {
    render () {
        const { title, setIsOpen } = this.props

        return (
            <header role='contentinfo' className='c-context-header t-spotlight'>
                <div className='o-container c-context-header__wrapper'>

                    <div className='c-context-header__middle'>
                        <div className='o-flex o-flex--justify-center'>
                            <h1 className='c-title-level-4 c-context-header__title o-flex__item'>
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
            </header>
        )
    }
}

OrganismsHeaderSlideIn.propTypes = {
    title: PropTypes.string.isRequired,
    setIsOpen: PropTypes.func.isRequired,
}

OrganismsHeaderSlideIn.defaultProps = {
    title: '',
}

export default ComponentInjector.return('OrganismsHeaderSlideIn', OrganismsHeaderSlideIn)
