import React from 'react'
import PropTypes from 'prop-types'

import ReferencePropType from 'frontastic-catwalk/src/js/component/reference'

import Header from '../../patterns/organisms/base/header'

function addProperDataTrees (cats, trees) {
    return cats.map((c, i) => {
        return { ...c, tree: trees[i] }
    })
}

function HeaderTastic({ data }) {
    // Temporary fix, until trees in groups are working again.
    const trees = [data.treeWomen, data.treeMen, data.treeKids]
    const topCategories = addProperDataTrees(data.topCategories, trees)

    return <Header topCategories={topCategories} />
}

HeaderTastic.propTypes = {
    data: PropTypes.shape({
        topCategories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: ReferencePropType,
            })
        ),
        treeWomen: PropTypes.object,
        treeMen: PropTypes.object,
        treeKids: PropTypes.object,
    }),
    // tastic: PropTypes.object.isRequired,
}

HeaderTastic.defaultProps = {}

export default HeaderTastic
