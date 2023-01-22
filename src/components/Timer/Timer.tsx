import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { BarButtonContainer, ButtonStyled, TimerContainer } from './style';

interface ITimer {
    minutes?: number;
    seconds?: number;
};

const Timer = ({minutes = 0, seconds = 10} : ITimer) => {

    const [mins, setMinutes] = useState(minutes);
    const [secs, setSeconds] = useState(seconds);
    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState("PASSWORD CORRECTO");

    useEffect(() => {
        let sampleInterval = setInterval(() => {
          if (secs > 0) {
            setSeconds(secs - 1);
          }
          if (secs === 0) {
            if (mins === 0) {
              clearInterval(sampleInterval);
            } else {
              setMinutes(mins - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => {
          clearInterval(sampleInterval);
        };
      });

    const onClickReset = () => {
        setSeconds(10)
    }

    const onClickCheck = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    }
    console.log("mins", mins);
    console.log("secs", secs);
    return (
    <TimerContainer>
        <h2>{mins}:{secs < 10 ? `0${secs}` : secs}</h2>
        <TextField helperText= {"esto es la prueba de un helper text"}></TextField>
        <BarButtonContainer>
          <ButtonStyled onClick={onClickCheck}> Check </ButtonStyled>
          <ButtonStyled onClick={onClickReset}> Start </ButtonStyled>
        </BarButtonContainer>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </TimerContainer>
    )

}



export default Timer;