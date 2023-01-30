import { Button, Dialog, DialogActions, DialogContent, DialogContentText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BarButtonContainer, ButtonStyled, DialoActionStyled, DialogContentStyled, TextFiedStyled, TimerContainer } from './style';

interface ITimer {
    minutes?: number;
    seconds?: number;
    code?: string;
};

const Timer = ({minutes = 15, seconds = 0, code= "esto no esta selected"} : ITimer) => {

    const [mins, setMinutes] = useState(minutes);
    const [secs, setSeconds] = useState(seconds);
    const [result, setResult] = useState(code); //el c   digo
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("INTENTALO DE NUEVO"); //texto del modal
    const [explota, setExplota] = useState(false);
    const [selected, setSelected] = useState("");
    const [password, setPassword] = useState("");
    const [theme, setTheme] = useState("normal");
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
              setText("Bomba Explotada");
              setTheme("bomba");
              setOpen(true);
              setExplota(true);
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

      if(data.trim() === result.trim()){
        setText("PASSWORD CORRECTO");
        setTheme("correcto");
        setSeconds(15);
        setStart(false);
      }else {
        setText("INTENTALO DE NUEVO");
        setTheme("no");
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
    return (
    <TimerContainer>
        <Select
        className='este'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Select curso"
        onChange={handleChange}
        >
            <MenuItem value={"95767256"}>VERDE</MenuItem>
            <MenuItem value={"75796562"}>AMARILLO</MenuItem>
            <MenuItem value={"62675795"}>ROJO</MenuItem>
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
          <ButtonStyled onClick={onClickCheck}> Comprobar </ButtonStyled>
          <ButtonStyled onClick={onClickReset}> Empezar </ButtonStyled>
        </BarButtonContainer>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContentStyled className={theme}>
          <DialogContentText id="alert-dialog-description" className='dialogText'>
              {text}
          </DialogContentText>
        </DialogContentStyled>
        <DialoActionStyled className={theme}>
          <Button onClick={handleClose} disabled={explota} autoFocus>
            Aceptar
          </Button>
        </DialoActionStyled>
      </Dialog>
    </TimerContainer>
    )

}



export default Timer;