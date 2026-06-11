const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykiyGNT_w0ceE0us1_TvJkQFu3gVtNwZ94W3VCQtOwas2vMx9RyoCGi8pCXW6CeA-gew/exec"
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
