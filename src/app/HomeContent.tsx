import Footer from "@/components/landing/Footer";
import { NavBar } from "@/components/landing/NavBar";

const HomeContent = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="h-[90svh] w-full pt-20">
          <h1>HomePage</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeContent;
