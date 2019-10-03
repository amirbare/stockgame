import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PostData from "../../data/post.json";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

var random = Math.floor(Math.random() * 3421) + 1;
var random1 = Math.floor(Math.random() * 3421) + 1;
var random2 = Math.floor(Math.random() * 3421) + 1;
var random3 = Math.floor(Math.random() * 3421) + 1;

var symbol = PostData.filter(function(name) {
  return name.ID === random;
});

var symbol2 = PostData.filter(function(name) {
  return name.ID === random1;
});

var symbol3 = PostData.filter(function(name) {
  return name.ID === random2;
});

var symbol4 = PostData.filter(function(name) {
  return name.ID === random3;
});
// console.log(symbol);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const divStyle = {
  margin: "40px",

  display: "flex",
  justifyContent: "center"
};

export default function ContainedButtons() {
  // function showAlert() {
  //   const newArray = symbol.map(newItem => {
  //     return newItem.Symbol;
  //   });

  //   console.log(newArray);
  //   if (newArray === newArray) {
  //     alert("correct  ");
  //   }
  // }

  function handleChange(symbol3) {
    alert(symbol3);
  }

  const classes = useStyles();

  return (
    <>
      <div>
        <Paper className={classes.root}>
          <Typography style={divStyle} variant="h5" component="h3">
            {symbol.map((postDetail, index) => {
              return (
                <div>
                  <h1>Which stock repersents the ticker {postDetail.Symbol}</h1>
                </div>
              );
            })}
          </Typography>
        </Paper>
      </div>

      <div style={divStyle}>
        <Button
          value={symbol3}
          onClick={() => handleChange(symbol3)}
          variant="contained"
          color="primary"
          className={classes.button}
          key={PostData.id}
          id={PostData.id}
        >
          {symbol.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // onClick={showAlert}
        >
          {symbol2.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // onClick={e => handleChange(e.target.value)}
          // value={"hello"}
        >
          {symbol3.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          {symbol4.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </Button>
      </div>
    </>
  );
}
