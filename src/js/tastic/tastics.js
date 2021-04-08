import asyncComponent from '@frontastic/catwalk/src/js/component/asyncComponent'

import '../injection'

import MarkdownTastic from './content/markdown/tastic'
import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import TileTastic from './content/tile/tastic'
import TileTasticV2 from './content/tile-v2/tastic'
import SimpleTile from './content/simple-tile/tastic'
import MainMenuTastic from './header/main-menu/tastic'
import ProductSlider from './product/product-slider/tastic'
import ProductDetailsTastic from './product/product-details/tastic'
import ProductListingPageTastic from './product-listing/product-listing-page/tastic'
import HorizontalSpacerTastic from './helpers/horizontal-spacer/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'
import Footer from './footer/tastic'
import ProductTitle from './product/product-details/title/tastic'
import ProductPrice from './product/product-details/price/tastic'
import ProductRating from './product/product-details/rating/tastic'
import ProductImages from './product/product-details/product-images/tastic'
import DescriptionPanel from './product/product-details/description-panel/tastic'
import MarkdownPanel from './product/product-details/markdown-panel/tastic'
import VariantSelector from './product/product-details/variant-selector/tastic'
import AddToCartButton from './product/product-details/add-to-cart-button/tastic'
import IconList from './content/icon-list/tastic'

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
        'frontastic/boost/content/tile-v2': TileTasticV2,
        'frontastic/boost/content/simple-tile': SimpleTile,
        'frontastic/boost/header/main-menu': MainMenuTastic,
        'frontastic/boost/product/product-slider': ProductSlider,
        'frontastic/boost/product/product-details': ProductDetailsTastic,
        'frontastic/boost/product-listing/product-listing-page': ProductListingPageTastic,
        'frontastic/boost/helpers/horizontal-spacer': HorizontalSpacerTastic,
        'frontastic/boost/content/feature-service': FeatureServiceTastic,
        'frontastic/boost/content/icon-list': IconList,
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
        'frontastic/boost/product-details/title': ProductTitle,
        'frontastic/boost/product-details/price': ProductPrice,
        'frontastic/boost/product-details/rating': ProductRating,
        'frontastic/boost/product-details/product-images': ProductImages,
        'frontastic/boost/product-details/variant-selector': VariantSelector,
        'frontastic/boost/product-details/add-to-cart-button': AddToCartButton,
        'frontastic/boost/product-details/markdown-panel': MarkdownPanel,
        'frontastic/boost/product-details/description-panel': DescriptionPanel,
    }
})()
