import { Stack, Button, Typography, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { RankingTable } from './ranking-table'
import { fetchRankings } from '../../api/fetch-ranking'


export const RankingPage = () => {
  const navigate = useNavigate()
  const { data: rankings, isLoading } = useQuery({ queryKey: ['ranking'], queryFn: fetchRankings })

  return (
    <Stack sx={{ height: '500px', padding: '10%' }} gap={3} alignItems="center">
      <Typography variant="h3">Score Board</Typography>
      {isLoading ? <CircularProgress /> : <RankingTable rows={rankings} />}
      <Button onClick={() => navigate('/')}>Back</Button>
    </Stack>
  )
}
