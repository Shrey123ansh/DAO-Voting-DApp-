import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
import AllowedVoters from "./allowed-voters";

//INTERNAL IMPORT
import { VotingContext } from "../context/Voter";
import Style from "../styles/index.module.css";
import Card from "../components/card/card";
// import image from "../candidate.png";

const index = () => {
  const {uploadToIPFS,
        connectWallet,
        checkIfWalletIsConnected} = useContext(VotingContext);
  return(
    <>
      <AllowedVoters />
    </>
  ) 
}

export default index;
