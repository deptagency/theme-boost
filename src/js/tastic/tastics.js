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
        'content--markdown': MarkdownTastic,
        'content--showcase-text': ShowcaseTextTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
        'content--tile': TileTastic,
        'header--main-menu': MainMenuTastic,
        'frontastic/boost/cart': CartTastic,
        'product--product-slider': ProductSlider,
        'product--product-details': ProductDetailsTastic,
        'helpers--horizontal-spacer': HorizontalSpacerTastic,
        'content--feature-service': FeatureServiceTastic,
        'footer': Footer,
    }
})()
