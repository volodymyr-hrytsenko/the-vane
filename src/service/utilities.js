export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}