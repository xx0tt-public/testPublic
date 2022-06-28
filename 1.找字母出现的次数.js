let str = 'asdasdasdasdasdasd'
let arr = str.split('')
const obj = {}
arr.reduce((pre, cur, index, arr) => {
    if (!obj[cur]) obj[cur] = 1
    else obj[cur]++
}, 0)
console.log(obj);