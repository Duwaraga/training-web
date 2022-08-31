import React, { useEffect, useState } from "react";
import { Paper, TextField, Container, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DiaryCardBox from "./DiaryCardBox";
import { Link, useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import slice from "../Utils/slice";
import { useDispatch, useSelector } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import alltodos from "../Utils/firebaseConfig";
// import { useLocation } from "react-router-dom";

const AddNewCard = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: "175vh",
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleArray, setTitleArray] = useState([]);
  const location = useLocation();


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("location" , location);
    dispatch(
      slice.actions.postAdded({
        title: e.target.title.value,
        description: e.target.description.value,
        name: location.state.inputname,
      })
    );

    // titleArray.push({ name: title, description: description });

    // let arr = [...titleArray];
    // setTitleArray(arr);

    console.log("arr" + titleArray);
    console.log(title);
    console.log(description);
    console.log(titleArray);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let arr = [...titleArray];
    onSnapshot(alltodos, (snapshot) => {
      arr = [];
      snapshot.docs.forEach((element) => {
        arr.push(element.data());
        console.log("arr" + titleArray);
      });
      dispatch(slice.actions.saveTodo(arr));
    });
  }, [] );

  const todos = useSelector((state) => state.todo.User);

  return (
    <Container>
      <Paper elevation={10} style={paperStyle}>
        <div style={{ textAlign: "right" }}>
          <Link to="/">
            <Button
              style={{ alignItems: "left" }}
              variant="contained"
              color="secondary"
            >
              {" "}
              Logout{" "}
            </Button>
          </Link>

          <IconButton
            color="inherit"
            aria-label="notifications"
            alignItems="left"
          >
            <div>
              <NotificationsIcon />
            </div>
          </IconButton>
        </div>

        <div>
          <h1>Dear Diary</h1>
        </div>

        <form onSubmit={submitHandler}>

        <TextField
          className="Title"
          style={{ marginRight: "5px", marginBottom: "5px" }}
          id="title"
          name="title"
          label="Title"
          value={title}
          variant="outlined"
          required
          size="small"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <div>
            <TextField
              className="Description"
              // style={{ marginRight: "5px", marginBottom: "5px" }}
              multiline
              rows={4}
              name="description"
              id="description"
              label="Description"
              value={description}
              variant="outlined"

              required
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              
            >
              Add
            </Button>
            
          </div>
        </div>
        </form>

        <Grid container spacing={2}>
          {todos.map((e) => (
            <Grid xs={3}>
              <DiaryCardBox name={e.name} description={e.description} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default AddNewCard;
