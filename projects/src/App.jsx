import Accordion from "./components/Accordion";
import Accordion2 from "./components/Accordion2";
import DateCounter from "./components/DateCounter";
import DateCounter2 from "./components/DateCounter2";
import BillSplitter from "./components/eat_n_split/BillSplitter";
import FlashCards from "./components/FlashCards";
import FlashCards2 from "./components/FlashCards2";
import PizzaMenu from "./components/PizzaMenu";
import ProfileCard from "./components/ProfileCard";
import TravelApp from "./components/project1/TravelApp";
import Steps from "./components/Steps";
import Steps2 from "./components/Steps2";
import TextExpander from "./components/TextExpander";
import TipCalculator from "./components/tip_calculator/TipCalculator";
// import StarRating from "./components/use_popcorn/StarRating";
import UsePopcorn from "./components/use_popcorn/UsePopcorn";

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
      <TipCalculator />
      <BillSplitter />
      <UsePopcorn />
      {/* <StarRating maxRating={10} />
      <StarRating
        maxRating={5}
        color="red"
        size={64}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={3}
      /> */}

      <TextExpander />
    </div>
  );
}

export default App;
