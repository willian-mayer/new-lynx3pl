import { useState } from "react";
import { motion } from "framer-motion";

export default function WatchUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="h-screen grid grid-cols-3 grid-rows-3 font-bold text-3xl md:text-5xl tracking-tight">
        {/* Imagen: columnas 1 y 2 */}
        <div className="col-span-2 row-span-3 relative">
          <img
            src="/watchus/image.JPG"
            alt="Watch Us"
            className="w-full h-full object-cover"
          />

          {/* Textos izquierda */}
          <div className="absolute inset-0 flex items-center justify-end row-start-2 col-span-2">
            <div className="space-y-1 text-right text-white drop-shadow-md pr-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hover:text-cyan-700 hover:cursor-pointer"
                >
                  Watch Us
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Effici
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Accu
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Trans
              </motion.div>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 row-span-3 bg-[#e8e4dc] relative">
          <div className="absolute inset-0 flex items-center justify-start row-start-2 col-start-3">
            <div className="space-y-1 text-left text-black">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-cyan-700 pl-2"
              >
                Work
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                ency
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                racy
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                parency
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="/watchus/Lynx3PL.mp4"
              title="Watch Us Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 right-0 text-white text-3xl font-bold px-4"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
