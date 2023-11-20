import axios from 'axios'

const RANKING_API_URL = 'http://127.0.0.1:8000/rankings/'

export const fetchRankings = async () => {
  const response = await axios.get(RANKING_API_URL)
  console.log(response)
  return response.data
}