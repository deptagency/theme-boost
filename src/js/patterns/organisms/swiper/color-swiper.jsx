import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const OrganismsColorSwiper = ({ colors, className }) => {
    const selectedColor = '#000'

    return (
        <div className={`${className} o-swiper filter-colors`}>
            <div className='o-swiper__holder'>
                {colors.map((c, i) => {
                    return <div className='o-swiper__item u-text-center'>
                        <button
                            className={classnames({
                                'c-colorswatch__item': true,
                                'is-active': c === selectedColor,
                            })}
                            style={{ background: `${c}` }}
                         />
                        <span className='u-text-xs'>{c}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

OrganismsColorSwiper.defaultProps = {
    colors: ['#98E076', '#3A42F1', '#000', 'gray', '#FFCE18', '#FCEA46', 'brown', 'beige'],
    className: '',
}

OrganismsColorSwiper.propTypes = {
    colors: PropTypes.array.isRequired,
    className: PropTypes.string,
}

export default OrganismsColorSwiper
