import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'


import { ReactComponent as SingleNeutralCircleIcon } from '../../../../icons/single-neutral-circle.svg'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsHeaderMobile extends Component {
    render () {
        const Component = this.props.component

        return (
            <Component
                {..._.omit(this.props, ['children', 'component', 'className', 'theme'])}
                className={classnames(
                'c-header',
                this.props.className,
                this.props.theme
              )}
                >
                <div className='o-container c-header__wrapper'>
                    <div className='o-list-inline o-list-inline--vertical-centered'>
                        <svg className='c-icon c-icon--s o-list-inline__item' x='0px' y='0px' viewBox='0 0 200 200'>
                            <g id='Menue'>
                                <g>
                                    <path className='st0' d='M186.5,42.2h-173C6,42.2,0,36.1,0,28.7s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5S194,42.2,186.5,42.2z' />
                                </g>
                                <g>
                                    {/* eslint-disable */}
                                    <path className='st0' d='M186.5,113.2h-173C6,113.2,0,107.1,0,99.7s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5
                    			S194,113.2,186.5,113.2z' />
                                    {/* eslint-enable */}
                                </g>
                                <g>
                                    {/* eslint-disable */}
                                    <path className='st0' d='M186.5,184.2h-173c-7.5,0-13.5-6-13.5-13.5s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5
                    			S194,184.2,186.5,184.2z' />
                                    {/* eslint-enable */}
                                </g>
                            </g>
                        </svg>
                        <a href='' title='Boost Theme' className='c-logo o-list-inline__item'>Boost Theme</a>
                    </div>
                    <div className='o-list-inline o-list-inline--vertical-centered'>
                        <a href='' title='' className='c-link c-link--uniform o-list-inline__item u-line-height-reset u-text-center u-hidden-until-large'>
                            <SingleNeutralCircleIcon className='c-icon c-icon--s' />
                            <p className='u-text-xxs u-line-height-reset'>Profile</p>
                        </a>
                        <button className='o-list-inline__item u-line-height-reset u-text-center'>
                            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' className='c-icon c-icon--s' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z' />
                            </svg>
                            <p className='u-text-xxs u-line-height-reset'>Search</p>
                        </button>
                        <a href='' title='Wishlist' className='c-link c-link--uniform o-list-inline__item u-line-height-reset u-text-center'>
                            <svg className='c-icon c-icon--s' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>love-it-alternate</title><path d='M23.305,5.075A6.583,6.583,0,0,0,12.858,3.367L12,4.148l-.828-.754A6.525,6.525,0,0,0,5.485,1.587,6.476,6.476,0,0,0,.7,5.075,6.4,6.4,0,0,0,1.91,12.544L11.283,22.2a1,1,0,0,0,1.434,0l9.359-9.638A6.416,6.416,0,0,0,23.305,5.075Zm-2.648,6.076-8.3,8.545a.5.5,0,0,1-.717,0l-8.313-8.56A4.419,4.419,0,0,1,2.48,5.98,4.494,4.494,0,0,1,5.806,3.562,4.564,4.564,0,0,1,9.8,4.845l1.53,1.4a1,1,0,0,0,1.347,0l1.561-1.423A4.546,4.546,0,0,1,18.2,3.562,4.492,4.492,0,0,1,21.521,5.98,4.427,4.427,0,0,1,20.657,11.151Z' /></svg>
                            <p className='u-text-xxs u-line-height-reset'>Wishlist</p>
                        </a>
                        <a href='' title='Cart' className='c-link c-link--uniform o-list-inline__item u-line-height-reset u-text-center'>
                            <svg
                                className='c-icon c-icon--s'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M24 2.5C24 2.33585 23.9677 2.1733 23.9048 2.02165C23.842 1.86999 23.7499 1.73219 23.6339 1.61612C23.5178 1.50004 23.38 1.40797 23.2283 1.34515C23.0767 1.28233 22.9141 1.25 22.75 1.25H20.441C20.0138 1.24955 19.6012 1.40507 19.2807 1.68734C18.9601 1.96962 18.7536 2.35924 18.7 2.783L18.419 5.031C18.4114 5.09145 18.3821 5.14707 18.3364 5.18739C18.2907 5.22772 18.2319 5.24998 18.171 5.25H2.75198C2.32016 5.24984 1.89437 5.35141 1.50912 5.54648C1.12387 5.74155 0.78999 6.02464 0.53454 6.3728C0.279091 6.72097 0.109255 7.12441 0.0387949 7.55045C-0.0316652 7.97649 -0.000767723 8.41313 0.128984 8.825L2.18998 15.318C2.3623 15.8791 2.71055 16.3698 3.18326 16.7177C3.65596 17.0656 4.22805 17.2523 4.81498 17.25H17.142C17.6802 17.2525 18.2012 17.061 18.6097 16.7106C19.0181 16.3602 19.2866 15.8743 19.366 15.342L20.082 10.686C20.1069 10.5238 20.0997 10.3582 20.0606 10.1987C20.0216 10.0393 19.9515 9.88909 19.8545 9.75672C19.7574 9.62435 19.6352 9.5124 19.4948 9.42726C19.3545 9.34212 19.1987 9.28545 19.0365 9.2605C18.8742 9.23555 18.7087 9.2428 18.5492 9.28184C18.3898 9.32088 18.2396 9.39094 18.1072 9.48802C17.9748 9.5851 17.8629 9.70731 17.7777 9.84766C17.6926 9.98801 17.6359 10.1438 17.611 10.306L16.96 14.538C16.9511 14.5971 16.9213 14.651 16.8759 14.6899C16.8306 14.7289 16.7727 14.7502 16.713 14.75H4.81498C4.76059 14.7502 4.70763 14.7326 4.66414 14.6999C4.62065 14.6672 4.589 14.6213 4.57398 14.569L2.51298 8.069C2.50158 8.03164 2.49908 7.99212 2.50571 7.95362C2.51233 7.91512 2.52788 7.8787 2.55112 7.8473C2.57436 7.81589 2.60463 7.79037 2.63952 7.77278C2.6744 7.75519 2.71292 7.74602 2.75198 7.746H18.616C19.1639 7.74535 19.6928 7.54525 20.1039 7.18308C20.515 6.82091 20.7803 6.32144 20.85 5.778L21.076 3.969C21.0835 3.90855 21.1129 3.85293 21.1586 3.81261C21.2042 3.77228 21.2631 3.75002 21.324 3.75H22.75C22.9141 3.75 23.0767 3.71767 23.2283 3.65485C23.38 3.59203 23.5178 3.49996 23.6339 3.38388C23.7499 3.26781 23.842 3.13001 23.9048 2.97836C23.9677 2.8267 24 2.66415 24 2.5Z'
                                    fill='black'
                            />
                                <path
                                    d='M6.75195 22.75C7.99459 22.75 9.00195 21.7426 9.00195 20.5C9.00195 19.2574 7.99459 18.25 6.75195 18.25C5.50931 18.25 4.50195 19.2574 4.50195 20.5C4.50195 21.7426 5.50931 22.75 6.75195 22.75Z'
                                    fill='black'
                            />
                                <path
                                    d='M16.5 22.75C17.7426 22.75 18.75 21.7426 18.75 20.5C18.75 19.2574 17.7426 18.25 16.5 18.25C15.2574 18.25 14.25 19.2574 14.25 20.5C14.25 21.7426 15.2574 22.75 16.5 22.75Z'
                                    fill='black'
                            />
                            </svg>
                            <p className='u-text-xxs u-line-height-reset'>Cart</p>
                        </a>
                    </div>
                </div>
            </Component>
        )
    }
}

OrganismsHeaderMobile.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    theme: PropTypes.string,
}

OrganismsHeaderMobile.defaultProps = {
    component: 'header',
    theme: '',
    className: '',
}

export default ComponentInjector.return('OrganismsHeaderMobile', OrganismsHeaderMobile)
