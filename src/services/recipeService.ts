import Api from '@/services/Api'
import * as searchTypes from '@/models/searchTypes'
import { AxiosResponse } from 'axios'
export default {
  complexSearch (queries : searchTypes.Query):  Promise<AxiosResponse> {
    return Api().get(`recipes/complexSearch?${new URLSearchParams(queries as unknown as string).toString()}&apiKey=${process.env.VUE_APP_API_KEY}`)
  }
}