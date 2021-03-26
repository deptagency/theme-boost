import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Markdown from '@frontastic/catwalk/src/js/component/markdown'

const MarkdownTastic = ({ data }) => {
    return (
        <Markdown
            text={data.text}
            className={classnames(
                'markdown-text',
                'markdown-position--align-' + data.align,
                'markdown-position--padding-' + data.padding
            )}
        />
    )
}

MarkdownTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

MarkdownTastic.defaultProps = {}

export default tastify({ translate: true })(MarkdownTastic)
