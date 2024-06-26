import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import SignUp from './SignUp';
import { useEffect } from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/dist';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        size='large'
      >
        <Box className='rounded-md' sx={style}>
          {location.pathname === '/login' ? <Login /> : <SignUp />}
        </Box>
      </Modal>
    </>
  );
}
