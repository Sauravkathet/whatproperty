import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealDirection = "left" | "right" | "up" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  staggerChildren = 0,
}: RevealProps) {
  let initial = {};
  switch (direction) {
    case "left":
      initial = { opacity: 0, x: -80 };
      break;
    case "right":
      initial = { opacity: 0, x: 80 };
      break;
    case "up":
      initial = { opacity: 0, y: 60 };
      break;
    case "none":
      initial = { opacity: 0 };
      break;
  }

  const variants = {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}

export function RevealItem({ children, className = "", direction = "up" }: RevealItemProps) {
  let initial = {};
  switch (direction) {
    case "left":
      initial = { opacity: 0, x: -40 };
      break;
    case "right":
      initial = { opacity: 0, x: 40 };
      break;
    case "up":
      initial = { opacity: 0, y: 40 };
      break;
    case "none":
      initial = { opacity: 0 };
      break;
  }
  
  const itemVariants = {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
