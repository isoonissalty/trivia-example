import { Button, Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { RankingModal } from './rank-modal'
import { postRanking } from '../../api/post-ranking'

export const ResultPage = ({ time, score, handleChangePage }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [name, setName] = useState('')

  const mutation = useMutation({
    mutationFn: postRanking,
  })

  useEffect(() => {
    setTimeout(() => {
      setIsShowModal(true)
    }, 1500)
  }, [])

  const handleSubmit = () => {
    console.log(name, score, time)
    mutation.mutate({
      name,
      score,
      time,
    })
    setIsShowModal(false)
  }

  return (
    <>
      <Stack sx={{ height: '100vh' }} direction="column" justifyContent="center" alignItems="center" spacing={5}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h3">Congratulation</Typography>
          <Typography variant="h3">Your score is</Typography>
          <Typography marginY={5} fontWeight={700} variant="h2">
            {score}/10
          </Typography>
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
      <RankingModal
        onSubmit={handleSubmit}
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}
