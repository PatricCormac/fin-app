import { $host } from './index'

export const getData = async () => {
  const res = await $host.get('api/data')
  return res
}