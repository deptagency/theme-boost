import emptyEntity from 'frontastic-catwalk/src/js/helper/emptyEntity'

const connector = (globalState) => {
    return {
        categories: globalState.category.categories || emptyEntity,
    }
}

export default connector
