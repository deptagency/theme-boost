import React, { Component, Fragment } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFilterBar extends Component {
    render () {
        return (
            <Fragment>
                <div className='c-filter-bar'>
                    <div className='c-filter-bar__main'>
                        <div className='c-filter-bar__main__item'>
                            <select name='' id=''>
                                <option value=''>Größe</option>
                                <option value=''>32</option>
                                <option value=''>34</option>
                                <option value=''>36</option>
                                <option value=''>38</option>
                                <option value=''>40</option>
                            </select>
                        </div>
                        <div className='c-filter-bar__main__item'>
                            <select name='' id=''>
                                <option value=''>Marke</option>
                                <option value=''>Esprit</option>
                                <option value=''>Prada</option>
                                <option value=''>Tom Tailor</option>
                                <option value=''>Tommy Hilfiger</option>
                            </select>
                        </div>
                    </div>
                    <div className='c-filter-bar__offset'>
                        <button className='c-button c-button--quite u-full-width'>
                            <span>Mehr Filter</span>
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

OrganismsFilterBar.propTypes = {}

OrganismsFilterBar.defaultProps = {}

export default ComponentInjector.return('OrganismsFilterBar', OrganismsFilterBar)
