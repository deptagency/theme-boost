import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { boundless, marginTop24 } from '../../filters.module.scss'
import { sortBox, isActive, sortBoxes } from './sort.module.scss'
import VerticalPan from '../../../../templates/mobile-gertures/vertical-pan'
import Label from '../../../../atoms/forms/label'
import { FormattedMessage } from 'react-intl'

const ListedSort = ({ sort, selectedSort, setSelectedSort }) => {
    return (
        <>
            {sort.map((v, i) => {
                return (
                    <button
                        key={i}
                        style={{ marginRight: '12px' }}
                        className={classnames({
                            [sortBox]: true,
                            [isActive]: (v === selectedSort),
                        })}
                        onClick={() => { setSelectedSort(v) }}
                        >
                        {v}
                    </button>
                )
            })}
        </>
    )
}

ListedSort.propTypes = {
    sort: PropTypes.array.isRequired,
    selectedSort: PropTypes.string.isRequired,
    setSelectedSort: PropTypes.func.isRequired,
}

const SortingSwipe = (props) => {
    return (
        <>
            <div className={marginTop24} />
            <Label className='c-title-level-4' label={<FormattedMessage id={'filters.sort'} />} />
            <div className='o-distance-s' />

            <div className={boundless}>
                <VerticalPan childrenClassName={sortBoxes}>
                    <ListedSort {...props} />
                </VerticalPan>
            </div>
        </>
    )
}

export default SortingSwipe
