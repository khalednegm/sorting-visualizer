import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

  const SliderBar = withStyles({
    root: {
      width: '200px',
      marginRight: '100px',
    },
    thumb: {
      height: '20px',
      width: '20px',
      backgroundColor: "#fff",
      border: "5px solid currentColor",
      marginTop: -8,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit",
      },
    },
    track: {
      borderRadius: '10px'
    },
    rail: {
      height: '5px',
      borderRadius: '2px',
      opacity: 1
    }
  })(Slider);


const LeverComponent = ({defaultValue, min, max, onChange, color, disableButtons}) => {
    return (
        <SliderBar
            style={{ color: !disableButtons ? color : ''}}
            defaultValue={defaultValue}
            step={1}
            min={min}
            max={max}
            disabled={disableButtons}
            onChange={onChange}
        />
    )
}

export default LeverComponent;