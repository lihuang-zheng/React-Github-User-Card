import React from "react";

// import material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

// Card styling for flex
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
    width: 120,
    height: 120,
    borderRadius: "50%"
  }
});

// below are the function for the follower card
function FollowerCard(props) {
  // set useStyles to classes for easier modify
  const classes = useStyles();

  return (
    <div>
      {props.followers.map(follower => (
        <Grid container item xs={12} key={follower.id}>
          <CardActionArea component="a" href={follower.html_url}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {follower.login}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    More info.
                  </Typography>
                </CardContent>
              </div>

              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={follower.avatar_url}
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </div>
  );
}

export default FollowerCard;
