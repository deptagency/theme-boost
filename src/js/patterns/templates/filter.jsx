import React from 'react'
import PropTypes from 'prop-types'
import Label from '../atoms/forms/label'
import HeaderSlideIn from '../organisms/base/header-slide-in'
import Sizes from '../organisms/sizes/sizes'
import FromTo from '../organisms/form/from-to'
import Swipe from './mobile-swipe'
import Sorting from '../organisms/sorting/sorting'
import Button from '../atoms/buttons/button'
import ReferalBordered from '../atoms/links/referal-bordered'
// import MoleculesColorsFilter from '../molecules/colorsfilter/colors-filter'
import arrowLeft from '../../../icons/arrow-left.svg'

const Filter = ({ setIsOpen, count }) => {
    return (
        <div className='o-television is-active u-background-color-default'>
            <HeaderSlideIn title='Filter' className='o-television__bar' />
            <div className='o-television__display u-background-color-ghost'>
                <div>
                    <Label className='c-title-level-4' value='Größe' />
                    <div className='o-television__display__boundless o-distance-s'>
                        <Swipe sliderId='swipe-sizes'>
                            <Sizes />
                        </Swipe>
                    </div>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <Label className='c-title-level-4' value='Sortierung' />
                    <div className='o-television__display__boundless o-distance-s'>
                        <Swipe sliderId='swipe-sorting'>
                            <Sorting />
                        </Swipe>
                    </div>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <Label className='c-title-level-4' value='Preis' />
                    <FromTo className='o-distance-s' />
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <Label className='c-title-level-4' value='Marke' />
                    <select id='' name='select' className='o-distance-s u-full-width'>
                        <option>Bitte auswählen</option>
                        <option value='Value A'>Value A</option>
                        <option value='Value B'>Value B</option>
                        <option value='Value C'>Value C</option>
                        <option value='Value D'>Value D</option>
                    </select>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <Label className='c-title-level-4' value='Farbe' />
                    <Swipe sliderId='swipe-colors' className='o-distance-s'>
                        {/* <MoleculesColorsFilter /> */}
                    </Swipe>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <ReferalBordered title='Material' />
                    <ReferalBordered title='Muster' />
                    <ReferalBordered title='Obermaterial' />
                    <ReferalBordered title='Neuheiten' />
                </div>
                <div className='u-background-color-default o-television__bouncer o-distance-m' />
            </div>
            <div className='o-television__remote-control u-background-color-default'>
                <Button type='primary' size='boss'>
                    {count} Ergebnisse anzeigen
                </Button>
            </div>
        </div>
    )
}

Filter.defaultProps = {
    setIsOpen: () => {},
    count: 429,
}

Filter.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}

export default Filter
