
import React from 'react';
import { motion } from 'framer-motion';

const MotionHOC = (Component) => function HOC(props) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Component {...props}/>
    </motion.div>
  );
};

export default MotionHOC;