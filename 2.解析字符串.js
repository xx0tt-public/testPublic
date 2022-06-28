const url = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
const process = (url) => {
    const index1 = url.indexOf('?')
    const index2 = url.indexOf('#')
    const str = url.slice(index1 + 1, index2)
    const newStr = str.split('&')
    console.log(newStr);

    return newStr.reduce((pre, curr) => {

        const [key, value] = curr.split('=')
        pre[key] = value
        // console.log(pre);
        return pre
    }, {})

}
console.log(process(url));