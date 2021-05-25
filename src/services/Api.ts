import axios, { AxiosInstance } from 'axios'

export default (): AxiosInstance => {
  return axios.create({
    baseURL: ' https://api.spoonacular.com/',
  })
}