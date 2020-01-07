import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Addressblock extends Component {
    render () {
        const Component = this.props.component

        return (
            <Component>
                <div className='o-grid o-grid--side-by-side'>
                    <address>
                        <span className='u-text-strong'>Tim Hartmann</span> <br />
                        Ewaldstr. 2 <br />
                        59174 Kamen <br />
                        Deutschland
                    </address>
                    {this.props.editable ?
                        <a href='' className='c-link o-block-short'>
                            <svg className='c-icon o-block-short__short-item u-line-height-fix-tiny' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0)'>
                                    <path d='M9.24126 5.48401C9.17761 5.42371 9.09327 5.39011 9.00559 5.39011C8.91791 5.39011 8.83357 5.42371 8.76992 5.48401L4.84192 9.41201C4.81024 9.4442 4.7851 9.48224 4.76792 9.52401L4.02392 11.3853C3.99968 11.4459 3.9937 11.5121 4.00673 11.576C4.01977 11.6399 4.05124 11.6985 4.09726 11.7447C4.14394 11.7901 4.20268 11.8212 4.2665 11.8342C4.33032 11.8472 4.39653 11.8416 4.45726 11.818L6.31792 11.074C6.36004 11.0575 6.3982 11.0323 6.42992 11L10.3586 7.07201C10.4209 7.00954 10.4559 6.92491 10.4559 6.83668C10.4557 6.74829 10.4208 6.66352 10.3586 6.60068L9.24126 5.48401Z' fill='#3A42F1' />
                                    <path d='M11.0533 3.66666C10.9058 3.66636 10.7597 3.69525 10.6235 3.75166C10.4872 3.80807 10.3634 3.89088 10.2593 3.99533L9.70062 4.55399C9.63813 4.6165 9.60303 4.70127 9.60303 4.78966C9.60303 4.87805 9.63813 4.96282 9.70062 5.02533L10.8173 6.14199C10.8798 6.20448 10.9646 6.23959 11.053 6.23959C11.1413 6.23959 11.2261 6.20448 11.2886 6.14199L11.8473 5.58399C12.0043 5.42689 12.1111 5.22679 12.1544 5.00897C12.1977 4.79115 12.1755 4.56538 12.0905 4.3602C12.0055 4.15501 11.8617 3.97962 11.677 3.85618C11.4924 3.73273 11.2754 3.66678 11.0533 3.66666Z' fill='#3A42F1' />
                                    <path d='M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845885 10.121 0.00229405 8 0V0ZM8 14.6667C6.68146 14.6667 5.39253 14.2757 4.2962 13.5431C3.19987 12.8106 2.34539 11.7694 1.84081 10.5512C1.33622 9.33305 1.2042 7.9926 1.46144 6.6994C1.71867 5.40619 2.35361 4.2183 3.28596 3.28595C4.21831 2.3536 5.4062 1.71867 6.6994 1.46143C7.99261 1.2042 9.33305 1.33622 10.5512 1.8408C11.7694 2.34539 12.8106 3.19987 13.5431 4.2962C14.2757 5.39253 14.6667 6.68146 14.6667 8C14.6647 9.76751 13.9617 11.4621 12.7119 12.7119C11.4621 13.9617 9.76752 14.6647 8 14.6667Z' fill='#3A42F1' />
                                </g>
                                <defs>
                                    <clipPath id='clip0'>
                                        <rect width='16' height='16' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className='o-block-short__body'>
                                <FormattedMessage id='account.change' />
                            </span>
                        </a>
          : null}
                </div>
                {this.props.sameAddress ?
                    <p className='o-distance-m u-text-s t-text-quiet'>
                        <FormattedMessage id='account.address.corresponds' />
                    </p>
                : null }
            </Component>
        )
    }
}

Addressblock.propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    editable: PropTypes.bool,
    sameAddress: PropTypes.bool,
}

Addressblock.defaultProps = {
    component: 'div',
    editable: null,
    sameAddress: false,
}

export default ComponentInjector.return('Addressblock', Addressblock)
