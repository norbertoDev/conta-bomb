import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { HeaderContainer } from "./styles";
import bomba  from "../../assets/bomba.png";

const Header = () => {

    return (
    <HeaderContainer className="header">
        <img src={bomba} alt="bomba" className="bomba"/>
    </HeaderContainer>
    );
}

export default Header;