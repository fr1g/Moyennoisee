import request from '@/utils/request'

export default {
    name: 'logCP',
    InsertLog: function(uid, sid, token){
        return request({
            url: '/log/new',
            method: 'post',
            data: `${uid}:${sid}`,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        })
    },
    GetPaged: function(token, page, uid){ // p:<page> for all-paged or u:<uid> for exactly one
        var dataed = ((uid.toString() == 'NaN') ? `get:${page}` : `uid:${uid}:${page}`);
        console.log(dataed);
        return request({
            url: '/log/get',
            method: 'post',
            data: dataed,
            headers: {
                'Content-Type': 'text/raw',
                'token': token
            }
        });
    },


}