import MarkdownTastic from './content/markdown/tastic'
import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import TileTastic from './content/tile/tastic'
import MainMenuTastic from './header/main-menu/tastic'
import CartTastic from './cart/tastic'
import ProductSlider from './product/product-slider/tastic'
import ProductDetailsTastic from './product/product-details/tastic'
import HorizontalSpacerTastic from './helpers/horizontal-spacer/tastic'
import FeatureServiceTastic from './content/feature-service/tastic'
import Footer from './footer/tastic'

export default (() => {
    return {
        'frontastic/boost/content/markdown': MarkdownTastic,
        'frontastic/boost/content/showcase-text': ShowcaseTextTastic,
        'frontastic/boost/forms/newsletter-block': NewsletterBlockTastic,
        'frontastic/boost/content/tile': TileTastic,
        'frontastic/boost/header/main-menu': MainMenuTastic,
        'frontastic/boost/product/product-slider': ProductSlider,
        'frontastic/boost/product/product-details': ProductDetailsTastic,
        'frontastic/boost/helpers/horizontal-spacer': HorizontalSpacerTastic,
        'frontastic/boost/content/feature-service': FeatureServiceTastic,
        'frontastic/boost/footer': Footer,
        'frontastic/boost/cart': CartTastic,
    }
})()
