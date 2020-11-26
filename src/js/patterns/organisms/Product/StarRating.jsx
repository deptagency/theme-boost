import React from 'react'

import { ReactComponent as IconStar } from 'Icons/tailwind-icons/icon-star.svg'
import { ReactComponent as IconStarFull } from 'Icons/tailwind-icons/icon-star-full.svg'

const StarRating = ({ numStars = 0, numReviews = 0, className = '' }) => {
    const stars = new Array(5).fill(0).map((e, i) => (i < numStars ? <IconStarFull key={i} /> : <IconStar key={i} />))

    return (
        <div className={`flex items-center ${className}`}>
            {stars}
            <span className='text-xs text-neutral-700 pl-2'>({numReviews})</span>
        </div>
    )
}

export default StarRating
