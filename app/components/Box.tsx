"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Box() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="h-screen w-full relative flex items-center justify-center snap-start overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/box/image.jpg"
        alt="Box Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
        quality={90}
      />

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black max-w-3xl mx-auto">
          Our box is open, <br />
          we welcome businesses of all sizes to connect with us!
        </h2>
      </motion.div>
    </section>
  );
}