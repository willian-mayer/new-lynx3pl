"use client"
import { motion, useInView } from "framer-motion";
import { useRef, Fragment } from "react";
import services from "../data/services.json";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="snap-start w-full min-h-screen px-2 sm:px-24 flex items-center justify-center pt-25 md:pt-16"
    >
      {/* Grid para móviles: imagen arriba, texto abajo */}
      <div className="grid grid-rows-[auto_auto] sm:flex sm:flex-col items-center justify-center gap-4 w-full h-full">
        
        {/* Imagen hero responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          // En móviles → mitad de la pantalla
          // En pantallas medianas → como antes
          className="w-full h-[50vh] sm:h-[50vh] md:h-[60vh] overflow-hidden md:px-24"
        >
          <picture>
            <source
              srcSet="/services/service-md.png"
              media="(min-width: 768px)"
            />
            <img
              src="/services/service-xs.png"
              alt="Services"
              className="w-full h-full object-cover rounded-lg"
            />
          </picture>
        </motion.div>

        {/* Lista de servicios */}
        <motion.div
          className="
            w-full 
            flex flex-col md:flex-row flex-wrap 
            justify-start md:justify-around 
            items-center
            px-4 
            z-10 relative rounded-lg md:px-64
          "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <Fragment key={service.title}>
              <motion.a
                href={service.route}
                className="
                  font-extrabold text-black 
                  transition-transform duration-300 hover:scale-110 
                  text-base sm:text-lg md:text-xl 
                  py-1 sm:py-0
                  w-full sm:w-auto text-center inter-bold
                "
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {service.title}
              </motion.a>

              {index < services.length - 1 && (
                <>
                  <span className="block sm:hidden w-full h-px my-2" />
                  <span className="hidden sm:block w-0.5 h-6 bg-black" />
                </>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
