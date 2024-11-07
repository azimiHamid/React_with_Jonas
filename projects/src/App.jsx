import DatePlay from "./components/DatePlay";
import PizzaMenu from "./components/PizzaMenu";
import ProfileCard from "./components/ProfileCard";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="w-full min-h-screen">
      <ProfileCard />
      <PizzaMenu />
      <Steps />
      <DatePlay />
    </div>
  );
}

export default App;
