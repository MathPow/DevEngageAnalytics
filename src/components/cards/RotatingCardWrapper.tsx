import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface RotatingCardWrapperProps {
  isShowned?: boolean;
  children: React.ReactNode;
}

export default function RotatingCardWrapper({ isShowned = true, children }: RotatingCardWrapperProps) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <>
      {isShowned && (
        <motion.div
          style={{
            perspective: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* this div can be used as the 'dotted grid' */}
          <motion.div
            style={{
              margin: "auto",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              perspective: 800,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rotateX,
              rotateY,
            }}
            transition={{ velocity: 0 }}
          >
            <motion.div
              key="card"
              style={{
                borderRadius: 10,
                width: 400,
                height: 250,
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
              transition={{ velocity: 0 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
