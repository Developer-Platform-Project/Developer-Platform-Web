import React from 'react';
import { makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DetailStepper from './DetailStepper';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '12px',
    padding: '24px 40px',
    paddingBottom: '28px',
    outline: 0,
  },
}));

const SignUpModal = ({history}) => {
  const theme = unstable_createMuiStrictModeTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DetailStepper history={history}/>
          </div>
        </Fade>
      </Modal>
    </ThemeProvider>
  )
}

export default SignUpModal;
