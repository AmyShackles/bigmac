import React from "react";
import { Local } from "./components/Local.js";
import { Random } from "./components/Random.js";

function App() {
  const [countries, setCountries] = React.useState(null);
  const [country, setCountry] = React.useState({});
  const [input, setInput] = React.useState("");
  
  React.useEffect(() => {
    fetch("http://localhost:5000/local")
      .then((res) => res.json())
      .then((country) => setCountry(country));
  }, []);
  React.useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  return (
    <main>
      <div className="third">
        <p data-testid="local-country">You are in {country["Country"]}</p>
        <p>Please enter an amount of money in your local currency:</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Local
        country={country}
        input={input}
        localPrice={+country["Local price"]}
      />

      {countries && (
        <Random
          countries={countries}
          country={country}
          input={input}
          localPrice={+country["Local price"]}
          localDollarPrice={+country["Dollar price"]}
        />
      )}
    </main>
  );
}

export default App;
