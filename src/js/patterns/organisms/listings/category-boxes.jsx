import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class OrganismsCategoryBoxes extends Component {
    render () {
        return (
            <div>
                <section className='o-distance'>
                    <div className='category-boxes'>
                        <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <a href='' title='' className='c-link'>Mütze</a>
                            </div>
                        </div>
                        <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <a href='' title='' className='c-link'>Mütze</a>
                            </div>
                        </div>
                        <a href='' title='' className='c-chip u-aspect-ratio-1x1 o-head-up'>
                            <div className='o-head-up__item o-head-up__item--middle'>
                                <span className='c-link'>Mütze</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsCategoryBoxes.propTypes = {}

OrganismsCategoryBoxes.defaultProps = {}

export default ComponentInjector.return('OrganismsCategoryBoxes', OrganismsCategoryBoxes)
