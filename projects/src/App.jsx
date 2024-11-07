import DateCounter from "./components/DateCounter";
import FlashCards from "./components/FlashCards";
import PizzaMenu from "./components/PizzaMenu";
import ProfileCard from "./components/ProfileCard";
import TravelApp from "./components/project1/TravelApp";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="w-full min-h-screen">
      <ProfileCard />
      <PizzaMenu />
      <Steps />
      <DateCounter />
      <TravelApp />
      <FlashCards />
    </div>
  );
}

export default App;
