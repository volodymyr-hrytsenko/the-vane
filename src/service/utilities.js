export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const findMax = (arr) => {
    let max = {id: -1, power: -1}
    arr.forEach(windmill => {
        if(max.power < windmill[1].power) {
            max = {id: windmill[0], power: windmill[1].power}
        }
    })
    return max
}