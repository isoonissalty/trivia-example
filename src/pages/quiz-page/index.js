import { Stack, Typography, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useIntervalEffect } from '../../hooks/use-interval-effect'
import { QuizComponent } from './quiz-component'

const LIMIT_TIME = 30

// NOTE: there are some problem with refreshing the page
export const QuizPage = ({ quiz, isLoading, score, handleSubmitScore, setTime, time }) => {
  const navigate = useNavigate()
  const [currentQuiz, setCurrentQuiz] = useState(0)

  useEffect(() => {
    handleSubmitScore(0)
  }, [])

  useIntervalEffect(() => setTime((prev) => prev + 1), 1000)

  useEffect(() => {
    if (time === LIMIT_TIME) {
      navigate('/result')
    }
  }, [time])

  const handleNextQuiz = (answer) => {
    if (answer === quiz[currentQuiz].correct_answer) {
      handleSubmitScore(score + 1)
    }

    if (currentQuiz === quiz.length - 1) {
      navigate('/result')
    } else {
      setCurrentQuiz((prev) => prev + 1)
    }
  }

  return (
    <Stack sx={{ height: '100vh' }} direction="column" justifyContent="center" alignItems="center" gap={3}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <QuizComponent handleNextQuiz={handleNextQuiz} title={quiz[currentQuiz].question} />
      )}
      <Typography variant="h6">Time: {LIMIT_TIME - time}</Typography>
    </Stack>
  )
}

