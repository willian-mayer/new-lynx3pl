"use client"
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { desc, images } = galleryData[0];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen px-4 py-10 flex flex-col md:items-center md:justify-center pt-12 md:pt-24"
    >
      <div className="w-full md:mx-64 max-w-7xl flex flex-col md:h-auto">
        {/* Pantallas md+ → Grid existente */}
        <motion.div
          className="hidden md:grid grid-cols-3 grid-rows-2 gap-7 w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Fila 1 */}
          {images.slice(0, 3).map((img, i) => (
            <motion.div
              key={i}
              className="relative w-full h-72 shadow-md rounded-xl overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <Image
                src={img.imgUrl || '/placeholder.png'}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 0px"
              />
            </motion.div>
          ))}

          {/* Fila 2 */}
          {images.slice(3, 5).map((img, i) => (
            <motion.div
              key={i + 3}
              className="relative w-full h-72 shadow-md rounded-xl overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <Image
                src={img.imgUrl || '/placeholder.png'}
                alt={`Gallery ${i + 4}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 0px"
              />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center justify-center rounded-xl text-left bg-[#404040] text-white pl-6"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <p className="text-sm md:text-[1.1em] font-medium inter-medium mx-9 mr-15">
              {desc}
            </p>
          </motion.div>
        </motion.div>

        {/* Pantallas pequeñas → Imagen única + texto */}
        <motion.div
          className="md:hidden flex flex-col items-center justify-center gap-6 min-h-screen pb-10 gap-10 mt-20 md:mt-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="relative w-auto h-90 max-w-sm rounded-xl shadow-md overflow-hidden"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <Image
              src="/gallery/gallery-small-new.png"
              alt="Gallery"
              width={384}
              height={360}
              className="object-cover rounded-xl"
              sizes="(max-width: 767px) 384px, 0px"
              priority
            />
          </motion.div>

          <motion.p
            className="text-left text-base font-medium inter mx-10 pl-2 mr-11"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            We offer choices of{" "}
            <span className="font-bold">real-time inventory</span> management
            <span className="font-bold"> software solutions</span> and uniquely{" "}
            <span className="font-bold">versatile storage</span> options
            tailored to diverse customer needs, setting us apart from the
            competitions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}