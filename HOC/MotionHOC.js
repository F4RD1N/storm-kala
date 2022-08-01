import React from "react";
import { motion } from "framer-motion";

const MotionHOC = (Component) =>
  function HOC(props) {
    return (
      <motion.div
        whileInView={{  opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };

export default MotionHOC;
