import React from 'react'
import { useSelector } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import StarRating from '../../../../patterns/organisms/Product/StarRating'

const rand = (min, max) => Math.round(Math.random() * (max - min) + min)

function ProductRating() {
    return (
        <div className='mb-6'>
            <StarRating numStars={rand(0, 5)} numReviews={rand(0, 100)} />
        </div>
    )
}

export default tastify()(ProductRating)
