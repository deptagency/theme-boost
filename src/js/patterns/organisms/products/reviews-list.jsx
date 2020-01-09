import React from 'react'
// import PropTypes from 'prop-types'
import Rating from '../../molecules/ratings/rating'

const ReviewsList = props => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                return (
                    <div key={i} className='o-distance-l'>
                        <p className='u-text-strong'>Beatrice</p>
                        <Rating className='o-distance-s' />
                        <p className='o-distance-s'>
                            Tolles Kleid, es sieht sehr elegant aus. Ich bin zur Zeit schwanger und das Kleid passt trotzdem perfekt.
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

// ReviewsList.propTypes = {}

export default ReviewsList
