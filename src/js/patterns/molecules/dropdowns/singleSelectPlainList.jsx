import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Dropdown } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

import { ReactComponent as ArrowExpand } from '../../../../icons/arrow-expand.svg'
import {
    arrow,
    desktopButton, dropdownFooter,
    resetButton,
} from '../../organisms/filters/filters.module.scss'
import Button from '../../atoms/buttons/button'

const DropdownSingleSelectPlainList = ({
    items,
    title,
    menuStyle,
    component = 'div',
    componentClassNames = '',
    resetSelection,
    renderChild,
    iterationFunction,

}) => {
    const Component = component
    const dropdownRef = useRef()

    const closeDropdown = () => {
        dropdownRef.current.getElementsByClassName('rs-dropdown-open')[0].classList.toggle('rs-dropdown-open')
    }

    return (
        <div ref={dropdownRef}>
            <Dropdown
                title={
                    <>
                        {title}
                        <ArrowExpand className={arrow} />
                    </>
                }
                renderTitle={(children) => {
                    return <Button type='quieter' size='minion' className={desktopButton}>{children}</Button>
                }}
                trigger={['click']}
                noCaret
                menuStyle={menuStyle}
            >
                <Component className={componentClassNames}>
                    {iterationFunction(items).map((entry, index) => { return renderChild(entry, index) })}
                </Component>

                <div className={dropdownFooter}>
                    <div>
                        {resetSelection !== undefined && <div
                            className={`resetButton ${resetButton}`}
                            onClick={() => {
                                resetSelection()
                            }}
                        >
                            <FormattedMessage id={'filters.reset'} />
                        </div>}
                    </div>

                    <Button
                        type='quiet'
                        onClick={closeDropdown}
                    >
                        <FormattedMessage id={'filters.save'} />
                    </Button>
                </div>

            </Dropdown>
        </div>
    )
}

DropdownSingleSelectPlainList.propTypes = {
    title: PropTypes.any.isRequired,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    resetSelection: PropTypes.func,
    renderChild: PropTypes.func.isRequired,
    menuStyle: PropTypes.object,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    componentClassNames: PropTypes.string,
    iterationFunction: PropTypes.func,
}

DropdownSingleSelectPlainList.defaultProps = {
    component: 'div',
    componentClassNames: '',
    menuStyle: {},
    iterationFunction: Object.values,
}

export default DropdownSingleSelectPlainList
