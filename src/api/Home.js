//文件名-尽量和模块的文件名相同
import request from '@/utils/request'

export const recommendMusic = params => request({
    url: '/personalized',
    params
    //将来外面可能传入params的值{limit:20}
})