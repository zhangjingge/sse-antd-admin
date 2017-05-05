import { request } from '../utils'

export async function query (params) {
  return request({
    url: '/details',
    method: 'get',
    data: params,
  })
}