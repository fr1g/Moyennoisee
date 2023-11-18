import request from '@/utils/request'

export default {
    name: 'servCP',
    SubmitNew: function(name, desc, price, plus, token){
        return request({
            url: '/service/create',
            method: 'post',
            data: `${name}:::${desc}:::${price}:::${plus}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    
    GetPaged: function(page, token){ // p:<page> for all-paged or u:<uid> for exactly one
        return request({
            url: '/service/get',
            method: 'post',
            data: `${page}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    UpdateTags: function(sid, tag, token){ // p:<page> for all-paged or u:<uid> for exactly one
        return request({
            url: '/service/get',
            method: 'post',
            data: `${sid}:${tag}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },

}