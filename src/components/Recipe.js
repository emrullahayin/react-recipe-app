import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

const styles = theme => ({
  list: {
    padding: 5
  },
  radius: {
    borderRadius: 3
  },
  icon: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    borderRadius: 3
  }
});

const Recipe = props => {
  const { classes, title, subtitle, image, shareLink } = props;
  return (
    <GridListTile className={classes.list}>
      <img src={image} alt={title} className={classes.radius} />
      <GridListTileBar
        titlePosition="top"
        className={classes.titleBar}
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          <IconButton
            aria-label="Share"
            target="_blank"
            href={shareLink}
            className={classes.icon}
          >
            <ShareIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

Recipe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Recipe);
