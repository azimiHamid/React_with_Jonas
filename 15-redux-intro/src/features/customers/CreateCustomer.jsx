import { useState } from "react";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

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
