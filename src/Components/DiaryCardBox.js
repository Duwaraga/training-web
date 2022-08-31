import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Divider from '@mui/material/Divider';

function DiaryCardBox({ title, name, description }) {
  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alighitems: "center",
    padding: 10,
    height: "100%",
    width: "100%",
  };
  // const isSeeMore = false;
  // const needSeeMore = description > 100;
  // const [bodyContent, setBodyContent] = useState(
  //   needSeeMore ? description.slice(0, 100) + "..." : description
  // );
  // const [isSeeMoreShown, setIsSeeMoreShown] = useState(isSeeMore);

  // const onSeeMoreClick = () => {
  //   if (isSeeMoreShown && needSeeMore) {
  //     setBodyContent(description.slice(0, 100) + "...");
  //   } else setBodyContent(description);
  //   setIsSeeMoreShown(!isSeeMoreShown);
  // };

  return (
    // ===================================================================
    <Paper elevation={10} style={paperStyle}>
      <Card className={"m-1 diary-card"}>
        <Card.Title className={"p-3 pb-0"}>
          <Row>
            <Col className={"col-10"}>{title}</Col>
          </Row>
        </Card.Title>
       
        <Card.Subtitle className={"p-3 pt-0 pb-0 text-muted"}>
          {name}
        </Card.Subtitle>
        <div className={"hr"} />
        <Card.Body>
        <div><Divider textAlign="left">Description</Divider></div>
          {/* <Row>
            <Col>{bodyContent}</Col>
          </Row> */}
          <Row>
            {/* <Col className={"see-more"} onClick={() => onSeeMoreClick()}>
              {needSeeMore ? (isSeeMoreShown ? "See less" : "See more") : ""}
            </Col> */}
          </Row>
        </Card.Body>
      </Card>
    </Paper>
    // ===================================================================

    // <Paper elevation={10} style={paperStyle}>
    //   <div>
    //     <h5>Title: {title}</h5>
    //   </div>
    //   <div>
    //     <h5>Description: {description}</h5>
    //   </div>
    // </Paper>
  );
}

export default DiaryCardBox;
