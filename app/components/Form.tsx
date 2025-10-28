"use client"
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import formData from "../data/form.json";
import { reportConversion } from "../lib/gtag";

export default function Form() {
  const { contactInfo, interests } = formData;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    interests: [] as string[],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "message" && successMessage) {
      setSuccessMessage("");
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((i) => i !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevenir múltiples envíos
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          interests: formValues.interests.join(", "),
        }),
      });

      const result = await response.text();

      if (result === "success") {
        // ✅ Reportamos conversión
        reportConversion("http://lynx3pl.com");

        setSuccessMessage(
          "Your message has been received, and a team member will get back to you within 1 business day."
        );
        setFormValues({ name: "", email: "", message: "", interests: [] });
      } else {
        setSuccessMessage(
          "Your message has been received, but we could not confirm the server response. Please check your email inbox."
        );
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("⚠️ Network error, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 📱 Mobile Layout
  if (!isDesktop) {
    return (
      <section className="px-4 md:px-6 pt-18 md:pt-0 h-screen md:flex md:items-center md:justify-center">
        <div className="w-full max-w-6xl overflow-y-auto md:overflow-visible md:h-auto h-full">
          <h1 className="text-center font-bold text-xl mb-3 ml-25">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="grid gap-2">
            {/* Full Name */}
            <label className="flex text-md font-medium pb-2 mx-5">
              <span className="whitespace-nowrap mt-1 pr-4 text-md font-bold">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border px-3 h-6 rounded"
              />
            </label>

            {/* Email */}
            <label className="flex text-md font-medium mx-5">
              <span className="whitespace-nowrap mt-1 pr-[14px] text-md font-bold">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border px-3 py-1 h-6 rounded"
              />
            </label>

            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-2 gap-4 ml-5 mt-2">
              {/* Columna izquierda: Interests */}
              <div>
                <h2 className="text-md font-bold mb-2">I'm interested in:</h2>
                <div className="flex flex-col gap-3">
                  {interests.map((interest, idx) => (
                    <label
                      key={idx}
                      className="text-xs font-semibold flex items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        value={interest}
                        checked={formValues.interests.includes(interest)}
                        onChange={handleCheckboxChange}
                        disabled={isSubmitting}
                        className="accent-green-600"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
                <h2 className="text-left font-bold mt-7">Lynx3PL, Inc. </h2>
              </div>

              {/* Columna derecha: Message + Botón + Info + Mapa */}
              <div className="flex flex-col">
                <label className="flex flex-col text-md font-medium pr-6">
                  <span className="whitespace-nowrap font-bold">
                    Your Message
                  </span>

                  {successMessage ? (
                    <div
                      className="w-full border-2 h-30 px-3 pt-3 mt-1 rounded border-[#045804] items-center text-[.45em]"
                      style={{ color: "#045804", whiteSpace: "pre-wrap" }}
                    >
                      <p>
                        We appreciate your message and will get back to you
                        within 1 business day.
                      </p>{" "}
                      <p>
                        We appreciate your patience and look forward to
                        connecting with you!
                      </p>{" "}
                      <p>Lynx3PL Team</p>
                    </div>
                  ) : (
                    <textarea
                      name="message"
                      rows={4}
                      value={formValues.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border-2 h-30 px-5 mt-1 rounded border-[#045804]"
                    />
                  )}
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#045804] text-white px-2 py-1 rounded text-xs self-start disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                <div className="my-2">
                  {contactInfo.map((line, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-sm font-extrabold text-black"
                          : "text-xs font-normal text-black"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="border-3 border-black rounded mr-6 h-30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
                    width="100%"
                    height="auto"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-28"
                  ></iframe>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }

  // 💻 Desktop Layout
  return (
    <section className="px-20 pt-0 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl grid grid-cols-4 gap-5"
      >
        {/* Columna 1 y 2: Formulario */}
        <div className="col-span-2 space-y-4">
          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40 mt-1 font-bold">
              Full Name
            </span>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border px-3 h-8 rounded"
            />
          </label>

          <label className="flex items-start gap-4 text-md font-medium">
            <span className="whitespace-nowrap w-40 mt-1 font-bold">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border px-3 h-8 rounded"
            />
          </label>

          <label className="flex flex-row text-md font-medium">
            <span className="whitespace-nowrap font-bold mr-8">
              Your Message
            </span>

            {successMessage ? (
              <div
                className="w-full border-2 h-55 px-3 pt-3 mt-1 rounded border-[#045804] items-center md:text-[.78em]"
                style={{ color: "#045804", whiteSpace: "pre-wrap" }}
              >
                <p>
                  We appreciate your message and will get back to you within 1
                  business day.
                </p>{" "}
                <p>
                  <span className="font-bold">Important:</span> If you don't hear
                  from us within 1–2 days, there may have been a technical issue
                  with your submission. Please email us directly at
                  info@lynx3pl.com to ensure we received your message.
                </p>{" "}
                <p>We look forward to connecting with you!</p> <p>Lynx3PL Team</p>
              </div>
            ) : (
              <textarea
                name="message"
                rows={4}
                value={formValues.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border-2 h-55 p-2 mt-1 rounded border-[#045804]"
              />
            )}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#045804] text-white px-4 py-2 rounded text-sm ml-[10em] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          <h1 className="font-bold text-5xl ">Contact Us</h1>
        </div>

        {/* Columna 3: Interests */}
        <div>
          <h2 className="text-xl font-bold mb-4">I'm interested in:</h2>
          <div className="flex flex-col gap-[9.6px]">
            {interests.map((interest, idx) => (
              <label
                key={idx}
                className="text-md font-semibold flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  value={interest}
                  checked={formValues.interests.includes(interest)}
                  onChange={handleCheckboxChange}
                  disabled={isSubmitting}
                  className="accent-green-600"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        {/* Columna 4: Info Empresa + Mapa */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Lynx3PL, Inc.</h2>

          <div>
            {contactInfo.map((line, i) => (
              <p
                key={i}
                className={
                  i === 1
                    ? "text-md font-normal text-black mb-2"
                    : "text-md font-normal text-black mr-20"
                }
              >
                {line}
              </p>
            ))}
          </div>

          <div className="border-3 border-black rounded overflow-hidden w-62">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.99225188882!2d-84.965537!3d34.755787999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88600b7ac7c171ad%3A0x7adaa70446346069!2sLynx3PL%20Inc!5e0!3m2!1spt-BR!2sbr!4v1749732230049!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </form>
    </section>
  );
}