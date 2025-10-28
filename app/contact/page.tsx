import Form from "../components/Form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import FloatingButton from "../components/FloatingButtonWhatsappIcon";

export default function ContactPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar overflow-x-hidden ">
      <Navbar title="Your Company" routes={routesData} />
      <section className="h-screen snap-start">
        <Form />
      </section>
      <section className="h-screen snap-start">
        <Footer />
      </section>
      <FloatingButton />
    </div>
  );
}
