import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsCategoryBoxes extends Component {
    render () {
        // eslint-disable-next-line no-unused-vars
        const { firstLabel, firstLink, secondLabel, secondLink, thirdLabel, thirdLink } = this.props

        return (
            <div>
                <section className='o-distance'>
                    <div className='category-boxes'>
                        <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <a href='' title='' className='c-link'>{firstLabel}</a>
                            </div>
                        </div>
                        <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <a href='' title='' className='c-link'>{secondLabel}</a>
                            </div>
                        </div>
                        <a href='' title='' className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <span className='c-link'>{thirdLabel}</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsCategoryBoxes.propTypes = {
    firstLabel: PropTypes.string.isRequired,
    firstLink: PropTypes.string.isRequired,
    secondLabel: PropTypes.string.isRequired,
    secondLink: PropTypes.string.isRequired,
    thirdLabel: PropTypes.string.isRequired,
    thirdLink: PropTypes.string.isRequired,
}

OrganismsCategoryBoxes.defaultProps = {
}

export default ComponentInjector.return('OrganismsCategoryBoxes', OrganismsCategoryBoxes)
