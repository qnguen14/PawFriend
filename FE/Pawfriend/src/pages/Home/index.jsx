import Featurepets from "../../components/features/HomeComponents/featurepets/Featurepets";
import FindPet from "../../components/features/HomeComponents/findpets/FindPet";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import Popularpets from "../../components/features/HomeComponents/popularpets/Popularpets";
import Slider from "../../components/features/HomeComponents/slider/Slider";
import Support from "../../components/features/HomeComponents/support/Support";
import "./index.css";

const Home = () => {
  return (
    <div>
      <div className="header-content">
        <Header />
      </div>
      <Slider />
      <FindPet />
      <Support />
      <Featurepets />
      <Popularpets />
      <Footer />
    </div>
  );
};

export default Home;
