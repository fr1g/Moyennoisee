import request from '@/utils/request'

export default{
    name: 'userControllerPoint',
    SubmitNewUser: function(uname, ucontact, token){
        return request({
            url: '/customer/create',
            method: 'POST',
            data: `${uname}&&&${ucontact}`,
            headers: {
                'Content-Type': 'raw',
                'token': token
            }
        })
    },

}