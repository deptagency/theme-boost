import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { ReactComponent as CloseMobile } from '../../../../icons/close-x-mobile.svg'
import { ReactComponent as ArrowLeftWhite } from '../../../../icons/arrow-left-white.svg'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const OrganismsHeaderSlideIn = (props) => {
    const { component: Component, title, setIsOpen, showLeftBackIcon, showRightCloseIcon, className, theme } = props
    return (
        <Component
            {..._.omit(props, ['children', 'component', 'className', 'theme', 'title', 'setIsOpen'])}
            className={classnames(
              'c-context-header',
              className,
              theme
          )}
            >
            <div className='o-container c-context-header__wrapper'>

                {showLeftBackIcon && <button onClick={() => { setIsOpen(false) }}>
                    <ArrowLeftWhite />
                </button>}

                <div className='c-context-header__middle'>
                    <div className='o-flex o-flex--justify-center'>
                        <h3 className='c-title-level-3 c-context-header__title o-flex__item'>
                            {title}
                        </h3>
                    </div>
                </div>
                {showRightCloseIcon && <button onClick={() => { setIsOpen(false) }}>
                    <CloseMobile />
                </button>}
            </div>
        </Component>
    )
}

OrganismsHeaderSlideIn.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.string.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    icon: PropTypes.node, // showLeftBackIcon, showRightCloseIcon,
    showLeftBackIcon: PropTypes.bool, // showLeftBackIcon, showRightCloseIcon,
    showRightCloseIcon: PropTypes.bool, // showLeftBackIcon, showRightCloseIcon,
}

OrganismsHeaderSlideIn.defaultProps = {
    component: 'header',
    theme: 't-spotlight',
    className: '',
    title: '',
    setIsOpen: () => {},
    showLeftBackIcon: true,
    showRightCloseIcon: true,
}

export default ComponentInjector.return('OrganismsHeaderSlideIn', OrganismsHeaderSlideIn)
