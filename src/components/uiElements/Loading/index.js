import React, { PureComponent } from 'react';
import {Spring} from 'react-spring/renderprops'

const Loading = () => {

  // If the 3D model is not loaded this will  be displayed
  // It has a little simple animation

     const style = ({ props }) => ({
        border: "10px solid white",
        borderRadius: "100%",
        height: props.diameter,
        left: "50%",
        opacity: props.opacity,
        position: "absolute",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: props.diameter,
        zIndex: 1
      });

      const handleRest = () => {
        this.forceUpdate();
      };
    return (
        <Spring
        reset
        from={{ opacity: 1, diameter: 0 }}
        to={{ opacity: 0, diameter: 100 }}
        onRest={handleRest}
      >
        {props => <div style={style({ props })} />}
      </Spring>
    )
}

export default Loading;