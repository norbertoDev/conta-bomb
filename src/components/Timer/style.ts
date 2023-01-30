import styled from "@emotion/styled";
import { Dialog, DialogActions, DialogContent, TextField, withStyles, withTheme } from "@mui/material";
import { color } from "@mui/system";


export const TimerContainer= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100%;
color: black;
h2{
  font-size: 30px;
}
& .este {
  background-color: white;
  min-width: 100px;
}
`;

export const BarButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`

export const ButtonStyled = styled.button`
  text-align: center;
  width: 80px;
  height: 50px;
`

export const TextFiedStyled = styled(TextField)`

`;


export const DialogContentStyled = styled(DialogContent)`
&.correcto {
  background-color:#00ff00
  ;
}
&.bomba {
  background-color: black;
  color: white;
  & .dialogText {
    text-align: center;
    color: white;
    font-weight: bold;
  }
}
background-color: red;
  & .dialogText {
    text-align: center;
    color: black;
    font-weight: bold;
  }
`

export const DialoActionStyled = styled(DialogActions)`
  &.correcto {
    background-color:#00ff00;
  }

  &.bomba {
    background-color: black;
    color: white;
    & .dialogText {
      text-align: center;
      color: white;
      font-weight: bold;
    }
  }
  background-color: red;
`;