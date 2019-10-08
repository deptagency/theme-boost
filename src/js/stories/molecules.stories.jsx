import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MoleculesButton from 'js/patterns/catwalk-frontend/molecules/buttons/button'
import MoleculesIcon from 'js/patterns/catwalk-frontend/molecules/icons/icon'
import MoleculesReferal from 'js/patterns/catwalk-frontend/molecules/links/referal'
import MoleculesReferalOneLiner from 'js/patterns/catwalk-frontend/molecules/links/referal-one-liner'
import MoleculesFormUnit from 'js/patterns/catwalk-frontend/molecules/forms/form-unit'
import MoleculesBadge from 'js/patterns/catwalk-frontend/molecules/badges/badge'
import MoleculesBreadcrumb from 'js/patterns/catwalk-frontend/molecules/breadcrumbs/breadcrumb'
import MoleculesPagination from 'js/patterns/catwalk-frontend/molecules/paginations/pagination'
import MoleculesRating from 'js/patterns/catwalk-frontend/molecules/ratings/rating'
import MoleculesColorSwatch from 'js/patterns/catwalk-frontend/molecules/colorswatches/colorswatch'
import MoleculesTitle from 'js/patterns/catwalk-frontend/molecules/title/title'
import MoleculesTopic from 'js/patterns/catwalk-frontend/molecules/topic/topic'
import MoleculesCart from 'js/patterns/catwalk-frontend/molecules/carts/cart'
import MoleculesWishlist from 'js/patterns/catwalk-frontend/molecules/wishlist/wishlist'
import MoleculesPrice from 'js/patterns/catwalk-frontend/molecules/prices/price'
import MoleculesDetaillist from 'js/patterns/catwalk-frontend/molecules/lists/detaillist'
import MoleculesColorsFilter from 'js/patterns/catwalk-frontend/molecules/colorsfilter/colors-filter'

storiesOf('2.Molecules|Badges', module)
    .add('All Badges', () => {
        return (
            <div>
                <p className='o-distance-m'>
                    <MoleculesBadge>
          Neu
                    </MoleculesBadge>
                </p>
                <p className='o-distance-m'>
                    <MoleculesBadge type='quiet'>
          Neu
                    </MoleculesBadge>
                </p>
                <p className='o-distance-m'>
                    <MoleculesBadge type='spot'>
          Neu
                    </MoleculesBadge>
                </p>
                <p className='o-distance-m'>
                    <MoleculesBadge type='danger'>
          Sale
                    </MoleculesBadge>
                </p>
            </div>
        )
    })
storiesOf('2.Molecules|Chips', module)
    .add('All', () => {
        return (
            <div>
                <h3>Chip Default</h3>
                <div className='c-chip'>
                    <span>Blau</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
                <h3 className='o-distance'>Chip Selected</h3>
                <div className='c-chip c-chip--selected'>
                    <span>Blau</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
                <h3 className='o-distance'>Chip Active</h3>
                <div className='c-chip is-active'>
                    <span>Blau</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
                <h3 className='o-distance'>Chip to choose</h3>
                <button className='c-chip'>
        Blau
                </button>
                <h3 className='o-distance'>Active Chip to choose</h3>
                <button className='c-chip is-active'>
        Blau
                </button>
            </div>
        )
    })
storiesOf('2.Molecules|Titles', module)
    .add('All', () => {
        return (
            <div>
                <p className='c-title'>Title</p>
                <p className='c-title-level-1'>Title Level 1</p>
                <p className='c-title-level-2'>Title Level 2</p>
                <p className='c-title-level-3'>Title Level 3</p>
                <p className='c-title-level-4'>Title Level 4</p>
                <p className='c-category-title'>Category Title</p>
                <p className='c-topic'>Topic</p>
            </div>
        )
    })
storiesOf('2.Molecules|Lists', module)
    .add('Detaillist', () => {
        return (
            <div>
                <MoleculesDetaillist />
            </div>
        )
    })
storiesOf('2.Molecules|Links', module)
    .add('Links', () => {
        return (
            <div>
                <p className='c-link'>Link</p>
                <p className='c-link c-link--ghost'>Link</p>
                <p className='c-link c-link--uniform'>Link</p>

                <a href='' className='c-link o-block-short'>
                    <svg
                        className='c-icon o-block-short__short-item u-line-height-fix-tiny'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
        >
                        <path
                            d='M24 2.5C24 2.33585 23.9677 2.1733 23.9048 2.02165C23.842 1.86999 23.7499 1.73219 23.6339 1.61612C23.5178 1.50004 23.38 1.40797 23.2283 1.34515C23.0767 1.28233 22.9141 1.25 22.75 1.25H20.441C20.0138 1.24955 19.6012 1.40507 19.2807 1.68734C18.9601 1.96962 18.7536 2.35924 18.7 2.783L18.419 5.031C18.4114 5.09145 18.3821 5.14707 18.3364 5.18739C18.2907 5.22772 18.2319 5.24998 18.171 5.25H2.75198C2.32016 5.24984 1.89437 5.35141 1.50912 5.54648C1.12387 5.74155 0.78999 6.02464 0.53454 6.3728C0.279091 6.72097 0.109255 7.12441 0.0387949 7.55045C-0.0316652 7.97649 -0.000767723 8.41313 0.128984 8.825L2.18998 15.318C2.3623 15.8791 2.71055 16.3698 3.18326 16.7177C3.65596 17.0656 4.22805 17.2523 4.81498 17.25H17.142C17.6802 17.2525 18.2012 17.061 18.6097 16.7106C19.0181 16.3602 19.2866 15.8743 19.366 15.342L20.082 10.686C20.1069 10.5238 20.0997 10.3582 20.0606 10.1987C20.0216 10.0393 19.9515 9.88909 19.8545 9.75672C19.7574 9.62435 19.6352 9.5124 19.4948 9.42726C19.3545 9.34212 19.1987 9.28545 19.0365 9.2605C18.8742 9.23555 18.7087 9.2428 18.5492 9.28184C18.3898 9.32088 18.2396 9.39094 18.1072 9.48802C17.9748 9.5851 17.8629 9.70731 17.7777 9.84766C17.6926 9.98801 17.6359 10.1438 17.611 10.306L16.96 14.538C16.9511 14.5971 16.9213 14.651 16.8759 14.6899C16.8306 14.7289 16.7727 14.7502 16.713 14.75H4.81498C4.76059 14.7502 4.70763 14.7326 4.66414 14.6999C4.62065 14.6672 4.589 14.6213 4.57398 14.569L2.51298 8.069C2.50158 8.03164 2.49908 7.99212 2.50571 7.95362C2.51233 7.91512 2.52788 7.8787 2.55112 7.8473C2.57436 7.81589 2.60463 7.79037 2.63952 7.77278C2.6744 7.75519 2.71292 7.74602 2.75198 7.746H18.616C19.1639 7.74535 19.6928 7.54525 20.1039 7.18308C20.515 6.82091 20.7803 6.32144 20.85 5.778L21.076 3.969C21.0835 3.90855 21.1129 3.85293 21.1586 3.81261C21.2042 3.77228 21.2631 3.75002 21.324 3.75H22.75C22.9141 3.75 23.0767 3.71767 23.2283 3.65485C23.38 3.59203 23.5178 3.49996 23.6339 3.38388C23.7499 3.26781 23.842 3.13001 23.9048 2.97836C23.9677 2.8267 24 2.66415 24 2.5Z'
          />
                        <path
                            d='M6.75195 22.75C7.99459 22.75 9.00195 21.7426 9.00195 20.5C9.00195 19.2574 7.99459 18.25 6.75195 18.25C5.50931 18.25 4.50195 19.2574 4.50195 20.5C4.50195 21.7426 5.50931 22.75 6.75195 22.75Z'
          />
                        <path
                            d='M16.5 22.75C17.7426 22.75 18.75 21.7426 18.75 20.5C18.75 19.2574 17.7426 18.25 16.5 18.25C15.2574 18.25 14.25 19.2574 14.25 20.5C14.25 21.7426 15.2574 22.75 16.5 22.75Z'
          />
                    </svg>
                    <span className='o-block-short__body'>Link with Icon</span>
                </a>
            </div>
        )
    })
    .add('Referal', () => {
        return (
            <MoleculesReferal />
        )
    })
    .add('Referal One Liner', () => {
        return (
            <MoleculesReferalOneLiner />
        )
    })
storiesOf('2.Molecules|Buttons', module)
    .add('All Buttons', () => {
        return (
            <div>
                <p>
                    <MoleculesButton onClick={action('clicked')}>Default Button</MoleculesButton>
                </p>
                <p>
                    <MoleculesButton type='quiet' onClick={action('clicked')}>
                Quiet Button
                    </MoleculesButton>
                </p>
                <p>
                    <MoleculesButton type='ghost' onClick={action('clicked')}>
                Ghost Button
                    </MoleculesButton>
                </p>
                <p>
                    <MoleculesButton type='plain' onClick={action('clicked')}>
                Plain Button
                    </MoleculesButton>
                </p>
                <p>
                    <MoleculesButton type='destructive' onClick={action('clicked')}>Destructive Button</MoleculesButton>
                </p>
                <p>
                    <MoleculesButton type='minion' onClick={action('clicked')}>
                Minion Button
                    </MoleculesButton>
                </p>
            </div>
        )
    })

storiesOf('2.Molecules|Forms', module)
    .add('Radio', () => {
        return (
            <div>
                <h3>Default Radio</h3>
                <div className='c-form-radio'>
                    <input type='radio' id='inp-radio-01' name='radio' className='c-form-radio__input' />
                    <span className='c-form-radio__backdrop' />
                </div>
                <h3 className='o-distance'>Checked Radio</h3>
                <div className='c-form-radio'>
                    <input type='radio' id='inp-radio-01' name='radio' className='c-form-radio__input' checked />
                    <span className='c-form-radio__backdrop' />
                </div>
            </div>
        )
    })
    .add('Checkbox', () => {
        return (
            <div>
                <h3>Default Checkbox</h3>
                <div className='c-form-checkbox'>
                    <input type='checkbox' id='inp-checkbox-01' name='checkbox' className='c-form-checkbox__input' />
                    <span className='c-form-checkbox__backdrop' />
                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                        <path
                            id='Check'
                            className='st0'
                            d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
            c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
            C203,40.1,200.1,25.5,189.3,18.4z'
              />
                    </svg>
                </div>
                <h3 className='o-distance'>Active Checkbox</h3>
                <div className='c-form-checkbox'>
                    <input type='checkbox' id='inp-checkbox-01' name='checkbox' className='c-form-checkbox__input' checked />
                    <span className='c-form-checkbox__backdrop' />
                    <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                        <path
                            id='Check'
                            className='st0'
                            d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
            c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
            C203,40.1,200.1,25.5,189.3,18.4z'
              />
                    </svg>
                </div>
            </div>
        )
    })
    .add('Unit', () => {
        return (
            <div>
                <MoleculesFormUnit />
            </div>
        )
    })
    .add('Help Text', () => {
        return (
            <p className='c-form-help-text'>Help Text</p>
        )
    })
    .add('Choice', () => {
        return (
            <div>
                <div className='o-block-short'>
                    <div className='o-block-short__short-item'>
                        <div className='c-form-checkbox'>
                            <input
                                type='checkbox'
                                id='inp-checkbox-02'
                                name='checkbox'
                                className='c-form-checkbox__input'
                  />
                            <span className='c-form-checkbox__backdrop' />
                            <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                <path
                                    id='Check'
                                    className='st0'
                                    d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
            c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
            C203,40.1,200.1,25.5,189.3,18.4z'
                      />
                            </svg>
                        </div>
                    </div>
                    <div className='o-block-short__body'>
                        <label htmlFor='inp-checkbox-02' className='c-form-label'>
                  Checkbox
                        </label>
                    </div>
                </div>
                <div className='o-block-short'>
                    <div className='o-block-short__short-item'>
                        <div className='c-form-checkbox'>
                            <input
                                type='checkbox'
                                id='inp-checkbox-03'
                                name='checkbox'
                                className='c-form-checkbox__input'
                                checked
                />
                            <span className='c-form-checkbox__backdrop' />
                            <svg className='c-form-checkbox__icon' x='0px' y='0px' viewBox='0 0 200 200'>
                                <path
                                    id='Check'
                                    className='st0'
                                    d='M189.3,18.4c-10-6.6-23.4-4.6-31.1,4.7L81.1,127.9L37.2,95.6c-10.4-7.7-25-5.4-32.7,4.9
          c-7.7,10.4-5.4,25,4.9,32.7l0,0l60,44.2c5.7,4.2,13,5.6,19.9,3.7c6.7-0.4,13.1-3.5,17.4-9.3l89.2-121
          C203,40.1,200.1,25.5,189.3,18.4z'
                    />
                            </svg>
                        </div>
                    </div>
                    <div className='o-block-short__body'>
                        <label htmlFor='inp-checkbox-03' className='c-form-label'>
                Checkbox
                        </label>
                    </div>
                </div>
            </div>
        )
    })

storiesOf('2.Molecules|Breadcrumbs', module)
    .add('Default', () => {
        return (
            <MoleculesBreadcrumb />
        )
    })

storiesOf('2.Molecules|Paginations', module)
    .add('Default', () => {
        return (
            <MoleculesPagination />
        )
    })

storiesOf('2.Molecules|Ratings', module)
    .add('Default', () => {
        return (
            <MoleculesRating />
        )
    })

storiesOf('2.Molecules|Swatches', module)
    .add('Default', () => {
        return (
            <MoleculesColorSwatch />
        )
    })

storiesOf('2.Molecules|Title', module)
    .add('Default', () => {
        return (
            <MoleculesTitle />
        )
    })

storiesOf('2.Molecules|Topic', module)
    .add('Default', () => {
        return (
            <MoleculesTopic />
        )
    })

storiesOf('2.Molecules|Cart', module)
    .add('Default', () => {
        return (
            <MoleculesCart />
        )
    })

storiesOf('2.Molecules|Wishlist', module)
    .add('Default', () => {
        return (
            <MoleculesWishlist />
        )
    })

storiesOf('2.Molecules|Price', module)
    .add('Default', () => {
        return (
            <MoleculesPrice />
        )
    })

storiesOf('2.Molecules|Icons', module)
    .add('Default', () => {
        return (
            <MoleculesIcon />
        )
    })

storiesOf('2.Molecules|Color Selector', module)
    .add('Default', () => {
        return (
            <MoleculesColorsFilter />
        )
    })
