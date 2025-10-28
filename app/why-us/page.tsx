// src/pages/WhyUsPage.tsx
import FloatingButton from "../components/FloatingButtonWhatsappIcon";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import Strengths from "../components/Strengths";
import routesData from "../data/routes.json";

export default function WhyUsPage() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-container">
      <Navbar title="Your Company" routes={routesData} />

      <section className="h-screen snap-start flex justify-center items-center section ">
        <Strengths />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <Reviews />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section">
        <Partners />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section bg-gray-200">
        <Hero />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section" id="form">
        <Form />
      </section>

      <section className="h-screen snap-start section">
        <Footer />
      </section>
      <FloatingButton />
    </div>
  );
}
