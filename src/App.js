import { Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/home-page'
import { QuizPage } from './pages/quiz-page'
import { ResultPage } from './pages/result-page'
import { RankingPage } from './pages/ranking-page'
import { fetchQuiz } from './api/fetch-quiz'

function App() {
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0)
  const { data: quiz, isLoading } = useQuery({ queryKey: ['quiz'], queryFn: fetchQuiz })

  return (
    <Container maxWidth="sm">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/quiz"
            element={
              <QuizPage
                handleSubmitScore={setScore}
                score={score}
                time={time}
                setTime={setTime}
                quiz={quiz}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/result" element={<ResultPage time={time} score={score} />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
