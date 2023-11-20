import { Stack, Button, Typography, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { RankingTable } from './ranking-table'
import { fetchRankings } from '../../api/fetch-ranking'


export const RankingPage = ({ handleChangePage }) => {
  const { data: rankings, isLoading } = useQuery({ queryKey: ['ranking'], queryFn: fetchRankings })

  return (
    <Stack sx={{ height: '500px', padding: '10%' }} gap={3} alignItems="center">
      <Typography variant="h3">Score Board</Typography>
      {isLoading ? <CircularProgress /> : <RankingTable rows={rankings} />}
      <Button onClick={() => handleChangePage('home')}>Back</Button>
    </Stack>
  )
}
