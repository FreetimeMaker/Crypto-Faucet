export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Missing username" });
  }

  const fpRes = await fetch("https://faucetpay.io/api/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.FAUCETPAY_KEY,
      to: username,
      amount: 100,
      currency: "BTC"
    })
  });

  const data = await fpRes.json();
  return res.status(200).json(data);
}
