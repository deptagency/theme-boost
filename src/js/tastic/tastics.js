import asyncComponent from '@frontastic/catwalk/src/js/component/asyncComponent'

import MarkdownTastic from './content/markdown/tastic'
import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import TileTastic from './content/tile/tastic'
import MainMenuTastic from './header/main-menu/tastic'
import ProductSlider from './product/product-slider/tastic'
import ProductDetailsTastic from './product/product-details/tastic'
import ProductListingPageTastic from './product-listing/product-listing-page/tastic'
import HorizontalSpacerTastic from './helpers/horizontal-spacer/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'
import Footer from './footer/tastic'

/* eslint-disable arrow-body-style */
const CartTastic = asyncComponent({ import: () => import('./cart/tastic'), height: {} })
const CheckoutTastic = asyncComponent({ import: () => import('./checkout/tastic'), height: {} })
const CheckoutSuccessTastic = asyncComponent({ import: () => import('./checkout-success/tastic'), height: {} })
const CheckoutHeaderTastic = asyncComponent({ import: () => import('./checkout-header/tastic'), height: {} })
const CheckoutFooterTastic = asyncComponent({ import: () => import('./checkout-footer/tastic'), height: {} })
const AccountAccessTastic = asyncComponent({ import: () => import('./account/access/tastic'), height: {} })
const AccountConfirmTastic = asyncComponent({ import: () => import('./account/confirm/tastic'), height: {} })
const AccountProfileTastic = asyncComponent({ import: () => import('./account/profile/tastic'), height: {} })
const ResetPasswordTastic = asyncComponent({ import: () => import('./account/reset-password/tastic'), height: {} })
const AccountOrdersTastic = asyncComponent({ import: () => import('./account/orders/tastic'), height: {} })
const AccountAddressesTastic = asyncComponent({ import: () => import('./account/addresses/tastic'), height: {} })
const AccountWishlistsTastic = asyncComponent({ import: () => import('./account/wishlist/tastic'), height: {} })

export default (() => {
    return {
        'frontastic/boost/content/markdown': MarkdownTastic,
        'frontastic/boost/content/showcase-text': ShowcaseTextTastic,
        'frontastic/boost/forms/newsletter-block': NewsletterBlockTastic,
        'frontastic/boost/content/tile': TileTastic,
        'frontastic/boost/header/main-menu': MainMenuTastic,
        'frontastic/boost/product/product-slider': ProductSlider,
        'frontastic/boost/product/product-details': ProductDetailsTastic,
        'frontastic/boost/product-listing/product-listing-page': ProductListingPageTastic,
        'frontastic/boost/helpers/horizontal-spacer': HorizontalSpacerTastic,
        'frontastic/boost/content/feature-service': FeatureServiceTastic,
        'frontastic/boost/footer': Footer,
        'frontastic/boost/cart': CartTastic,
        'frontastic/boost/checkout': CheckoutTastic,
        'frontastic/boost/checkout-success': CheckoutSuccessTastic,
        'frontastic/boost/checkout-header': CheckoutHeaderTastic,
        'frontastic/boost/checkout-footer': CheckoutFooterTastic,
        'frontastic/boost/account/access': AccountAccessTastic,
        'frontastic/boost/account/confirm': AccountConfirmTastic,
        'frontastic/boost/account/profile': AccountProfileTastic,
        'frontastic/boost/account/reset-password': ResetPasswordTastic,
        'frontastic/boost/account/orders': AccountOrdersTastic,
        'frontastic/boost/account/addresses': AccountAddressesTastic,
        'frontastic/boost/account/wishlists': AccountWishlistsTastic,
    }
})()
