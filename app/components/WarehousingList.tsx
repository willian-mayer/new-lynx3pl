"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import warehousingList from "../data/warehousinglist.json";

export default function WarehousingList() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full sm:px-10 lg:px-32 md:py-10 min-h-screen flex items-center pt-10 md:items-center"
    >
      <div
        className="
          w-full
          flex flex-col items-center justify-center 
          lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-1 gap-2 lg:mx-24
        "
      >
        {/* Imagen responsive por tamaño de pantalla */}
        <div className="flex items-center justify-center lg:mb-0 lg:col-span-1 w-full">
          <motion.div
            className="relative w-full max-h-[360px] h-[360px] md:mt-20 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Imagen para Desktop */}
            <Image
              src="/warehousing/warehouse2.jpg"
              alt="Warehousing"
              fill
              className="hidden md:block object-cover object-bottom"
              sizes="(min-width: 768px) 100vw, 0px"
              priority
            />
            {/* Imagen para Mobile */}
            <Image
              src="/warehousing/warehouse.jpg"
              alt="Warehousing"
              fill
              className="block md:hidden object-cover object-bottom"
              sizes="(max-width: 767px) 100vw, 0px"
              priority
            />
          </motion.div>
        </div>

        {/* Lista */}
        <div
          className="
            grid grid-cols-1 
            px-2
            border-3 border-green-900
            w-[calc(100%-1.5rem)]
            md:w-full
            md:border-0
            p-2
            m-3
          "
        >
          {warehousingList.map((item, index) => (
            <motion.div
              key={index}
              className="gap-5 py-[0.3em] md:py-0 ml-3 md:ml-54"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xs md:text-lg font-bold text-black inter-bold">
                ● {item.title}:{" "}
                <span className="text-[1em] md:text-lg text-black font-normal inter-medium">
                  {item.desc}
                </span>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}