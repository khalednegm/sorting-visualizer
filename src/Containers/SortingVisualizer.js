import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ToolBar from "./ToolBar"
import Bar from "../Components/Bar";
import { resetInstanceArray, bubbleSortAlg, quickSortAlg, heapSortAlg, mergeSortAlg } from "../Algorithms/Algorithms";

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#282c34',
      minHeight: '100vh'
    },
    sortingContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#282c34',
        height: '600px',
        width: '90%',
        borderRadius: '8px',
        position: 'relative',
        marginTop: '50px',
      },
      bars: {
          position: 'absolute',
          bottom: '-4px',
          marginLeft: '2px',
          marginRight: '2px'
      }
  });

const ARRAY_SIZE = 50;
const MIN_BAR_HEIGHT = 10;
const MAX_BAR_HEIGHT = 590;
const SPEED_DIVISOR = 1000;

const BUBBLE_SORT = 'Bubble Sort';
const QUICK_SORT = 'Quick Sort';
const HEAP_SORT = 'Heap Sort';
const MERGE_SORT = 'Merge Sort';

let isReset = false;

const SortingVisualizer = () => {
    const classes = useStyles();

    const [array, setArray] = useState(new Array(ARRAY_SIZE));
    const [speed, setSpeed] = useState(10);
    const [isSorting, setIsSorting] = useState(false);
    const [disableButtonsAndSliders, setDisableButtonsAndSliders] = useState(false);

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    const randomNumGen = (low, high) => {
        return Math.floor((Math.random() * high) + low);
    }

    const randomizeArray = (length = ARRAY_SIZE) => {
        let tempArr = [];
        for(let i=0; i<length; i++) {
            tempArr[i] = randomNumGen(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT);
        }
        setArray(tempArr);
    }

    const calculateWidth = () => {
        let sortingContainerWidth = Number(Math.floor(document.getElementById('sortingVisualizer-1').getBoundingClientRect().width));
        let emptySpace = (array.length*4) + 4;
        let barWidth = (sortingContainerWidth - emptySpace)/array.length;

        return Number(barWidth) - (barWidth*0.01);
    }

    const visualize = async (insArr) => {
        for(let i=0; i<insArr.length; i++) {
            if(!isReset) {
                setArray(insArr[i])
                await sleep(speed);
            }
        }
        if(isReset) {
            resetState();
        }
        setIsSorting(false);
        resetInstanceArray();
    }

    const resetState = () => {
        isReset = false;
        setIsSorting(false);
        setDisableButtonsAndSliders(false);

        randomizeArray(array.length);
    }
    
    const handleClick = (e) => {
        setIsSorting(true);
        setDisableButtonsAndSliders(true);

        if (e.target.innerText === BUBBLE_SORT) {
            const insArr = bubbleSortAlg(array);
            visualize(insArr);
        }

        if (e.target.innerText === QUICK_SORT) {
            const insArr = quickSortAlg(array, 0, array.length-1);
            visualize(insArr);
        }

        if (e.target.innerText === HEAP_SORT) {
            const insArr = heapSortAlg(array);
            visualize(insArr);
        }

        if (e.target.innerText === MERGE_SORT) {
            const insArr = mergeSortAlg(array, 0, array.length-1)
            visualize(insArr);
        }
    }

    const handleResetState = () => {
        isReset = true;
        if(!isSorting) {
            resetState();
        }
    }
    
    const handleChangeBars = (event, value) => {
        randomizeArray(value);
    }

    const handleChangeSpeed = (event, value) => {
        setSpeed(SPEED_DIVISOR/value);
    }
    
    useEffect(() => {
        randomizeArray(ARRAY_SIZE);
    }, [])

    return (
        <Box className={classes.root}>
            <ToolBar 
                clicked={handleClick}
                changeBars={handleChangeBars}
                changeSpeed={handleChangeSpeed}
                disableButtons={disableButtonsAndSliders}
                resetState={handleResetState}
            />
            <Box id="sortingVisualizer-1" className={classes.sortingContainer} style={{ border: isSorting ? '2px solid #ffff05' : '2px solid #a3a300' }}>
                <Box className={classes.bars}>
                    {array.map((value, index) => {
                        return <Bar key={index} height={value} width={calculateWidth()} isSorting={isSorting} />
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default SortingVisualizer;