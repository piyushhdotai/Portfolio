import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "h-full min-h-screen w-full bg-transparent overflow-hidden relative",
        className
      )}
    >
      <Illustration />
      {children}
    </div>
  );
};

const Illustration = () => {
  // Lowered the count to 150 so it feels like a subtle background, not a swarm
  const starsCount = 150; 
  
  const [starCoordinates, setStarCoordinates] = useState([]);
  const [glowingStars, setGlowingStars] = useState([]);
  const highlightedStars = useRef([]);

  // 1. Generate random, organic positions ONCE when the component mounts
  useEffect(() => {
    const coords = Array.from({ length: starsCount }, () => ({
      top: Math.random() * 100, // Random percentage from top
      left: Math.random() * 100, // Random percentage from left
    }));
    setStarCoordinates(coords);
  }, []);

  // 2. Handle the glowing animation
  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 15 }, () =>
        Math.floor(Math.random() * starsCount)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full min-h-screen w-full absolute inset-0">
      {starCoordinates.map((coord, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        return (
          <div
            key={`star-${starIdx}`}
            className="absolute flex items-center justify-center"
            style={{
              // Apply the random positions here
              top: `${coord.top}%`,
              left: `${coord.left}%`,
            }}
          >
            <Star isGlowing={isGlowing} />
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing }) => {
  return (
    <motion.div
      animate={{
        scale: isGlowing ? 1.5 : 1,
        opacity: isGlowing ? 1 : 0.2, // Made the default opacity slightly lower for depth
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      // Optional: changed from pure white to a very slight blue tint to match your theme
      className={cn("bg-blue-100 h-[2px] w-[2px] rounded-full")} 
    ></motion.div>
  );
};