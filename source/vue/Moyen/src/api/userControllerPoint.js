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

}