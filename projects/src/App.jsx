import Accordion from "./components/Accordion";
import Accordion2 from "./components/Accordion2";
import DateCounter from "./components/DateCounter";
import DateCounter2 from "./components/DateCounter2";
import FlashCards from "./components/FlashCards";
import FlashCards2 from "./components/FlashCards2";
import PizzaMenu from "./components/PizzaMenu";
import ProfileCard from "./components/ProfileCard";
import TravelApp from "./components/project1/TravelApp";
import Steps from "./components/Steps";
import Steps2 from "./components/Steps2";

function App() {
  return (
    <div className="w-full min-h-screen">
      <ProfileCard />
      <PizzaMenu />
      <Steps />
      <DateCounter />
      <TravelApp />
      <FlashCards />
      <FlashCards2 />
      <DateCounter2 />
      <Accordion />
      <Steps2 />
      <Accordion2 />
    </div>
  );
}

export default App;
