import { Stack, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Stack
      sx={{ height: '400px', padding: '20%' }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography align="center" variant="h2" component="h1" gutterBottom>
        Welcome to Trivia Game
      </Typography>

      <Stack gap={1}>
        <Button onClick={() => navigate('/quiz')} size="large" variant="contained">Start</Button>
        <Button onClick={() => navigate('/ranking')} size="large" variant="outlined">ranking</Button>
      </Stack>
    </Stack>
  )
}
