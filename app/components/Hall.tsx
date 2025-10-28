"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "../data/hall.json";

export default function Hall() {
  const { title, imgUrl } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="
        md:px-10 
        py-10 
        min-h-screen 
        flex flex-col 
        items-center 
        text-center 
        justify-center
        md:pb-0
      "
    >
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-[1.55em] font-bold mb-10 mx-23 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Image + Button */}
      <div className="relative w-full">
        {/* Image */}
        <motion.div
          className="relative w-full h-auto aspect-[16/9] md:rounded-xl shadow-md md:max-w-4xl md:mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={imgUrl || "/placeholder.png"}
            alt="Hall Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </motion.div>

        {/* Button over image */}
        <motion.a
          href="#form"
          className="
            absolute left-1/2 -translate-x-1/2 
            bottom-0 translate-y-1/2
            bg-[#045804] text-white px-4 py-2 
            rounded-full shadow-lg 
            hover:bg-gray-800 transition
            w-max md:w-auto
            max-md:text-sm
            md:font-semibold
          "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact Us for a Custom Quote
        </motion.a>
      </div>
    </section>
  );
}
