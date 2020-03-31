import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import TileTastic from './content/tile/tastic'


export default (() => {
    return {
        'frontastic/boost/showcase-text': ShowcaseTextTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
        'content--tile': TileTastic,
    }
})()
