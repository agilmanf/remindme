import Advantage from "./sections/Advantage";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import UserPaging from "./sections/UserPaging";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Advantage />
      <UserPaging />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
