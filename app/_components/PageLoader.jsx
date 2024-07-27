"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const MIN_DISPLAY_TIME = 3000; // 3 seconds minimum display time

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const startTime = Date.now();
    setLoading(true);

    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);

      setTimeout(() => setLoading(false), remainingTime);
    }, MIN_DISPLAY_TIME);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  if (!loading) return null;

  const pathVariants = {
    hidden: { pathLength: 0, fill: "rgba(19, 131, 75, 0)" },
    visible: {
      pathLength: 1,
      fill: "rgba(19, 131, 75, 1)",
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        fill: { duration: 1, ease: [1, 0, 0.8, 1], delay: 2 },
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.svg
        width="141"
        height="93"
        viewBox="0 0 141 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onAnimationComplete={handleAnimationComplete}>
        <g clipPath="url(#clip0_921_5059)">
          <motion.path
            d="M97.0676 35.3287H113.719L103.106 88.6123L86.7105 88.7066L97.0676 35.3287Z"
            stroke="#13834B"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M139.274 17.4932L135.793 33.6574H68.9124L70.6485 25.5839L72.3932 17.4932H139.274Z"
            stroke="#13834B"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        <g clipPath="url(#clip1_921_5059)">
          <motion.path
            d="M65.2947 34.0283C67.3302 22.715 59.9066 15.49 45.3758 15.49H13.2439L3.38287 71.3363C8.77097 64.8826 14.9373 58.9431 14.9373 58.9431C14.9373 58.9431 16.9215 62.2171 18.9913 66.571C19.6412 67.8909 20.2912 69.2965 20.8814 70.762L23.2932 57.0662H35.8911C41.6982 57.0662 44.7429 60.1173 43.7337 65.2168C42.8101 70.4192 39.1581 73.1618 33.2569 73.1618H21.805C21.9675 73.6161 22.13 74.0446 22.2754 74.4988C23.3958 77.8757 24.0287 81.1668 23.4984 83.5666C23.2419 84.7579 22.8484 85.9149 22.3438 87.0205H33.8641C48.8995 87.0205 58.9744 79.3755 60.9928 67.5652C62.421 59.4145 58.2474 52.0866 50.3192 50.3468C57.6402 48.307 63.7467 42.7018 65.2605 34.0369L65.2947 34.0283ZM47.1034 36.9937C46.2909 41.8876 42.6305 44.5273 36.8233 44.5273H25.5425L28.1938 29.2459H39.5686C45.2646 29.2459 47.9159 32.0142 47.1034 36.9937Z"
            stroke="#13834B"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M20.0268 82.9578C19.659 84.6891 18.8636 86.3175 17.7689 87.7145C15.4597 90.7314 11.8249 92.7626 8.14731 92.7626C4.86314 92.7626 2.30593 91.1342 1.06581 88.6401C0.817788 88.1516 0.629632 87.6288 0.492792 87.0717C0.184901 85.8204 0.15069 84.432 0.467134 82.9578C0.6895 81.9379 1.29673 80.6951 2.15198 79.3496C5.82957 73.4958 13.9801 65.6365 13.9801 65.6365C13.9801 65.6365 15.3828 67.942 16.8452 71.0018C17.6748 72.7159 18.5215 74.67 19.163 76.5812C19.9498 78.9639 20.3945 81.278 20.0353 82.9664L20.0268 82.9578Z"
            stroke="#13834B"
            strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        <defs>
          <clipPath id="clip0_921_5059">
            <rect
              width="71.9434"
              height="71.9434"
              fill="white"
              transform="translate(68.6793 17.5472)"
            />
          </clipPath>
          <clipPath id="clip1_921_5059">
            <rect
              width="66.6792"
              height="93"
              fill="white"
              transform="translate(0.2453)"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default PageLoader;
