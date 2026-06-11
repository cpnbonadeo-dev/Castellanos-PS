const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmeFLM1Y3B4wpBvmazhBXRlRH0ro4PykVGeLE6usDbqV2gIrC4EFibN4_mOXFSiPaE/exec";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  try {
    const params = new URLSearchParams(req.query).toString();
    const url = SCRIPT_URL + (params ? "?" + params : "");
    const r = await fetch(url, { redirect: "follow" });
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json({ error: "Proxy error: " + err.message });
  }
}
