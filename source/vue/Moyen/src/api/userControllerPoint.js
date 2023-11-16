import request from '@/utils/request'

export default {
    name: 'userControllerPoint',
    SubmitNewUser: function(uname, ucontact, token){
        return request({
            url: '/customer/create',
            method: 'post',
            data: `${uname}&&&${ucontact}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    StatSwitch: function(uid, token){
        return request({
            url: '/customer/switch',
            method: 'post',
            data: uid,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    GetPaged: function(method, inte, token){ // p:<page> for all-paged or u:<uid> for exactly one
        return request({
            url: '/customer/get',
            method: 'post',
            data: `${method}:${inte}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    AddFund: function(uid, cash, token){
        return request({
            url: '/customer/addfund',
            method: 'post',
            data: `${uid}:${cash}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    SearchUser: function(word, page, token){
        
        return request({
            url: '/customer/get',
            method: 'post',
            data: `s:${word}:${page}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },


}