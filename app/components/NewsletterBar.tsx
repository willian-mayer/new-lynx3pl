import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // Here you can send the email to your backend or newsletter service
    console.log("Submitting email:", email);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 left-0 w-full bg-black text-white shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-3 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {!submitted ? (
          <>
            <p className="text-sm sm:text-sm font-medium">
              📦 Stay updated with our news on{" "}
              <span className="font-semibold">warehousing</span>,{" "}
              <span className="font-semibold">transloading</span>, and{" "}
              <span className="font-semibold">fulfillment</span>
              <span className="font-semibold"> and more!</span>
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex w-full sm:w-auto items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-3 py-2 rounded-xl text-gray-900 text-sm flex-1 sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#045804] bg-white"
              />
              <button
                type="submit"
                className="bg-[#045804] text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-yellow-500 transition"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <p className="text-center w-full font-medium">
            ✅ Thank you for subscribing! You will receive updates soon.
          </p>
        )}
      </div>
    </motion.div>
  );
}
