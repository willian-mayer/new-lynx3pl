import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Box() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="h-screen w-full relative flex items-center justify-center snap-start overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/box/image.jpg"
        alt="Box Background"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // se anima solo si está visible
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
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
