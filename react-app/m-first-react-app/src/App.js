import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [coins, setCoins] = useState([]);
  const onChange = (event) => setMoney(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input type="number" value={money} onChange={onChange}/>
      <hr />
      <h3>you Colud buy</h3>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {Math.round((money / coin.quotes.USD.price)*100)/100}ea
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
