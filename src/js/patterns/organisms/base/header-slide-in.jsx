import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { ReactComponent as CloseMobile } from '../../../../icons/close.svg'
import { ReactComponent as ArrowLeftWhite } from '../../../../icons/arrow-left.svg'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const HeaderSlideIn = (props) => {
    const { component: Component, title, onClose, showLeftBackIcon, showRightCloseIcon, className, theme } = props
    return (
        <Component
            {..._.omit(props, ['component', 'className', 'theme', 'title', 'onClose', 'showLeftBackIcon', 'showRightCloseIcon'])}
            className={classnames(
              'c-context-header',
              className,
              theme
          )}
            >
            <div className='o-container c-context-header__wrapper'>

                {showLeftBackIcon && <button onClick={onClose} className='u-icon-line-height'>
                    <ArrowLeftWhite className='c-icon c-icon--s' />
                </button>}

                <div className='c-context-header__middle'>
                    <div className='o-flex o-flex--justify-center'>
                        <h4 className='c-title-level-3 c-context-header__title o-flex__item'>
                            {title}
                        </h4>
                    </div>
                </div>
                {showRightCloseIcon && <button className='u-icon-line-height' onClick={onClose}>
                    <CloseMobile className='c-icon c-icon--s' />
                </button>}
            </div>
        </Component>
    )
}

HeaderSlideIn.propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onClose: PropTypes.func.isRequired,
    showLeftBackIcon: PropTypes.bool,
    showRightCloseIcon: PropTypes.bool,
}

HeaderSlideIn.defaultProps = {
    component: 'header',
    theme: 't-spotlight',
    className: '',
    title: '',
    onClose: () => {},
    showLeftBackIcon: true,
    showRightCloseIcon: true,
}

export default ComponentInjector.return('HeaderSlideIn', HeaderSlideIn)
