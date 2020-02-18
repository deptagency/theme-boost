import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import classnames from 'classnames'

import Label from '../../atoms/forms/label'
import Input from '../../atoms/forms/input'

import { input, iconPosition, valuePadding } from './input.module.scss'

const InputWithLabelIcon = ({ className, id, type, label, value, name, icon, onChange }) => {
    return (
        <div className={className}>
            <Label htmlFor={id} className='c-form-label' label={label} />
            <div className={input}>
                <div className={iconPosition}>
                    {icon}
                </div>
                <Input
                    value={value}
                    type={type}
                    className={classnames('o-distance-xs', valuePadding)}
                    id={id}
                    name={name}
                    onChange={onChange}
                />
            </div>

        </div>
    )
}

InputWithLabelIcon.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.any.isRequired,
    type: PropTypes.string,
    icon: PropTypes.node.isRequired,
}

InputWithLabelIcon.defaultProps = {
    id: undefined,
    value: '',
    name: '',
    className: 'o-form-area__column-6-6 o-form-area__new-row',
    label: 'Input-Label',
    type: 'text',
}

export default ComponentInjector.return('InputWithLabelIcon', InputWithLabelIcon)
