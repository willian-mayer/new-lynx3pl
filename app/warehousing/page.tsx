// src/pages/WarehousingPage.tsx
import NewWarehousing from "../components/NewWarehousing";
import WarehousingList from "../components/WarehousingList";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import routesData from "../data/routes.json";
import Form from "../components/Form";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButtonWhatsappIcon";

export default function WarehousingPage() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-container">
      <Navbar title="Your Company" routes={routesData} />

      <section className="h-screen snap-start flex justify-center items-center section ">
        <NewWarehousing />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section bg-gray-200">
        <WarehousingList />
      </section>

      <section className="h-screen snap-start flex justify-center items-center section ">
        <Gallery />
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
