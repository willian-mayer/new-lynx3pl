"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import warehousingData from "../data/newwarehousing.json";

export default function NewWarehousing() {
  const { title, desc } = warehousingData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full md:px-6 sm:px-10 xl:px-32 md:py-10 md:pt-15 min-h-screen flex items-center"
    >
      {/* Mobile & Tablet: formato teléfono | Desktop: grid tipo Partners */}
      <div
        className="
          w-full
          flex flex-col items-start justify-start py-20
          md:grid md:grid-rows-3 md:grid-cols-3 md:gap-2 md:mx-12 
        "
      >
        {/* Imagen */}
<div className="flex items-center justify-center mb-6 md:mb-0 lg:row-span-3 md:col-start-2 md:col-span-2">
  <motion.img
    src="/newwarehousing/image.png"
    alt="Warehousing"
    className="
      w-full 
      md:max-w-lg      /* un poco más pequeño en desktop */
      lg:max-w-lg      /* todavía más control en pantallas grandes */
      xl:max-w-2xl     /* antes era 4xl, ahora lo bajamos */
      h-auto 
      shadow-md
      object-contain   /* asegura que no se recorte raro */
      rounded-xl
    "
    initial={{ opacity: 0, scale: 0.95 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6 }}
  />
</div>


        {/* Title */}
        <div
          className="
            px-6 
            flex items-center justify-center 
            text-left
            md:text-left md:items-center md:justify-end md:row-start-3 md:col-start-1 
            pt-6
          "
        >
          <motion.h2
            className="
              text-2xl text-black inter-bold 
              sm:text-4xl lg:text-5xl
              w-full
              mb-4 sm:mb-6
              mt-4 sm:mt-0
            "
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Descripción */}
        <div className="px-6 text-left md:text-left md:col-span-3 md:col-start-1 md:row-start-5 flex items-center justify-center md:mt-10">
          <motion.p
            className="text-md sm:text-[1.4em] text-black inter-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {desc}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
