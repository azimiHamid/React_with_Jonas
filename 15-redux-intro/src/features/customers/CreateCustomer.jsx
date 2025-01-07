import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../customers/customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
    setFullName("");
    setNationalId("");
  }

  return (
    <section>
      <h2>Create new customer</h2>
      <fieldset className="inputs">
        <article>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </article>
        <article>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </article>
        <button onClick={handleClick}>Create new customer</button>
      </fieldset>
    </section>
  );
}

export default Customer;
