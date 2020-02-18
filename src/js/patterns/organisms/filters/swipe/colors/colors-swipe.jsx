import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { boundless, marginTop12, marginTop24 } from '../../filters.module.scss'
import { colorsStyle } from './colors.module.scss'
import VerticalPan from '../../../../templates/mobile-gertures/vertical-pan'
import Label from '../../../../atoms/forms/label'

const ListedColors = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <>
            {Object.keys(colors).map((c, i) => {
                return (
                    <div key={i} style={{ marginRight: '12px' }}>
                        <div
                            style={{
                                background: `${colors[c]}`,
                            }}
                            className={classnames({
                                'c-colorswatch__item': true,
                                'is-active': Object.keys(selectedColor) && (c === Object.keys(selectedColor)[0]),
                            })}
                            onClick={() => { setSelectedColor({ [c]: colors[c] }) }}
                        />
                        <div className='u-text-xs u-text-center'>{c}</div>
                    </div>
                )
            })}
        </>
    )
}

ListedColors.propTypes = {
    colors: PropTypes.object.isRequired,
    selectedColor: PropTypes.object.isRequired,
    setSelectedColor: PropTypes.func.isRequired,
}

const ColorsSwipe = (props) => {
    return (
        <>
            <div className={marginTop24} />
            <Label className='c-title-level-4' label='Farbe' />
            <div className={marginTop12} />

            <div className={boundless}>
                <VerticalPan childrenClassName={colorsStyle}>
                    <ListedColors {...props} />
                </VerticalPan>
            </div>
        </>
    )
}

export default ColorsSwipe
