import { Button, Typography, Modal, Box, TextField } from '@mui/material'

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

export const RankingModal = ({ open, onClose, name, onChange, handleSubmit }) => (
  <Modal
    open={open}
    onClose={onClose}
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
        onChange={onChange}
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Box>
  </Modal>
)
