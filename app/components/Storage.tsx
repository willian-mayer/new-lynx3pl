"use client"
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import data from "../data/storage.json";

const Storage: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { title, desc, desktop, smartphone } = data;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Variants con tipos correctos
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
  };

  const imageVariant = (delay = 0): Variants => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay 
      } 
    },
  });

  const mobileImageTopVariant: Variants = {
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

  const mobileImageBottomVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay: 0.2 
      } 
    },
  };

  const mobileTextVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9], 
        delay: 0.1 
      } 
    },
  };

  return (
    <section ref={ref} className="w-full">
      {isDesktop ? (
        <div className="grid grid-cols-6 grid-rows-2 w-full h-screen px-40 py-30">
          {/* Título y descripción */}
          <motion.div
            className="col-span-2 row-span-2 flex flex-col justify-center px-8 gap-3"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-xl font-bold leading-6 text-left mr-20 mb-3">{title}</h2>
            <p className="text-md text-black font-medium leading-6 text-left mr-34 mt-2">{desc}</p>
          </motion.div>

          {/* Imágenes fila 1 */}
          <div className="col-span-4 row-span-1 grid grid-cols-3 gap-5 mt-12">
            {desktop.slice(0, 3).map((img, i) => (
              <motion.div
                key={i}
                className="relative w-full h-full mt-1"
                variants={imageVariant(i * 0.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Image
                  src={img.imageUrl || '/placeholder.png'}
                  alt={`Storage ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, 0px"
                />
              </motion.div>
            ))}
          </div>

          {/* Imágenes fila 2 */}
          <div className="col-span-4 row-span-1 grid grid-cols-3 gap-5 mb-12">
            {desktop.slice(3, 6).map((img, i) => (
              <motion.div
                key={i + 3}
                className="relative w-full h-full"
                variants={imageVariant(i * 0.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Image
                  src={img.imageUrl || '/placeholder.png'}
                  alt={`Storage ${i + 4}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, 0px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between min-h-screen">
          {/* Imagen top */}
          <motion.div
            className="relative w-full h-40 mt-20"
            variants={mobileImageTopVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src={smartphone[0]?.imageTop || '/placeholder.png'}
              alt="Storage top"
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 0px"
            />
          </motion.div>

          {/* Texto central */}
          <motion.div
            className="text-center flex-1 flex flex-col justify-start py-2 mt-6"
            variants={mobileTextVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-[1em] font-bold mb-2 text-left leading-4 ml-26">
              {title}
            </h2>
            <p className="text-[.5em] text-black font-medium text-left ml-26">
              {desc}
            </p>
          </motion.div>

          {/* Imagen bottom */}
          <motion.div
            className="relative w-full h-auto aspect-[16/9] pb-5"
            variants={mobileImageBottomVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src={smartphone[1]?.imageBottom || '/placeholder.png'}
              alt="Storage bottom"
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

export default Storage;