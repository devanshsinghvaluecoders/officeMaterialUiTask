import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import CustomForm from '../Forms/Form';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CustomModal({ handleClose, open }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CustomForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
export default CustomModal;
