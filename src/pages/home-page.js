import { Button, Stack, Typography } from '@mui/material'

export const HomePage = (props) => {
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
      <Button onClick={() => props.handleChangePage('quiz')} size="large" variant="contained">
        Start Trivia
      </Button>
    </Stack>
  )
}
