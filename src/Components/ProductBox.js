import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
//import { blue } from "@material-ui/core/colors";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import Button from "@mui/material/Button";
import axios from 'axios'


//const names = {"James" : "Mary" : "David" :"Richard" };
const ProductBox = ({name, description}) => {
  const paperStyle = {
    padding: 20,
    height: "10vh",
    width: "30vh",
    margin: "5px"

  };



  return (
   
      <Paper elevation={10} style={paperStyle}>
        <div>
            <h5>Product Name : {name}</h5>
        </div>
        <div>
            <h5>Product Description : {description}</h5>
        </div>
      </Paper>

      
  );
  //const getRandomName = () => `${names[Math.floor(Math.random() * names.length)]}`;
  //  console.log(getRandomName());
};

export default ProductBox;
