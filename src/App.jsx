import Header from "./sections/Header";
import Hero from "./sections/Hero";
import CTA from "./sections/CTA";
import Email from "./sections/Email";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <CTA />
      <Email />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
