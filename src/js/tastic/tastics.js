import ShowcaseTextTastic from './content/showcase-text/tastic'
import NewsletterBlockTastic from './forms/newsletter-block/tastic'
import MainMenuTastic from './header/main-menu/tastic'
import MarkdownTastic from './content/markdown/tastic'

export default (() => {
    return {
        'content--showcase-text': ShowcaseTextTastic,
        'forms--newsletter-block': NewsletterBlockTastic,
        'header--main-menu': MainMenuTastic,
        'content--markdown': MarkdownTastic,
    }
})()
