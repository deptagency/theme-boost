import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { boundless } from '../../filters.module.scss'
import { sizeBox, isActive, sizesChoice } from './sizes.module.scss'
import VerticalPan from '../../../../templates/mobile-gertures/vertical-pan'
import Label from '../../../../atoms/forms/label'
import { FormattedMessage } from 'react-intl'

const ListedSizes = ({ sizes, selectedSize, setSelectedSize }) => {
    return (
        <>
            {sizes.map((v, i) => {
                return (
                    <button
                        key={i}
                        className={classnames({
                            [sizeBox]: true,
                            [isActive]: (v === selectedSize),
                        })}
                        onClick={() => { setSelectedSize(v) }}
                        >
                        {v}
                    </button>
                )
            })}
        </>
    )
}

ListedSizes.propTypes = {
    sizes: PropTypes.array.isRequired,
    selectedSize: PropTypes.number.isRequired,
    setSelectedSize: PropTypes.func.isRequired,
}

const SizesSwipe = (props) => {
    return (
        <>
            <Label className='c-title-level-4' label={<FormattedMessage id={'filters.size'} />} />
            <div className='o-distance-s' />

            <div className={boundless}>
                <VerticalPan childrenClassName={sizesChoice}>
                    <ListedSizes {...props} />
                </VerticalPan>
            </div>
        </>
    )
}

export default SizesSwipe
