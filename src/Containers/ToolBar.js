import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LeverComponent from "../Components/LeverComponent";
import ReplayIcon from '@material-ui/icons/Replay';
import BarChartIcon from '@material-ui/icons/BarChart';
import SpeedIcon from '@material-ui/icons/Speed';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#282c34',
      borderRadius: '0px',
      borderBottom: '2px solid grey',
      height: '60px',
      width: '100%',
    },
    btnContainer: {
        marginLeft: '10px'
    },
    btn: {
        backgroundColor: '#52af77',
        height: '37px',
        marginLeft: '20px',
        textTransform: 'none',
        fontSize: '14px',
        fontFamily: 'Cursive',
        borderRadius: '7px',
        '&:hover': {
           backgroundColor: '#79e9de'
        }
    },
    resetBtn: {
        backgroundColor: '#006400',
        marginLeft: '50px',
        marginBottom: '2px',
        '&:hover': {
            backgroundColor: '#00cc00'
         }
    },
    resetIcon: {
        width: '20px',
        color: 'white'
    },
    textAndIconContainer: {
        display: 'flex',
        fontSize: '17px',
        fontFamily: 'Cursive',
        marginTop: '5px',
        alignItems: 'center',
        color: '#C0C0C0'
    },
    sliderIcons: {
        marginLeft: '10px',
    },
    levers: {
        display: 'flex',
        flexDirection: 'row'
    },
    leverContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        marginBottom: '7px'
    }
  });

const DEFAULT_BAR_NUMBER = 50;
const MIN_BARS = 2;
const MAX_BARS = 228;

const DEFAULT_SPEED = 80;
const MIN_SPEED = 1;
const MAX_SPEED = 100;

const ToolBar = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Box className={classes.btnContainer}>
                <Button className={classes.btn} size="small" onClick={props.clicked} disabled={props.disableButtons} >Bubble Sort</Button>
                <Button className={classes.btn} size="small" onClick={props.clicked} disabled={props.disableButtons} >Quick Sort</Button>
                <Button className={classes.btn} size="small" onClick={props.clicked} disabled={props.disableButtons} >Heap Sort</Button>
                <Button className={classes.btn} size="small" onClick={props.clicked} disabled={props.disableButtons} >Merge Sort</Button>
                <Button className={classes.resetBtn} size="small" onClick={props.resetState} ><ReplayIcon className={classes.resetIcon} /></Button>
            </Box>
            <Box className={classes.levers}>
                <Box className={classes.leverContainer}>
                    <Box className={classes.textAndIconContainer}>
                        Bars
                        <BarChartIcon className={classes.sliderIcons} />
                    </Box>
                    <LeverComponent color="blue" defaultValue={DEFAULT_BAR_NUMBER} min={MIN_BARS} max={MAX_BARS} onChange={props.changeBars} disableButtons={props.disableButtons} />
                </Box>
                <Box className={classes.leverContainer}>
                    <Box className={classes.textAndIconContainer}>
                        Speed
                        <SpeedIcon className={classes.sliderIcons} />
                    </Box>
                    <LeverComponent color="red" defaultValue={DEFAULT_SPEED} min={MIN_SPEED} max={MAX_SPEED} onChange={props.changeSpeed} disableButtons={props.disableButtons} />
                </Box>
            </Box>
        </Box>
    )
}

export default ToolBar;