import React, { useState } from 'react'
import PropTypes from 'prop-types' /* eslint-disable-line no-unused-vars */
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

import SmallScreen from '../../templates/responsive/small-screen'
import LargeScreen from '../../templates/responsive/large-screen'

import BrandedSlideInPanel from '../../templates/slide-in-panels/branded'
import OrganismsHeaderSlideIn from '../base/header-slide-in'

import BrandPanel from './panel/brand'
import MaterialPanel from './panel/material'
import PatternPanel from './panel/pattern'
import NewArrivalsPanel from './panel/new-arrivals'

import SizesSwipe from './swipe/sizes/sizes-swipe'
import SortingSwipe from './swipe/sorting/sotring-swipe'
import ColorsSwipe from './swipe/colors/colors-swipe'

import PriceInput from './input/price'
import SustainabilityInput from './input/sustainability'

import BrandDropdown from './dropdown/brand'
import MaterialDropdown from './dropdown/material'
import PatternDropdown from './dropdown/pattern'
import NewArrivalsDropdown from './dropdown/new-arrivals'
import SizeDropdown from './dropdown/size'
import SortDropdown from './dropdown/sort'
import ColorDropdown from './dropdown/color'
import PriceDropdown from './dropdown/price'
import SustainabilityDropdown from './dropdown/sustainability'
import Button from '../../atoms/buttons/button'

import { boundless, marginTop24 } from './filters.module.scss'
import { smallScreen } from '../../templates/responsive/responsive.module.scss'

import './filters.scss'

// MOCK DATA
import {
    brands, sb,
    materials, sm,
    patterns, sp,
    newArrivals, sna,
    sizes, sSize,
    sort, sSort,
    colors, sColor,
    sPrice,
    cSustainability,
} from './data'

const Filters = props => {
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [selectedSize, setSelectedSize] = useState(sSize)
    const [selectedSort, setSelectedSort] = useState(sSort)
    const [selectedColor, setSelectedColor] = useState(sColor)
    const [selectedPrice, setSelectedPrice] = useState(sPrice)
    const [checkedSustainability, setCheckedSustainability] = useState(cSustainability)

    const [filteredBrands, setFilteredBrands] = useState(brands)
    const [selectedBrands, setSelectedBrands] = useState(sb)
    const [selectedMaterials, setSelectedMaterials] = useState(sm)

    const [selectedPatterns, setSelectedPatterns] = useState(sp)
    const [selectedNewArrivals, setSelectedNewArrivals] = useState(sna)

    const [query, setQuery] = useState('')

    const handleQueryChange = (q) => {
        setQuery(q)

        if (q === '') {
            setFilteredBrands(brands)
            return
        }

        const startsWithQuery = (b) => { return (b.name.toLowerCase().startsWith(q.toLowerCase())) }
        setFilteredBrands(brands.filter(startsWithQuery))
    }

    const toggleSelection = (selectedItems, item) => {
        const newSelection = selectedItems.filter((i) => {
            return item.id !== i.id
        })

        if (newSelection.length < selectedItems.length) {
            return newSelection
        } else if (newSelection.length === selectedItems.length) {
            return [...selectedItems, item]
        }
    }

    const BoundlessBreak = () => {
        return (
            <div className={boundless}>
                <span className={classnames(`c-divider c-divider--break ${marginTop24}`)} />
            </div>
        )
    }

    const BoundlessBreakSmall = () => {
        return (
            <div className={boundless}>
                <span className={classnames(`c-divider`)} />
            </div>
        )
    }
    const menuStyle = { padding: '18px', width: '320px', marginTop: '12px' }

    return (
        <>
            <SmallScreen>
                <Button
                    type='quiet'
                    size='boss'
                    onClick={() => { setFiltersOpen(true) }}
                >
                    <FormattedMessage id={'filters.filter'} />
                </Button>
                <BrandedSlideInPanel
                    isOpen={filtersOpen}
                    overlayClassName={smallScreen}
                    header={<OrganismsHeaderSlideIn
                        onClose={() => { setFiltersOpen(false) }}
                        title={<FormattedMessage id={'filters.filter'} />}
                        showLeftBackIcon={false}
                    />}
                    footer={<Button size='boss' type='primary'><FormattedMessage id={'filters.showResults'} /></Button>}
                >

                    <SizesSwipe
                        sizes={sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />

                    <BoundlessBreak />

                    <SortingSwipe
                        sort={sort}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                    />

                    <BoundlessBreak />

                    <PriceInput
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                    />

                    <BoundlessBreak />

                    <ColorsSwipe
                        colors={colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                    />

                    <BoundlessBreak />

                    <BrandPanel
                        filteredBrands={filteredBrands}
                        selectedBrands={selectedBrands}
                        toggleSelectedBrands={(brand) => { setSelectedBrands(toggleSelection(selectedBrands, brand)) }}
                        query={query}
                        handleQueryChange={handleQueryChange}
                        overlayClassName={smallScreen}
                    />

                    <BoundlessBreakSmall />

                    <MaterialPanel
                        materials={materials}
                        selectedMaterials={selectedMaterials}
                        toggleSelectedMaterial={(material) => { setSelectedMaterials(toggleSelection(selectedMaterials, material)) }}
                        overlayClassName={smallScreen}
                    />

                    <BoundlessBreakSmall />

                    <PatternPanel
                        patterns={patterns}
                        selectedPatterns={selectedPatterns}
                        toggleSelectedPatterns={(pattern) => { setSelectedPatterns(toggleSelection(selectedPatterns, pattern)) }}
                        overlayClassName={smallScreen}
                    />

                    <BoundlessBreakSmall />

                    <NewArrivalsPanel
                        newArrivals={newArrivals}
                        selectedNewArrivals={selectedNewArrivals}
                        toggleSelectedNewArrivals={(newArrival) => { setSelectedNewArrivals(toggleSelection(selectedNewArrivals, newArrival)) }}
                        overlayClassName={smallScreen}
                    />

                    <BoundlessBreakSmall />

                    <SustainabilityInput
                        checkedSustainability={checkedSustainability}
                        setCheckedSustainability={setCheckedSustainability}
                    />
                </BrandedSlideInPanel>
            </SmallScreen>

            <LargeScreen>
                <div className='filterPlacements'>
                    <BrandDropdown
                        searchable
                        query={query}
                        handleQueryChange={handleQueryChange}

                        filteredBrands={filteredBrands}
                        selectedBrands={selectedBrands}
                        toggleSelectBrand={(brand) => { setSelectedBrands(toggleSelection(selectedBrands, brand)) }}
                        resetBrandSelection={() => { setSelectedBrands([]) }}
                        menuStyle={menuStyle}
                    />

                    <MaterialDropdown
                        materials={materials}
                        selectedMaterials={selectedMaterials}
                        toggleSelectedMaterial={(material) => { setSelectedMaterials(toggleSelection(selectedMaterials, material)) }}
                        resetMaterialSelection={() => { setSelectedMaterials([]) }}
                        menuStyle={menuStyle}
                    />

                    <PatternDropdown
                        patterns={patterns}
                        selectedPatterns={selectedPatterns}
                        toggleSelectedPatterns={(pattern) => { setSelectedPatterns(toggleSelection(selectedPatterns, pattern)) }}
                        resetPatternSelection={() => { setSelectedPatterns([]) }}
                        menuStyle={menuStyle}
                    />

                    <NewArrivalsDropdown
                        newArrivals={newArrivals}
                        selectedNewArrivals={selectedNewArrivals}
                        toggleSelectedNewArrivals={(newArrival) => { setSelectedNewArrivals(toggleSelection(selectedNewArrivals, newArrival)) }}
                        resetNewArrivalsSelection={() => { setSelectedNewArrivals([]) }}
                        menuStyle={menuStyle}
                    />

                    <SizeDropdown
                        sizes={sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        menuStyle={menuStyle}
                    />

                    <SortDropdown
                        sort={sort}
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        menuStyle={menuStyle}
                    />

                    <ColorDropdown
                        colors={colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        menuStyle={menuStyle}
                    />

                    <PriceDropdown
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                        menuStyle={menuStyle}
                    />

                    <SustainabilityDropdown
                        checkedSustainability={checkedSustainability}
                        setCheckedSustainability={setCheckedSustainability}
                    />
                </div>
            </LargeScreen>
        </>
    )
}

Filters.propTypes = {

}

export default Filters
