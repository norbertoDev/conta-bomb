import styled from "@emotion/styled";
import radioactivo from "../../assets/radioactivo.png";





export const HeaderContainer = styled.div`
    background-image: url(${radioactivo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 75px;
    background-color: red;
    justify-content: end;
    aling-items: center;
    & .bomba {
    position: fixed;
    top: 150px;
    width: 500px;
    }
`