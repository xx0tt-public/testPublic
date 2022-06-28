let str = 'asdasdasdasdasdasd'
let arr = str.split('')
let obj = arr.reduce((pre, cur, index, arr) => {
    if (!pre[cur]) pre[cur] = 1
    else pre[cur]++
    return pre
}, {})
console.log(obj);