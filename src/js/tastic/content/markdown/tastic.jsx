import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Markdown from '@frontastic/catwalk/src/js/component/markdown'

const MarkdownTastic = ({ data }) => {
        return <Markdown
            text={data.text}
            className={classnames(
                's-text',
                'c-markdown',
                'c-markdown--align-' + data.align,
                'c-markdown--padding-' + data.padding
            )}
        />
    }

MarkdownTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

MarkdownTastic.defaultProps = {
}

export default MarkdownTastic
