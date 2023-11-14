import request from '@/utils/request'

export function login(formData) {
  return request({
    url: '/login',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
