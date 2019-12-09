import React from 'react'
// import PropTypes from 'prop-types'
import MoleculesRating from '../../molecules/ratings/rating'
import {
    reviewsListText,
    reviewersName,
} from './panels/reviews-panel.module.scss'

const ReviewsList = props => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                    <div key={i} className={`${reviewersName} u-text-strong o-distance-l`}>
                        Beatrice
                        <MoleculesRating className='o-distance-xs' />
                        <div className={`${reviewsListText} u-text-normal o-distance-xs `}>
                            Tolles Kleid, es sieht sehr elegant aus. Ich bin zur Zeit schwanger und das Kleid passt trotzdem perfekt.
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// ReviewsList.propTypes = {}

export default ReviewsList
