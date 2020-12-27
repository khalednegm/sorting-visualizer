import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'inline-block',
      marginLeft: '4px',
      borderRadius: '2px'
    },
  });

const DARK_GREEN = '#006400';
const LIGHT_GREEN = '#00cc00';

const setBackgroundColor = (isSorting) => isSorting ? LIGHT_GREEN : DARK_GREEN;

const Bar = ({height, width, isSorting}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} style={{ height: `${height}px`, width: `${width}px`, backgroundColor: setBackgroundColor(isSorting) }} />
    )
}

export default Bar;