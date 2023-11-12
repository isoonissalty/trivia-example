import { Button, Stack, Typography } from '@mui/material'

export const ResultPage = ({ score, handleChangePage }) => {
  return (
    <Stack sx={{ height: '100vh' }} direction="column" justifyContent="center" alignItems="center" spacing={5}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3">Congratulation</Typography>
        <Typography variant="h3">Your score is</Typography>
        <Typography marginY={5} fontWeight={700} variant="h2">{score}/10</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Button onClick={() => handleChangePage('quiz')} variant="contained" color="success">
          Retry
        </Button>
        <Button onClick={() => handleChangePage('home')} variant="outlined" color="primary">
          Home
        </Button>
      </Stack>
    </Stack>
  )
}
