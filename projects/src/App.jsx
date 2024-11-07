import DateCounter from "./components/DateCounter";
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
    </div>
  );
}

export default App;
