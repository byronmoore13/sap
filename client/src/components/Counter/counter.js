import { animate } from "framer-motion";
import { withStyles } from "@material-ui/core/styles";
import React, { useEffect, useRef } from "react";
import styles from "./styles.js";

const Counter = ({ from, to }, props) => {
  const nodeRef = useRef();
  const { classes } = props;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

export default withStyles(styles)(Counter);