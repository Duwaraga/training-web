import React, { useState } from "react";
import { Paper, TextField, Container, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import ProductBox from "./ProductBox";
import { Link } from "react-router-dom";

//const names = {"James" : "Mary" : "David" :"Richard" };
const AddNewCart = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: "150vh",
  };
  const avatarStyle = { backgroundColor: "#4f14a6" };

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [productArray, setProductArray] = useState([]);

  // let productArr = []

  const submitHandler = (e) => {
    e.preventDefault();
    productArray.push({ name: product, description: description });
    let arr = [...productArray];
    setProductArray(arr);

    // setProductArray(...productArr)
    console.log("arr" + productArray);
    console.log(product);
    console.log(description);
    console.log(productArray);
  };

  return (
    <Container>
      <form>
        <Paper elevation={10} style={paperStyle}>
          <div style={{"textAlign":"right"}}>

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
          </div>

          <div>
            <h3>Product Cart</h3>
          </div>

          <TextField
            style={{ marginRight: "5px", marginBottom: "5px" }}
            id="product"
            label="Product Name"
            variant="outlined"
            required
            size="small"
            onChange={(e) => setProduct(e.target.value)}
          />

          <div>
            <div>
              <TextField
                style={{ marginRight: "5px", marginBottom: "5px" }}
                id="description"
                label="Description"
                variant="outlined"
                required
                size="small"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
                Add
              </Button>
            </div>
          </div>

          <Grid container spacing={2}>
          {productArray.map((e) => (
          <Grid xs={3}>
            <ProductBox name={e.name} description={e.description} />
            </Grid>
          ))}
            </Grid>
       
          

          {/* <ProductBox name="test" description="test"/> */}
        </Paper>
      </form>
    </Container>
  );
};

export default AddNewCart;
