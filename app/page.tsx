import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reservations from "@/components/sections/Reservations";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Hero from "@/components/sections/Hero";

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
