"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { desc, images } = galleryData[0];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
            <motion.img
              key={i}
              src={img.imgUrl}
              alt={`Gallery ${i + 1}`}
              className="w-full h-72 object-cover shadow-md rounded-xl"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}

          {/* Fila 2 */}
          {images.slice(3, 5).map((img, i) => (
            <motion.img
              key={i + 3}
              src={img.imgUrl}
              alt={`Gallery ${i + 4}`}
              className="w-full h-72 object-cover shadow-md rounded-xl"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="flex items-center justify-center rounded-xl text-left bg-[#404040] text-white pl-6"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm md:text-[1.1em] font-medium inter-medium  mx-9 mr-15">
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
          <motion.img
            src="/gallery/gallery-small-new.png"
            alt="Gallery"
            className="w-auto h-90 max-w-sm rounded-xl shadow-md object-cover"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-left text-base font-medium inter mx-10 pl-2 mr-11"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
