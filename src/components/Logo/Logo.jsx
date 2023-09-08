import React from "react";
import { Link as Anchor } from "react-router-dom";
import tynerary from "../../assets/img/logo.png";
import "./logo.css"
export default function Logo() {
  return (
    <Anchor to={"/"} className="display-2 m-1">
      <img src={tynerary} className="logito"/>     
    </Anchor>
  );
}
