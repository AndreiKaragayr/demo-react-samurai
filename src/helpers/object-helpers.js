export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(element => {
    if (element[objPropName] === itemId) {
      return {...element, ...newObjProps}
    }
    return element
  })
}
