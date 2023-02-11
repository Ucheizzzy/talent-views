import axios from 'axios'
import { FAKE_DATA } from './Fake_data'
import { BASE_URL } from './config'

export class RestApi {
  static async fetchMovies() {
    const response = await axios.get(`${BASE_URL}movie/allmovies`)
    // console.log(response.data.data)
    return response.data.data
  }
}
