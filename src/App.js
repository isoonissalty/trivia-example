import { Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { HomePage } from './pages/home-page'
import { useState } from 'react'
import { QuizPage } from './pages/quiz-page'
import { ResultPage } from './pages/result-page'

const fetchQuiz = async () => {
  const response = await axios.get(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean&encode=url3986',
  )
  return response.data.results.map((result) => ({ ...result, question: decodeURIComponent(result.question) }))
}


function App() {
  const [page, setPage] = useState('home')
  const [score, setScore] = useState(0)

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
          quiz={quiz}
          score={score}
          isLoading={isLoading}
          handleSubmitScore={handleSubmitScore}
          handleChangePage={handleChangePage}
        />
      )}
      {page === 'result' && <ResultPage handleChangePage={handleChangePage} score={score} />}
    </Container>
  )
}

export default App
