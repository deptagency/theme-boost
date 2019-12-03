import React from 'react'
import PropTypes from 'prop-types'
import AtomsFormLabel from '../atoms/forms/form-label'
import OrganismsHeaderSlideIn from '../organisms/base/header-slide-in'
import OrganismsSizes from '../organisms/sizes/sizes'
import MoleculesFormFromTo from '../molecules/forms/form-element-from-to'
import MobileSwipe from './mobile-swipe'
import OrganismsSorting from '../organisms/sorting/sorting'
import MoleculesButton from '../molecules/buttons/button'
import MoleculesColorsFilter from '../molecules/colorsfilter/colors-filter'
import arrowLeft from '../../../../icons/arrow-left.svg'

const TemplatesFilter = ({ setIsOpen, count }) => {
    return (
        <div className='filter-panel'>
            <OrganismsHeaderSlideIn title='Filter' />
            <div className='filter-content'>

                <div className='filter-component'>
                    <AtomsFormLabel className='filter-input-label' value='Größe' />
                    <MobileSwipe sliderId='swipe-sizes'>
                        <OrganismsSizes />
                    </MobileSwipe>
                </div>

                <div className='filter-component'>
                    <AtomsFormLabel className='filter-input-label' value='Sortierung' />
                    <MobileSwipe sliderId='swipe-sorting'>
                        <OrganismsSorting />
                    </MobileSwipe>
                </div>

                <div className='filter-component'>
                    <AtomsFormLabel className='filter-input-label' value='Preis' />
                    <MoleculesFormFromTo className='extra-margin' />
                </div>

                <div className='filter-component'>
                    <AtomsFormLabel className='filter-input-label' value='Marke' />
                    <select className='extra-margin' id='' name='select'>
                        <option>Bitte auswählen</option>
                        <option value='Value A'>Value A</option>
                        <option value='Value B'>Value B</option>
                        <option value='Value C'>Value C</option>
                        <option value='Value D'>Value D</option>
                    </select>

                </div>

                <div className='filter-component'>
                    <AtomsFormLabel className='filter-input-label' value='Farbe' />
                    <MobileSwipe sliderId='swipe-colors'>
                        <MoleculesColorsFilter />
                    </MobileSwipe>
                </div>

                <div className='filter-component filter-component--collapsed'>
                    Material
                    <img src={arrowLeft} alt='arrow left' />
                </div>
                <div className='filter-component filter-component--collapsed'>
                    Muster
                    <img src={arrowLeft} alt='arrow left' />
                </div>
                <div className='filter-component filter-component--collapsed'>
                    Obermaterial
                    <img src={arrowLeft} alt='arrow left' />
                </div>
                <div className='filter-component filter-component--collapsed'>
                    Neuheiten
                    <img src={arrowLeft} alt='arrow left' />
                </div>

                <MoleculesButton className='button-show-filter-results' type='primary'>
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
