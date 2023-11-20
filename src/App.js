import { Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { HomePage } from './pages/home-page'
import { QuizPage } from './pages/quiz-page'
import { ResultPage } from './pages/result-page'
import { RankingPage } from './pages/ranking-page'
import { fetchQuiz } from './api/fetch-quiz'


function App() {
  const [page, setPage] = useState('result')
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0)

  const { data: quiz, isLoading } = useQuery({ queryKey: ['quiz'], queryFn: fetchQuiz })

  return (
    <Container maxWidth="sm">
      {page === 'home' && <HomePage handleChangePage={setPage} />}
      {page === 'quiz' && (
        <QuizPage
          handleChangePage={setPage}
          handleSubmitScore={setScore}
          score={score}
          time={time}
          setTime={setTime}
          quiz={quiz}
          isLoading={isLoading}
        />
      )}
      {page === 'result' && <ResultPage time={time} handleChangePage={setPage} score={score} />}
      {page === 'ranking' && <RankingPage handleChangePage={setPage} />}
    </Container>
  )
}

export default App
