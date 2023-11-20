import axios from 'axios'

export const TRIVIA_API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean&encode=url3986'

export const fetchQuiz = async () => {
  const response = await axios.get(TRIVIA_API_URL)

  return response.data.results.map((result) => ({ ...result, question: decodeURIComponent(result.question) }))
}
