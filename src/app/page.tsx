import Nav from "@/src/components/layout/Nav";
import Footer from "@/src/components/layout/Footer";
import Reservations from "@/src/components/sections/Reservations";
import Experience from "@/src/components/sections/Experience";
import About from "@/src/components/sections/About";
import Menu from "@/src/components/sections/Menu";
import Hero from "@/src/components/sections/Hero";

function Page() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Menu />
        <About />
        <Experience />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}

export default Page;
