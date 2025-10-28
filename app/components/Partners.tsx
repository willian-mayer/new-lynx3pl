"use client"
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import data from "../data/partners.json";

const Partners: React.FC = () => {
  const { title } = data;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Variants con el tipo correcto
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] // ease como array
      } 
    },
  };

  const fadeDownVariant: Variants = {
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

  return (
    <section ref={ref} className="px-4 md:px-10 py-10 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 mt-20 md:mt-40">
        {isDesktop ? (
          <div className="w-full max-w-5xl flex flex-row items-center gap-10">
            {/* Texto del título */}
            <motion.h2
              className="text-[2em] font-bold text-[#045804] text-right ml-32 mt-56 flex-1"
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {title}
            </motion.h2>

            {/* Imagen principal con Next.js Image */}
            <motion.div
              variants={fadeDownVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative w-80 h-80"
            >
              <Image
                src="/partners/main-logo-new.png"
                alt="Main Partner Logo"
                fill
                className="object-contain"
                sizes="320px"
                priority
              />
            </motion.div>
          </div>
        ) : (
          <div className="w-full max-w-5xl flex flex-col-reverse items-center gap-10">
            <motion.h2
              className="text-xl font-bold text-[#045804] text-right ml-35 mt-4 flex-1"
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {title}
            </motion.h2>

            <motion.div
              variants={fadeDownVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative w-[220px] h-[220px]"
            >
              <Image
                src="/partners/main-logo-new.png"
                alt="Main Partner Logo"
                fill
                className="object-contain"
                sizes="220px"
                priority
              />
            </motion.div>
          </div>
        )}

        {/* Partner Logos */}
        {/* Mobile */}
        <motion.div
          className="w-full flex flex-wrap justify-end items-end gap-3 md:hidden p-5 bg-white rounded-xl relative"
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative w-full h-auto aspect-[16/9]">
            <Image
              src="/partners/new-logos-small.png"
              alt="Partners Logos"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 0px"
            />
          </div>
        </motion.div>

        {/* Desktop */}
        <motion.div
          className="hidden md:flex w-full justify-center mt-10 md:mt-5 md:p-5 bg-white rounded-xl relative"
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative w-full h-auto aspect-[16/9] max-w-6xl">
            <Image
              src="/partners/new-logos-md.png"
              alt="Partners Logos"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 1152px, 0px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;