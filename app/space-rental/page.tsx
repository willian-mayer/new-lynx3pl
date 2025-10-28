// src/pages/SpaceRentalPage.tsx
import Storage from "../components/Storage";
import Hall from "../components/Hall";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Form from "../components/Form";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButtonWhatsappIcon";

export default function SpaceRentalPage() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-container">
      <Navbar title="Your Company" routes={routesData} />
      
      <section className="h-screen snap-start flex justify-center items-center section">
        <Storage />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section bg-gray-200">
        <Hall />
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
