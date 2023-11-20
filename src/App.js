import { Container } from '@mui/material'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { HomePage } from './pages/home-page'
import { QuizPage } from './pages/quiz-page'
import { useState } from 'react'
import { ResultPage } from './pages/result-page'
import { RankingPage } from './pages/ranking-page'

const TRIVIA_API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean&encode=url3986'

const fetchQuiz = async () => {
  const response = await axios.get(TRIVIA_API_URL)

  return response.data.results.map((result) => ({ ...result, question: decodeURIComponent(result.question) }))
}

function App() {
  const [page, setPage] = useState('result')
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0)

  const { data: quiz, isLoading } = useQuery({ queryKey: ['quiz'], queryFn: fetchQuiz })

  const handleChangePage = (page) => {
    setPage(page)
  }

  const handleSubmitScore = (score) => {
    setScore(score)
  }

  return (
    <Container maxWidth="sm">
      {page === 'home' && <HomePage handleChangePage={handleChangePage} />}
      {page === 'quiz' && (
        <QuizPage
          handleChangePage={handleChangePage}
          handleSubmitScore={handleSubmitScore}
          score={score}
          time={time}
          setTime={setTime}
          quiz={quiz}
          isLoading={isLoading}
        />
      )}
      {page === 'result' && <ResultPage time={time} handleChangePage={handleChangePage} score={score} />}
      {page === 'ranking' && <RankingPage handleChangePage={handleChangePage} />}
    </Container>
  )
}

export default App
