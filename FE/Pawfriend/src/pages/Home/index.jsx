import Featurepets from "../../components/HomeComponents/featurepets/Featurepets";
import FindPet from "../../components/HomeComponents/findpets/FindPet";
import Header from "../../components/HomeComponents/header/Header";
import Slider from "../../components/HomeComponents/slider/Slider";
import Support from "../../components/HomeComponents/support/Support";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <FindPet />
      <Support />
      <Featurepets/>
    </div>
  );
};

export default Home;
