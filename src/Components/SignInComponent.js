import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
//import { blue } from "@material-ui/core/colors";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import Button from "@mui/material/Button";
import axios from 'axios'
import { Link } from "react-router-dom";


//const names = {"James" : "Mary" : "David" :"Richard" };
const SignIn = () => {
  const paperStyle = {
    padding: 30,
    height: "40vh",
    width: 400,
    margin: "200px auto",
  };
  const avatarStyle = { backgroundColor: "#4f14a6" };

  const [random, setRandomName] = useState("");
  const [error, setError] = useState("");

  const randomNameHandler = () => {
    // axios.get("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/",{
    //   headers: {
    //     'X-RapidAPI-Key': '07bf1082ddmsh115bc043eccd1e3p1a49a1jsnf7e94fe75fc2',
    //     'X-RapidAPI-Host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com'
    //   }
    // })
    //   .then((response) => {
    //     setRandomName(response.data);
    //     console.log("New name " + JSON.stringify(response.data));
    //    });


      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      setRandomName(text);
    
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        {/* <div style={{"display":"flex", "flexDirection":"column"}}> */}

        <Grid container spacing={2}>
          <Grid xs={1.5}>
            <Avatar style={avatarStyle}>
              <FilterVintageRoundedIcon />
            </Avatar>
          </Grid>
          <Grid  xs={3}>
            <p>Dear Diary</p> 
          </Grid>
        </Grid>

        {/* <Grid align = 'left'>Dear Diary</Grid> */}
        {/* </div> */}
        <h2>Sign In</h2>

        <TextField
        style={{"marginRight":"5px", "marginBottom":"5px"}}
          id="username"
          label="Name"
          variant="outlined"
          required
          size="small"
          value={random}
        />

            <Button  variant="contained" color="primary" onClick={randomNameHandler}> Random </Button>
        <div>
          <div>
            <Link to="/cart">
            <Button type="submit" variant="contained" color="primary" >
              Continue
            </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
  //const getRandomName = () => `${names[Math.floor(Math.random() * names.length)]}`;
  //  console.log(getRandomName());
};

export default SignIn;
