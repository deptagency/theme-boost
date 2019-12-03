import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import OrganismsFeaturebox from '../featurebox/featurebox'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsListingFeatures extends Component {
    render () {
        return (
            <div className='o-grid o-grid--small-half'>
                <OrganismsFeaturebox
                    description={<FormattedMessage id='footer.deliveryHours' />}
                    icon={<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0)'>
                            <path d='M0.699194 10.9375H11.8784C12.0432 10.9375 12.2011 10.8716 12.3176 10.7544C12.4341 10.6372 12.4995 10.4782 12.4995 10.3125V3.70496C12.4836 3.54422 12.4363 3.38822 12.3604 3.24588C12.2845 3.10353 12.1814 2.97764 12.0572 2.8754C11.9329 2.77316 11.7898 2.69658 11.6361 2.65003C11.4824 2.60349 11.321 2.58789 11.1613 2.60413H1.41632C1.25661 2.58789 1.09528 2.60349 0.941567 2.65003C0.78785 2.69658 0.644758 2.77316 0.520474 2.8754C0.39619 2.97764 0.293151 3.10353 0.217249 3.24588C0.141347 3.38822 0.0940715 3.54422 0.078125 3.70496L0.078125 10.3125C0.078125 10.4782 0.143559 10.6372 0.260032 10.7544C0.376505 10.8716 0.534476 10.9375 0.699194 10.9375ZM9.18714 4.47913V9.06246C9.18714 9.22822 9.12171 9.38719 9.00523 9.5044C8.88876 9.62161 8.73079 9.68746 8.56607 9.68746C8.40135 9.68746 8.24338 9.62161 8.12691 9.5044C8.01044 9.38719 7.945 9.22822 7.945 9.06246V4.47913C7.945 4.31337 8.01044 4.1544 8.12691 4.03719C8.24338 3.91998 8.40135 3.85413 8.56607 3.85413C8.73079 3.85413 8.88876 3.91998 9.00523 4.03719C9.12171 4.1544 9.18714 4.31337 9.18714 4.47913ZM4.21859 4.47913V9.06246C4.21859 9.22822 4.15315 9.38719 4.03668 9.5044C3.92021 9.62161 3.76223 9.68746 3.59752 9.68746C3.4328 9.68746 3.27483 9.62161 3.15835 9.5044C3.04188 9.38719 2.97645 9.22822 2.97645 9.06246V4.47913C2.97645 4.31337 3.04188 4.1544 3.15835 4.03719C3.27483 3.91998 3.4328 3.85413 3.59752 3.85413C3.76223 3.85413 3.92021 3.91998 4.03668 4.03719C4.15315 4.1544 4.21859 4.31337 4.21859 4.47913Z' fill='#424f62' />
                            <path d='M19.9523 9.06246C19.9523 8.1784 19.6034 7.33056 18.9822 6.70544C18.361 6.08032 17.5185 5.72913 16.64 5.72913H14.1557C13.9361 5.72913 13.7254 5.81692 13.5701 5.9732C13.4148 6.12948 13.3276 6.34145 13.3276 6.56246V11.5625C13.3276 11.6177 13.3058 11.6707 13.267 11.7098C13.2281 11.7488 13.1755 11.7708 13.1206 11.7708H0.699194C0.534476 11.7708 0.376505 11.8366 0.260032 11.9539C0.143559 12.0711 0.078125 12.23 0.078125 12.3958L0.078125 14.8958C0.078125 15.0616 0.143559 15.2205 0.260032 15.3377C0.376505 15.4549 0.534476 15.5208 0.699194 15.5208H1.53971C1.59473 15.5205 1.64741 15.4983 1.68628 15.4591C1.7251 15.4193 1.74682 15.3657 1.74673 15.31C1.74673 14.9286 1.82138 14.5509 1.96641 14.1986C2.11144 13.8462 2.32401 13.5261 2.59199 13.2564C2.85997 12.9867 3.17811 12.7728 3.52825 12.6269C3.87838 12.4809 4.25365 12.4058 4.63263 12.4058C5.01161 12.4058 5.38689 12.4809 5.73702 12.6269C6.08715 12.7728 6.40529 12.9867 6.67327 13.2564C6.94125 13.5261 7.15383 13.8462 7.29886 14.1986C7.44389 14.5509 7.51853 14.9286 7.51853 15.31C7.51845 15.3657 7.54016 15.4193 7.57898 15.4591C7.61785 15.4983 7.67053 15.5205 7.72556 15.5208H10.6487C10.7037 15.5205 10.7564 15.4983 10.7953 15.4591C10.8341 15.4193 10.8558 15.3657 10.8557 15.31C10.8492 14.9236 10.9193 14.5398 11.0617 14.181C11.2041 13.8222 11.4161 13.4955 11.6853 13.2199C11.9545 12.9444 12.2755 12.7256 12.6296 12.5762C12.9838 12.4268 13.3639 12.3499 13.7479 12.3499C14.1318 12.3499 14.512 12.4268 14.8661 12.5762C15.2202 12.7256 15.5412 12.9444 15.8104 13.2199C16.0796 13.4955 16.2916 13.8222 16.434 14.181C16.5765 14.5398 16.6465 14.9236 16.64 15.31C16.6398 15.3721 16.6362 15.4341 16.6292 15.4958C16.6262 15.5249 16.6293 15.5543 16.6383 15.5821C16.6472 15.6099 16.6619 15.6355 16.6814 15.6573C16.7008 15.679 16.7245 15.6965 16.7511 15.7084C16.7776 15.7203 16.8063 15.7266 16.8354 15.7266H18.2962C18.7354 15.7266 19.1567 15.551 19.4673 15.2385C19.7778 14.9259 19.9523 14.502 19.9523 14.06V9.06246ZM18.2962 9.06246V9.67246C18.296 9.70007 18.2905 9.72738 18.2799 9.75283C18.2692 9.77827 18.2537 9.80135 18.2341 9.82071C18.2146 9.84008 18.1914 9.85536 18.1659 9.86567C18.1405 9.87598 18.1133 9.88112 18.0858 9.88079L16.0156 9.84913C15.9613 9.84825 15.9094 9.82592 15.8713 9.78694C15.8332 9.74796 15.8119 9.69547 15.8119 9.64079V7.60413C15.8119 7.54887 15.8337 7.49588 15.8725 7.45681C15.9113 7.41774 15.964 7.39579 16.0189 7.39579H16.64C17.0792 7.39579 17.5005 7.57139 17.8111 7.88395C18.1217 8.19651 18.2962 8.62043 18.2962 9.06246Z' fill='#424f62' />
                            <path d='M13.7421 17.3958C14.8855 17.3958 15.8123 16.4631 15.8123 15.3125C15.8123 14.1619 14.8855 13.2291 13.7421 13.2291C12.5987 13.2291 11.6719 14.1619 11.6719 15.3125C11.6719 16.4631 12.5987 17.3958 13.7421 17.3958Z' fill='#424f62' />
                            <path d='M4.63273 17.3958C5.77609 17.3958 6.70296 16.4631 6.70296 15.3125C6.70296 14.1619 5.77609 13.2291 4.63273 13.2291C3.48937 13.2291 2.5625 14.1619 2.5625 15.3125C2.5625 16.4631 3.48937 17.3958 4.63273 17.3958Z' fill='#424f62' />
                        </g>
                        <defs>
                            <clipPath id='clip0'>
                                <rect width='19.8742' height='20' fill='white' transform='translate(0.078125)' />
                            </clipPath>
                        </defs>
                    </svg>
                    }
                />
                <OrganismsFeaturebox
                    description={<FormattedMessage id='footer.invoice' />}
                    icon={<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0)'>
                            <path d='M18.6438 3.75H1.25387C1.03425 3.75 0.823621 3.8378 0.668324 3.99408C0.513026 4.15036 0.425781 4.36232 0.425781 4.58333V15.4167C0.425781 15.6377 0.513026 15.8496 0.668324 16.0059C0.823621 16.1622 1.03425 16.25 1.25387 16.25H18.6438C18.8634 16.25 19.0741 16.1622 19.2294 16.0059C19.3847 15.8496 19.4719 15.6377 19.4719 15.4167V4.58333C19.4719 4.36232 19.3847 4.15036 19.2294 3.99408C19.0741 3.8378 18.8634 3.75 18.6438 3.75ZM2.91006 7.08333C2.74628 7.08333 2.58617 7.03446 2.44999 6.94289C2.31382 6.85132 2.20768 6.72117 2.145 6.5689C2.08232 6.41663 2.06593 6.24908 2.09788 6.08742C2.12983 5.92577 2.2087 5.77729 2.32451 5.66074C2.44032 5.5442 2.58787 5.46483 2.74851 5.43268C2.90914 5.40052 3.07564 5.41703 3.22696 5.4801C3.37827 5.54317 3.5076 5.64998 3.59859 5.78702C3.68958 5.92407 3.73815 6.08518 3.73815 6.25C3.73815 6.47101 3.65091 6.68298 3.49561 6.83926C3.34031 6.99554 3.12968 7.08333 2.91006 7.08333ZM9.94884 12.5C9.4575 12.5 8.97719 12.3534 8.56865 12.0787C8.16012 11.804 7.8417 11.4135 7.65367 10.9567C7.46564 10.4999 7.41644 9.99723 7.5123 9.51227C7.60816 9.02732 7.84476 8.58186 8.19219 8.23223C8.53963 7.8826 8.98228 7.6445 9.46418 7.54804C9.94609 7.45157 10.4456 7.50108 10.8995 7.6903C11.3535 7.87952 11.7415 8.19995 12.0144 8.61107C12.2874 9.0222 12.4331 9.50555 12.4331 10C12.4331 10.663 12.1714 11.2989 11.7055 11.7678C11.2396 12.2366 10.6077 12.5 9.94884 12.5ZM16.9876 14.5833C16.8238 14.5833 16.6637 14.5345 16.5276 14.4429C16.3914 14.3513 16.2852 14.2212 16.2226 14.0689C16.1599 13.9166 16.1435 13.7491 16.1754 13.5874C16.2074 13.4258 16.2863 13.2773 16.4021 13.1607C16.5179 13.0442 16.6654 12.9648 16.8261 12.9327C16.9867 12.9005 17.1532 12.917 17.3045 12.9801C17.4558 13.0432 17.5852 13.15 17.6762 13.287C17.7672 13.4241 17.8157 13.5852 17.8157 13.75C17.8157 13.971 17.7285 14.183 17.5732 14.3393C17.4179 14.4955 17.2073 14.5833 16.9876 14.5833Z' fill='#424f62' />
                        </g>
                        <defs>
                            <clipPath id='clip0'>
                                <rect width='19.8742' height='20' fill='white' transform='translate(0.0117188)' />
                            </clipPath>
                        </defs>
                    </svg>
                    }
                />
                <OrganismsFeaturebox
                    description={<FormattedMessage id='footer.freeShipping' />}
                    icon={<svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0)'>
                            <path d='M13.5913 6.89247C13.6274 6.8759 13.6581 6.84922 13.6796 6.8156C13.7011 6.78198 13.7125 6.74286 13.7125 6.70289C13.7125 6.66292 13.7011 6.62379 13.6796 6.59018C13.6581 6.55656 13.6274 6.52988 13.5913 6.5133L5.51159 2.80664C5.45867 2.78298 5.4014 2.77075 5.34349 2.77075C5.28558 2.77075 5.22831 2.78298 5.17539 2.80664L2.01456 4.18664C1.97721 4.20265 1.94537 4.22935 1.92299 4.26343C1.90061 4.29751 1.88867 4.33746 1.88867 4.3783C1.88867 4.41915 1.90061 4.4591 1.92299 4.49318C1.94537 4.52726 1.97721 4.55396 2.01456 4.56997L10.5356 8.14331C10.5882 8.16546 10.6448 8.17645 10.7018 8.17559C10.7588 8.17473 10.815 8.16204 10.8669 8.1383L13.5913 6.89247Z' fill='#424f62' />
                            <path d='M18.6337 4.5833C18.67 4.56684 18.7009 4.54014 18.7226 4.50644C18.7442 4.47273 18.7558 4.43344 18.7558 4.3933C18.7558 4.35316 18.7442 4.31387 18.7226 4.28017C18.7009 4.24646 18.67 4.21977 18.6337 4.2033L10.6326 0.705801C10.5281 0.659915 10.4154 0.63623 10.3014 0.63623C10.1874 0.63623 10.0746 0.659915 9.97015 0.705801L7.3037 1.87247C7.26708 1.88882 7.23596 1.91552 7.21413 1.94932C7.19229 1.98312 7.18066 2.02257 7.18066 2.06288C7.18066 2.1032 7.19229 2.14265 7.21413 2.17645C7.23596 2.21025 7.26708 2.23694 7.3037 2.2533L15.3362 5.9383C15.39 5.96294 15.4485 5.97569 15.5076 5.97569C15.5667 5.97569 15.6252 5.96294 15.679 5.9383L18.6337 4.5833Z' fill='#424f62' />
                            <path d='M1.06484 5.52501C1.03337 5.51184 0.999158 5.50669 0.965238 5.51002C0.931317 5.51335 0.898738 5.52506 0.870393 5.5441C0.842048 5.56314 0.818813 5.58894 0.802751 5.61919C0.78669 5.64944 0.778298 5.68321 0.77832 5.71751V15.0058C0.778307 15.1703 0.826658 15.3311 0.917283 15.468C1.00791 15.6049 1.13676 15.7117 1.2876 15.775L9.80453 19.3475C9.836 19.3607 9.87021 19.3658 9.90413 19.3625C9.93805 19.3592 9.97063 19.3475 9.99897 19.3284C10.0273 19.3094 10.0506 19.2836 10.0666 19.2533C10.0827 19.2231 10.0911 19.1893 10.091 19.155V9.45001C10.091 9.40885 10.0788 9.36864 10.0561 9.3344C10.0335 9.30016 10.0012 9.27341 9.96352 9.25751L1.06484 5.52501Z' fill='#424f62' />
                            <path d='M11.3369 19.12C11.3371 19.1547 11.3459 19.1889 11.3625 19.2194C11.3791 19.2498 11.403 19.2757 11.432 19.2945C11.461 19.3134 11.4942 19.3247 11.5287 19.3274C11.5631 19.3301 11.5977 19.3241 11.6292 19.31L19.3396 15.7833C19.4843 15.7171 19.6069 15.6104 19.693 15.4759C19.779 15.3414 19.8248 15.1849 19.8249 15.025V5.73829C19.8249 5.70345 19.8162 5.66916 19.7997 5.63856C19.7831 5.60796 19.7592 5.58202 19.7302 5.56311C19.7011 5.54421 19.6678 5.53295 19.6332 5.53036C19.5987 5.52777 19.5641 5.53394 19.5325 5.54829L11.4611 9.24162C11.4248 9.25791 11.394 9.28446 11.3724 9.31804C11.3508 9.35162 11.3393 9.39078 11.3394 9.43079L11.3369 19.12Z' fill='#424f62' />
                        </g>
                        <defs>
                            <clipPath id='clip0'>
                                <rect width='19.8742' height='20' fill='white' transform='translate(0.364258)' />
                            </clipPath>
                        </defs>
                    </svg>}
                />
            </div>
        )
    }
}

OrganismsListingFeatures.propTypes = {

}

OrganismsListingFeatures.defaultProps = {

}

export default ComponentInjector.return('OrganismsListingFeatures', OrganismsListingFeatures)
