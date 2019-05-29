import axios from '@/axios'

var domainUrl = 'localhost:3000'

export function queryBanner () {
  return axios({
    url: '/api/get_banners',
    method: 'get'
  })
}

export function login (data) {
  return axios({
    url: '/api/user_login',
    method: 'post',
    data: data
  })
}