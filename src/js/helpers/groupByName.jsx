export default (items, selectedItems) => {
    const sortedItems = items.sort((a, b) => { return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1 })

    let groupedItems = sortedItems.reduce((r, e) => {
        let group = e.name[0].toUpperCase()
        const entryItem = {
            ...e,
            isSelected: selectedItems.some(i => { return i.id === e.id }),
        }

        if (!r[group]) { r[group] = { group, list: [entryItem] } } else { r[group].list.push(entryItem) }
        return r
    }, {})

    return groupedItems
}
