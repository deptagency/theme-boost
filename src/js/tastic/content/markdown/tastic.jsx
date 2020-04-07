import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Markdown from '@frontastic/catwalk/src/js/component/markdown'

const MarkdownTastic = ({ data }) => {
    return <Markdown
        text={data.text}
        className={classnames(
                'markdown-text',
                'markdown-position--align-' + data.align,
                'markdown-position--padding-' + data.padding
            )}
        />
}

MarkdownTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

MarkdownTastic.defaultProps = {
}

export default MarkdownTastic
