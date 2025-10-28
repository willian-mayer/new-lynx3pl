"use client"
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import transboardingData from "../data/transboarding.json";

const Transboarding: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { title, shipImageUrl } = transboardingData;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Variants con tipos correctos
  const headingVariant: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
  };

  const imageTopVariant: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
  };

  const imageMainVariant: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay: 0.2 
      } 
    },
  };

  const imageBottomVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay: 0.4 
      } 
    },
  };

  const titleRightVariant: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay: 0.2 
      } 
    },
  };

  return (
    <section
      ref={ref}
      className="w-full h-screen flex items-center justify-center lg:px-12 pt-18"
    >
      {isDesktop ? (
        <div className="flex w-full h-full items-center justify-center gap-8 mx-38">
          {/* Columna izquierda con imágenes */}
          <div className="flex flex-col items-center w-2/3">
            <motion.div
              className="relative w-full h-auto aspect-[16/9] p-2 bg-white rounded-xl"
              variants={imageTopVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Image
                src="/transboarding/top.png"
                alt="Top decoration"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 66vw, 0px"
              />
            </motion.div>

            <motion.div
              className="relative w-full h-80 rounded-lg my-2 p-2"
              variants={imageMainVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Image
                src={shipImageUrl || '/placeholder.png'}
                alt={title}
                fill
                className="object-cover rounded-lg"
                sizes="(min-width: 1024px) 66vw, 0px"
              />
            </motion.div>

            <motion.div
              className="relative w-full h-auto aspect-[16/9] p-2 bg-white rounded-xl"
              variants={imageBottomVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Image
                src="/transboarding/bottom.png"
                alt="Bottom decoration"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 66vw, 0px"
              />
            </motion.div>
          </div>

          {/* Título - derecha */}
          <motion.div
            className="flex items-center justify-center w-1/3"
            variants={titleRightVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h1 className="text-4xl font-bold ml-30 text-[#045804]">{title}</h1>
          </motion.div>
        </div>
      ) : (
        // Mobile Layout
        <div className="flex flex-col w-full h-full">
          <motion.h1
            className="text-right text-xl font-bold my-10 ml-50 mr-10 text-[#045804]"
            variants={headingVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {title}
          </motion.h1>

          <motion.div
            className="relative w-full h-[120px]"
            variants={imageMainVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src={shipImageUrl || '/placeholder.png'}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 0px"
            />
          </motion.div>

          <motion.div
            className="relative w-full h-auto aspect-[16/9] mt-7 px-10 py-2 bg-white rounded-xl"
            variants={imageBottomVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src="/transboarding/small-new.png"
              alt="Extra visual"
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 0px"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Transboarding;