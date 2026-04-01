import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");

  async function claim() {
    const res = await fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username })
    });

    const data = await res.json();
    setResult(JSON.stringify(data));
  }

  return (
    <div>
      <h1>FaucetPay Faucet</h1>
      <input
        placeholder="FaucetPay Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={claim}>Claim</button>
      <pre>{result}</pre>
    </div>
  );
}
