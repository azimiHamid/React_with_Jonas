import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function TravelApp() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    if (items.length === 0) return;
    const confirmed = confirm("Clear all the items?");
    if (confirmed === true) setItems([]);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#F19721] text-[#0f003ddb] font-poppins">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <div className="flex flex-col flex-grow w-full">
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
      </div>
      <Stats items={items} />
    </section>
  );
}

export default TravelApp;
