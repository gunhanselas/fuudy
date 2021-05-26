import Api from '@/services/Api'
import * as searchTypes from '@/models/searchTypes'
import { AxiosResponse } from 'axios'

const apiKey = `&apiKey=${process.env.VUE_APP_API_KEY}`

export default {
  complexSearch (queries : searchTypes.Query):  Promise<AxiosResponse> {
    return Api().get(`recipes/complexSearch?${new URLSearchParams(queries as unknown as string).toString()}${apiKey}`)
  },
  getRandom (amount : number) : Promise<AxiosResponse>{
    return Api().get(`recipes/random?number=${amount}${apiKey}`)
  }
}