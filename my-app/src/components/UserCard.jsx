import React from "react";

// import material ui for user card
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

// custom style for material ui
const useStyles = makeStyles({
  card: {
    display: "flex",
    padding: "10px",
    margin: "20px 0"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 200,
    height: 200
  }
});

//function for user card
function UserCard(props) {
  // set useStyles to classes for easier modify
  const classes = useStyles();

  return (
    <div className="user-style">
      <Grid item xs={12} md={6}>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {props.user.name}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {props.user.bio}
                </Typography>
              </CardContent>
            </div>

            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={props.user.avatar_url}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );
}

export default UserCard;
