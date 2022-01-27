import React from "react";
import { Avatar } from "@mui/material";

function Logo() {
  return (
    <div className="logo">
      <Avatar className="logo__avatar" alt="TeleHealthCare" src="./1.jpg" />
      <p className="logo__name">TeleHealth</p>
    </div>
  );
}

export default Logo;
