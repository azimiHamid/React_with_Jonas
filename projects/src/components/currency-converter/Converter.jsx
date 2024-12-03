/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function Converter() {
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currencies, setCurrencies] = useState(["USD", "EUR", "CAD", "INR"]);

  useEffect(() => {
    // Fetch currency options on mount
    async function fetchCurrencies() {
      try {
        const response = await fetch("https://api.frankfurter.app/currencies");
        if (!response.ok) throw new Error("Unable to fetch currencies.");
        const data = await response.json();
        setCurrencies(Object.keys(data));
      } catch (error) {
        console.error(error.message);
        setError("Could not load currencies. Please try again later.");
      }
    }
    fetchCurrencies();
  }, []);

  useEffect(() => {
    async function fetchCurrency() {
      if (!amount || !from || !to) return;

      if (from === to) {
        setOutput(amount);
        return;
      }

      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        if (!response.ok) throw new Error("Cannot fetch conversion data.");
        const data = await response.json();
        setOutput(data.rates[to]);
      } catch (error) {
        setError("Failed to convert currency. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    const debounceFetch = setTimeout(fetchCurrency, 500);
    return () => clearTimeout(debounceFetch); // Cleanup timeout
  }, [amount, from, to]);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center font-poppins p-4 bg-amber-50 text-neutral-700">
      <h2 className="my-5 text-3xl font-semibold">Currency Converter</h2>
      <article className="flex flex-col md:flex-row md:items-center items-stretch justify-center gap-3 font-md text-xl bg-gray-200 p-8 rounded-lg w-full lg:w-[80%] max-w-[1000px]">
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          disabled={isLoading}
          type="number"
          placeholder="Amount of money"
          className="px-3 py-2 rounded-lg shadow-lg"
        />

        <select
          className="px-3 py-2 rounded-lg"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          disabled={isLoading}
        >
          {currencies.sort().map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="text-center">To:</span>
        <select
          className="px-3 py-2 rounded-lg"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          disabled={isLoading}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p className="text-lg">
          {output && "="} {output} {output && to}
        </p>
      </article>
      {isLoading && <p className="text-blue-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </section>
  );
}

export default Converter;
