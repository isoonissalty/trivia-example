import { Stack, Typography, Button } from '@mui/material'

export const HomePage = ({ handleChangePage }) => {
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
        <Button onClick={() => handleChangePage('quiz')} size="large" variant="contained">Start</Button>
        <Button onClick={() => handleChangePage('ranking')} size="large" variant="outlined">ranking</Button>
      </Stack>
    </Stack>
  )
}
