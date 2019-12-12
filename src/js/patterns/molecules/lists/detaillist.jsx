import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import {
    detailList,
    fontSize14,
    label,
    value,
} from './detaillist.module.scss'

const MoleculesDetaillist = ({ color, size, count }) => {
    return (
        <div className={classnames(detailList, 'detailList', 'o-distance-s')}>
            <div>
                <span className={classnames(fontSize14, label)}><FormattedMessage id='colorProduct' /></span>
                <span className={classnames(fontSize14, value)}> {color}</span>
            </div>

            <div>
                <span className={classnames(fontSize14, label)}><FormattedMessage id='sizeProduct' /></span>
                <span className={classnames(fontSize14, value)}> {size}</span>
            </div>

            <div>
                <span className={classnames(fontSize14, label)}><FormattedMessage id='quantityProduct' /></span>
                <span className={classnames(fontSize14, value)}> {count}</span>
            </div>
        </div>
    )
}

MoleculesDetaillist.propTypes = {
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

MoleculesDetaillist.defaultProps = {
}

export default ComponentInjector.return('MoleculesDetaillist', MoleculesDetaillist)
