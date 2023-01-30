import styled from "@emotion/styled";
import { TextField, withStyles, withTheme } from "@mui/material";
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
  width: 70px;
  height: 30px;
`

export const TextFiedStyled = styled(TextField)`

`;