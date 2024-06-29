import BusinessIcons from "../components/BusinessIcons";
import Creativity from "../components/Creativity";
import Digital from "../components/Digital";
import ExperienceMagic from "../components/ExperienceMagic";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NavigatingDigital from "../components/NavigatingDigital";
import Offer from "../components/Offer";
import Ours from "../components/Ours";
import Pioneering from "../components/Pioneering";
import Unlock from "../components/Unlock";

const Home = () => {
  return (
    <div className="">
      <header className="">
        <nav className="max-w-[1300px] my-0 mx-auto fixed top-0 left-0 right-0 z-[999] bg-black">
          <Header />
        </nav>
      </header>
      <section>
        <Hero />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto">
        <BusinessIcons />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-20">
        <Digital />
      </section>
      <section className=" mt-10">
        <Ours />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-16">
        <Offer />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-16">
        <ExperienceMagic />
      </section>
      <section className="mt-16">
        <Unlock />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-16 p-4">
        <NavigatingDigital />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-16 p-4">
        <Creativity />
      </section>
      <section className="mt-16">
        <Pioneering />
      </section>
      <section className="max-w-[1300px] my-0 mx-auto mt-32 p-4">
        <Feedback />
      </section>
      <footer className="max-w-[1300px] my-0 mx-auto mt-32 p-4 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
