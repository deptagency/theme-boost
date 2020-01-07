import React from 'react'
import PropTypes from 'prop-types'
import AtomsFormLabel from '../atoms/forms/form-label'
import OrganismsHeaderSlideIn from '../organisms/base/header-slide-in'
import OrganismsSizes from '../organisms/sizes/sizes'
import MoleculesFormFromTo from '../molecules/forms/form-element-from-to'
import MobileSwipe from './mobile-swipe'
import OrganismsSorting from '../organisms/sorting/sorting'
import MoleculesButton from '../atoms/buttons/button'
import ReferalBordered from '../atoms/links/referal-bordered'
// import MoleculesColorsFilter from '../molecules/colorsfilter/colors-filter'
import arrowLeft from '../../../icons/arrow-left.svg'

const TemplatesFilter = ({ setIsOpen, count }) => {
    return (
        <div className='o-television is-active u-background-color-default'>
            <OrganismsHeaderSlideIn title='Filter' className='o-television__bar' />
            <div className='o-television__display u-background-color-ghost'>
                <div>
                    <AtomsFormLabel className='c-title-level-4' value='Größe' />
                    <div className='o-television__display__boundless o-distance-s'>
                        <MobileSwipe sliderId='swipe-sizes'>
                            <OrganismsSizes />
                        </MobileSwipe>
                    </div>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <AtomsFormLabel className='c-title-level-4' value='Sortierung' />
                    <div className='o-television__display__boundless o-distance-s'>
                        <MobileSwipe sliderId='swipe-sorting'>
                            <OrganismsSorting />
                        </MobileSwipe>
                    </div>
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <AtomsFormLabel className='c-title-level-4' value='Preis' />
                    <MoleculesFormFromTo className='o-distance-s' />
                </div>
                <div className='o-television__display__boundless'>
                    <span className='c-divider c-divider--break o-distance-m' />
                </div>
                <div className='o-distance-m'>
                    <AtomsFormLabel className='c-title-level-4' value='Marke' />
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
                    <AtomsFormLabel className='c-title-level-4' value='Farbe' />
                    <MobileSwipe sliderId='swipe-colors' className='o-distance-s'>
                        {/* <MoleculesColorsFilter /> */}
                    </MobileSwipe>
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
                <div className='c-box u-background-color-default o-television__display__boundless o-television__bouncer o-distance-m' />
            </div>
            <div className='o-television__remote-control u-background-color-default'>
                <MoleculesButton type='primary' size='boss'>
                    {count} Ergebnisse anzeigen
                </MoleculesButton>
            </div>
        </div>
    )
}

TemplatesFilter.defaultProps = {
    setIsOpen: () => {},
    count: 429,
}

TemplatesFilter.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}

export default TemplatesFilter
