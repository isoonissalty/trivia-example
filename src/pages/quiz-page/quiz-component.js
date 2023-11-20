import { Stack, Typography, Button } from '@mui/material'

export const QuizComponent = ({ title, handleNextQuiz }) => {
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Stack direction="row" gap={2}>
        <Button onClick={() => handleNextQuiz('False')} variant="contained" color="error">
          False
        </Button>
        <Button onClick={() => handleNextQuiz('True')} variant="contained" color="success">
          True
        </Button>
      </Stack>
    </>
  )
}