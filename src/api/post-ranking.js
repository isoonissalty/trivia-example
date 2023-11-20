import axios from 'axios'

const url = 'http://127.0.0.1:8000/rankings/'

export const postRanking = async (data) => {
  await axios.post(url, data)
}