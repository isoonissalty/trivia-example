import { Stack, Button, Typography, CircularProgress } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const RANKING_API_URL = 'http://127.0.0.1:8000/rankings/'

const fetchRankings = async () => {
  const response = await axios.get(RANKING_API_URL)
  console.log(response)
  return response.data
}

export const RankingPage = ({ handleChangePage }) => {
  // fetch api
  const { data: rankings, isLoading } = useQuery({ queryKey: ['ranking'], queryFn: fetchRankings })

  return (
    <Stack sx={{ height: '500px', padding: '10%' }} gap={3} alignItems="center">
      <Typography variant="h3">Score Board</Typography>
      {isLoading ? <CircularProgress /> : <RankingTable rows={rankings} />}
      <Button onClick={() => handleChangePage('home')}>Back</Button>
    </Stack>
  )
}

export const RankingTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">score</TableCell>
            <TableCell align="right">time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.sort((a, b) => b.score - a.score).map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
