import { Button, Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import CustomForm from '../Forms/Form';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '70%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CustomModal({ handleClose, open }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Paper elevation={3} sx={style}>
          <Button
            variant='contained'
            onClick={handleClose}
            color='error'
            sx={{ float: 'right' }}
          >
            <CloseIcon />
          </Button>

          <CustomForm handleClose={handleClose} />
        </Paper>
      </Modal>
    </div>
  );
}
export default CustomModal;
