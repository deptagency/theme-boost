import emptyEntity from 'frontastic-catwalk/src/js/helper/emptyEntity'

const connector = (globalState) => {
    return {
        facets: globalState.facet.facets || emptyEntity,
    }
}

export default connector
