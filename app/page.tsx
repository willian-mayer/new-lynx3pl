import Entrance from "./components/Entrance";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Reviews from "./components/Reviews";
import Hall from "./components/Hall";
import Partners from "./components/Partners";
import Form from "./components/Form";
import Footer from "./components/Footer";
import NewWarehousing from "./components/NewWarehousing";
import WarehousingList from "./components/WarehousingList";
import FulfillmentFirst from "./components/FulfillmentFirst";
import FulfillmentSecond from "./components/FulfillmentSecond";
import FulfillmentThird from "./components/FulfillmentThird";
import Gallery from "./components/Gallery";
import Transloading from "./components/Transloading";
import Transboarding from "./components/Transboarding";
import WeServe from "./components/WeServe";
import Storage from "./components/Storage";
import Navbar from "./components/Navbar";
import routesData from "./data/routes.json";
import Services from "./components/Services";
import Subscription from "./components/Subscription";
import FloatingButton from "./components/FloatingButtonWhatsappIcon";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-container">
        {/* Entrance */}
        <section className="h-screen snap-start flex justify-center items-center section">
          <Entrance />
        </section>

        <Navbar title="Your Company" routes={routesData} />

        <section className="h-screen snap-start flex justify-center items-center section">
          <Services />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="why-us"
        >
          <Strengths />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section "
          id="reliable-fulfillment"
        >
          <Hero />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="warehousing"
        >
          <NewWarehousing />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section "
          id="values"
        >
          <WarehousingList />
        </section>
        <section
          className="h-screen snap-start flex justify-center items-center section "
          id="values"
        >
          <Subscription />
        </section>
        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="inventory"
        >
          <Gallery />
        </section>

        <section className="h-screen snap-start flex justify-center items-center section ">
          <FulfillmentFirst />
        </section>

        <section className="h-screen snap-start flex justify-center items-center section bg-gray-200">
          <FulfillmentSecond />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section "
          id="steps"
        >
          <FulfillmentThird />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="transloading"
        >
          <Transloading />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section"
          id="we-serve"
        >
          <WeServe />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="door-to-door"
        >
          <Transboarding />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section"
          id="individual"
        >
          <Storage />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="events"
        >
          <Hall />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-white"
          id="reviews"
        >
          <Reviews />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-gray-200"
          id="partners"
        >
          <Partners />
        </section>

        <section
          className="h-screen snap-start flex justify-center items-center section bg-white"
          id="form"
        >
          <Form />
        </section>

        <section className="h-screen snap-start section" id="let-us-talk">
          <Footer />
        </section>
      </div>
      <FloatingButton />
    </div>
  );
}
