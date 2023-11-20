import { Button, Stack, Typography, Modal, Box, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const postRanking = async (data) => {
  const url = 'http://127.0.0.1:8000/rankings/'
  await axios.post(url, data)
}

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
      <Modal
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Input your Name:
          </Typography>
          <TextField
            id="outlined-basic"
            label="input your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  )
}
