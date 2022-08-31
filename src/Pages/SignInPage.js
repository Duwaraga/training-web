import React, { useState } from "react";
import { Paper, Avatar, TextField, Grid } from "@material-ui/core";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const paperStyle = {
//     padding: 30,
//     height: "40vh",
//     width: 400,
//     margin: "200px auto",
//   };
const avatarStyle = { backgroundColor: "#4f14a6" };

// const [random, setRandomName] = useState("");

const randomName = [
  "Zeke",
  "Oren",
  "Krystina",
  "Zeth",
  "Jolene",
  "Yahir",
  "Charliee",
  "Eli",
  "Marquel",
  "Maverick",
  "Ennah",
  "Finley",
  "Francesco",
  "Jamyra",
  "Oshea",
  "Bradyn",
  "Azra",
  "Tali",
  "Daila",
  "Francisco",
];
// const randomNameHandler = () => {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   setRandomName(text);
// };

const getRandomName = (props) => {
  return randomName[Math.floor(Math.random() * randomName.length)];
};

function SignIn() {
  const [name, setname] = useState();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 30,
    height: "40vh",
    width: 400,
    margin: "200px auto",
  };

  const handleChange = (e) => {
    const name = e.target.value;
    setname(name);
  };

  const handleSubmit = () => {
    console.log(name);
    navigate("/todo", {
      state: { inputname: name },
    });
  };

  const handleClick = () => {
    const randomResearchTitle = getRandomName();

    setname(randomResearchTitle);
    console.log(randomResearchTitle);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2}>
          <Grid xs={1.5} item >
            <Avatar style={avatarStyle}>
              <FilterVintageRoundedIcon />
            </Avatar>
          </Grid>
          <Grid xs={3}>
            <p>Dear Diary</p>
          </Grid>
        </Grid>

        <h2>Sign In</h2>

        <TextField
          style={{ marginRight: "5px", marginBottom: "5px" }}
          id="username"
          label="Name"
          variant="outlined"
          required
          size="small"
          value={name}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          type="button"
        >
          Random
        </Button>
        <div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default SignIn;
