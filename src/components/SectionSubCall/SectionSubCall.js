import React from 'react';
import { StyledSubCall } from "./SubCall.styled";
import { motion } from "framer-motion";

const initial = {
    x: -400,
}
const animate = {
    x: 0
}
const transition = {
        ease: 'easeInOut',
        duration: 1,
}

export default function SectionSubCall(props) {
    return (
        <StyledSubCall>
            <motion.h2
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                initial={initial}
                animate={animate}
                transition={transition}
            >{props.subcalltxt}</motion.h2>
        </StyledSubCall>
    )
}
