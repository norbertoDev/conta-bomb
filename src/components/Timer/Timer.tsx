import { Button, Dialog, DialogActions, DialogContent, DialogContentText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BarButtonContainer, ButtonStyled, TextFiedStyled, TimerContainer } from './style';

interface ITimer {
    minutes?: number;
    seconds?: number;
    code?: string;
};

const Timer = ({minutes = 60, seconds = 0, code= "esto no esta selected"} : ITimer) => {

    const [mins, setMinutes] = useState(minutes);
    const [secs, setSeconds] = useState(seconds);
    const [result, setResult] = useState(code); //el codigo
    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState("PASSWORD CORRECTO"); //texto del modal
    const [selected, setSelected] = useState("");
    const [password, setPassword] = useState("");
    const [start,setStart] = useState(false)

    useEffect(() => {
      if(start){
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
      }

      });

    const onClickReset = () => {
        setStart(true);
    }

    const onClickCheck = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    }

    const validateResult = (data : string) => {
      console.log("result -> ",typeof result);
      console.log("data -> ",typeof data);

      if(data.trim() === result.trim()){
        console.log("bingoooo")
        setText("PASSWORD CORRECTO");
      }else {
        setText("INTENTALO DE NUEVO");
      }
    }

    const handleChange = (event: SelectChangeEvent) => {
      console.log("evento tal y cual  ", event.target)
      let esto = event.target.value as string;
      setResult(esto); // echale una revisada  a esto
      setPassword("");
      setText("INTENTALO DE NUEVO");
      setSelected(event.target.value as string);
  };

    //console.log("mins", mins);
    //console.log("secs", secs);
    return (
    <TimerContainer>
        <Select
        className='este'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={"1º ESO"}
        value={selected}
        label="Select curso"
        onChange={handleChange}
        >
            <MenuItem value={"95767256"}>1º ESO</MenuItem>
            <MenuItem value={"75796562"}>2º ESO</MenuItem>
            <MenuItem value={"62675795"}>3º ESO</MenuItem>
        </Select>
        <h2>{mins}:{secs < 10 ? `0${secs}` : secs}</h2>
        <TextFiedStyled
                className='este'
                value={password}
                type="tel"
                label="Introduce la contraseña"
                onChange={(e) => {
                    validateResult(e.target.value);
                    setPassword(e.target.value);
                }}
            />
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