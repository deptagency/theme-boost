import React from 'react'
// import PropTypes from 'prop-types'
import MoleculesRating from '../../molecules/ratings/rating'

const ReviewsList = props => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                    <div key={i} className='u-text-strong o-distance-l'>
                        Beatrice
                        <MoleculesRating className='o-distance-xs' />
                        <div className='u-text-normal o-distance-xs'>
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
