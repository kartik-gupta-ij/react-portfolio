import About from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
export default function Home() {

  return (
    <>
      <Header />
      <IntroSection />
      <About />
      <Experience />
      {/* <Project />
          <Blog /> */}
      <Footer />
    </>
  );
}
