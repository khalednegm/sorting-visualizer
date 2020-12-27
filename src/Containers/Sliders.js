import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LeverComponent from "../Components/Lever";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leverContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    marginBottom: '7px'
    }
});

const Sliders = (props) => {
  const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.leverContainer}>
                <Typography >
                    Bars
                </Typography>
                <LeverComponent min={2} max={228} />
            </Box>
            <Box className={classes.leverContainer}>
                <Typography >
                    Speed
                </Typography>
                <LeverComponent />
            </Box>
        </Box>
    )
}

export default Sliders;