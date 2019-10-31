import React, { Component, Fragment } from 'react'

import MoleculesHeading from '../molecules/headings/heading'
import MoleculesButton from '../molecules/buttons/button'
import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'
import OrganismsProductStage from '../organisms/stages/stage-product'
import OrganismsProductSwiper from '../organisms/swiper/product-swiper'
import OrganismsSizeSwiper from '../organisms/swiper/size-swiper'
import OrganismsImageColorSwiper from '../organisms/swiper/image-color-swiper'
import OrganismsListingFeatures from '../organisms/listings/feature-listing'
import OrganismsNewsletterBlock from '../organisms/blocks/newsletter'
import OrganismsMoreInfoProduct from '../organisms/products/more-info'
import OrganismsProductView from "../organisms/products/product-view";
// import OrganismsBanner from '../organisms/banners/newsletter-banner'

class TemplatesDetail extends Component {
    render () {
        return (
            <Fragment>
                <OrganismsHead />
                <main role='main'>
                    <div className='o-container o-distance'>
                        <OrganismsProductView />
                        <div className='o-distance-l o-prevent-space'>
                            <div className='o-block-short'>
                                <svg className='c-icon c-icon--m o-block-short__short-item' width='36' height='30' viewBox='0 0 36 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g clipPath='url(#clip0)'>
                                        <path d='M1.125 19.6875H21.375C21.6734 19.6875 21.9595 19.569 22.1705 19.358C22.3815 19.147 22.5 18.8609 22.5 18.5625V6.66901C22.4711 6.37968 22.3855 6.09887 22.248 5.84265C22.1105 5.58644 21.9239 5.35984 21.6987 5.17581C21.4736 4.99178 21.2144 4.85393 20.936 4.77014C20.6575 4.68635 20.3653 4.65828 20.076 4.68751H2.424C2.1347 4.65828 1.84247 4.68635 1.56403 4.77014C1.28559 4.85393 1.0264 4.99178 0.801268 5.17581C0.57614 5.35984 0.389496 5.58644 0.252008 5.84265C0.114521 6.09887 0.0288855 6.37968 0 6.66901L0 18.5625C0 18.8609 0.118526 19.147 0.329505 19.358C0.540483 19.569 0.826631 19.6875 1.125 19.6875ZM16.5 8.06251V16.3125C16.5 16.6109 16.3815 16.897 16.1705 17.108C15.9595 17.319 15.6734 17.4375 15.375 17.4375C15.0766 17.4375 14.7905 17.319 14.5795 17.108C14.3685 16.897 14.25 16.6109 14.25 16.3125V8.06251C14.25 7.76414 14.3685 7.47799 14.5795 7.26702C14.7905 7.05604 15.0766 6.93751 15.375 6.93751C15.6734 6.93751 15.9595 7.05604 16.1705 7.26702C16.3815 7.47799 16.5 7.76414 16.5 8.06251ZM7.5 8.06251V16.3125C7.5 16.6109 7.38147 16.897 7.1705 17.108C6.95952 17.319 6.67337 17.4375 6.375 17.4375C6.07663 17.4375 5.79048 17.319 5.5795 17.108C5.36853 16.897 5.25 16.6109 5.25 16.3125V8.06251C5.25 7.76414 5.36853 7.47799 5.5795 7.26702C5.79048 7.05604 6.07663 6.93751 6.375 6.93751C6.67337 6.93751 6.95952 7.05604 7.1705 7.26702C7.38147 7.47799 7.5 7.76414 7.5 8.06251Z' />
                                        <path d='M36 16.3125C36 14.7212 35.3679 13.1951 34.2426 12.0699C33.1174 10.9446 31.5913 10.3125 30 10.3125H25.5C25.1022 10.3125 24.7206 10.4705 24.4393 10.7518C24.158 11.0331 24 11.4147 24 11.8125V20.8125C24 20.912 23.9605 21.0073 23.8902 21.0777C23.8198 21.148 23.7245 21.1875 23.625 21.1875H1.125C0.826631 21.1875 0.540483 21.306 0.329505 21.517C0.118526 21.728 0 22.0141 0 22.3125L0 26.8125C0 27.1109 0.118526 27.397 0.329505 27.608C0.540483 27.819 0.826631 27.9375 1.125 27.9375H2.6475C2.74717 27.937 2.8426 27.8971 2.913 27.8265C2.98332 27.7548 3.02265 27.6584 3.0225 27.558C3.0225 26.8715 3.15771 26.1918 3.42042 25.5575C3.68313 24.9233 4.06818 24.347 4.5536 23.8616C5.03902 23.3762 5.61529 22.9911 6.24952 22.7284C6.88375 22.4657 7.56351 22.3305 8.25 22.3305C8.93649 22.3305 9.61625 22.4657 10.2505 22.7284C10.8847 22.9911 11.461 23.3762 11.9464 23.8616C12.4318 24.347 12.8169 24.9233 13.0796 25.5575C13.3423 26.1918 13.4775 26.8715 13.4775 27.558C13.4773 27.6584 13.5167 27.7548 13.587 27.8265C13.6574 27.8971 13.7528 27.937 13.8525 27.9375H19.1475C19.2472 27.937 19.3426 27.8971 19.413 27.8265C19.4833 27.7548 19.5227 27.6584 19.5225 27.558C19.5107 26.8626 19.6375 26.1718 19.8955 25.5259C20.1535 24.88 20.5375 24.2919 21.0252 23.7959C21.5128 23.3 22.0943 22.9061 22.7357 22.6372C23.3772 22.3683 24.0657 22.2299 24.7612 22.2299C25.4568 22.2299 26.1453 22.3683 26.7868 22.6372C27.4282 22.9061 28.0097 23.3 28.4973 23.7959C28.985 24.2919 29.369 24.88 29.627 25.5259C29.885 26.1718 30.0118 26.8626 30 27.558C29.9996 27.6698 29.9931 27.7814 29.9805 27.8925C29.975 27.9449 29.9806 27.9978 29.9969 28.0479C30.0132 28.0979 30.0398 28.144 30.075 28.1832C30.1102 28.2224 30.1532 28.2537 30.2013 28.2752C30.2493 28.2967 30.3013 28.3079 30.354 28.308H33C33.7957 28.308 34.5587 27.9919 35.1213 27.4293C35.6839 26.8667 36 26.1037 36 25.308V16.3125ZM33 16.3125V17.4105C32.9998 17.4602 32.9898 17.5094 32.9705 17.5552C32.9512 17.601 32.923 17.6425 32.8876 17.6774C32.8522 17.7122 32.8102 17.7397 32.7641 17.7583C32.718 17.7768 32.6687 17.7861 32.619 17.7855L28.869 17.7285C28.7706 17.7269 28.6767 17.6867 28.6077 17.6166C28.5387 17.5464 28.5 17.4519 28.5 17.3535V13.6875C28.5 13.588 28.5395 13.4927 28.6098 13.4223C28.6802 13.352 28.7755 13.3125 28.875 13.3125H30C30.7956 13.3125 31.5587 13.6286 32.1213 14.1912C32.6839 14.7538 33 15.5169 33 16.3125Z' />
                                        <path d='M24.75 31.3125C26.8211 31.3125 28.5 29.6336 28.5 27.5625C28.5 25.4914 26.8211 23.8125 24.75 23.8125C22.6789 23.8125 21 25.4914 21 27.5625C21 29.6336 22.6789 31.3125 24.75 31.3125Z' />
                                        <path d='M8.25 31.3125C10.3211 31.3125 12 29.6336 12 27.5625C12 25.4914 10.3211 23.8125 8.25 23.8125C6.17893 23.8125 4.5 25.4914 4.5 27.5625C4.5 29.6336 6.17893 31.3125 8.25 31.3125Z' />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0'>
                                            <rect width='36' height='29.0959' />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='o-block-short__body'>
                                    <p className='u-text-strong'>Express Lieferung:</p>
                                    <p className='o-distance-xs'>Bestelle in den nächsten sechs Stunden und du erhälsts deine Lieferung morgen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='o-container o-distance o-prevent-space'>
                        <OrganismsListingFeatures />
                    </div>
                    <OrganismsMoreInfoProduct />
                    <section className='o-container o-distance'>
                        <div className='o-container'>
                            <MoleculesHeading title='Das könnte dir auch gefallen' description='Empfehlungen für dich' />
                            <OrganismsProductSwiper />
                        </div>
                    </section>
                    <section className='o-container o-distance o-prevent-space'>
                        <OrganismsNewsletterBlock />
                    </section>
                </main>
                <div className='o-prevent-space'>
                    <OrganismsFoot />
                </div>
            </Fragment>
        )
    }
}

TemplatesDetail.propTypes = {}

TemplatesDetail.defaultProps = {}

export default TemplatesDetail
