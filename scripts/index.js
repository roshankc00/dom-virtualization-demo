const fs = require("fs");
const { randomUUID } = require("crypto");

const COUNT = Number(process.argv[2]) || 500000;
const campaigns = [
  "Summer Sale",
  "Black Friday",
  "Retargeting",
  "Lookalike",
  "Brand Awareness",
  "Lead Gen",
  "Holiday Push",
  "Cold Traffic",
];
const regions = ["US", "UK", "CA", "AU", "DE", "IN", "NP", "AE"];

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[rnd(0, arr.length - 1)];
const money = (min, max) => +(Math.random() * (max - min) + min).toFixed(2);

const row = () => {
  const impressions = rnd(1000, 500000);
  const clicks = rnd(0, Math.floor(impressions * 0.1));
  const totalLeads = rnd(0, Math.floor(clicks * 0.3));
  const totalSales = money(0, 50000);
  const spend = money(10, 5000);
  return {
    id: randomUUID(),
    campaign: pick(campaigns),
    region: pick(regions),
    date: new Date(Date.now() - rnd(0, 365) * 86400000)
      .toISOString()
      .slice(0, 10),
    impressions,
    clicks,
    totalLeads,
    totalSales,
    spend,
    ctr: +((clicks / impressions) * 100).toFixed(2),
    roas: +(totalSales / spend).toFixed(2),
  };
};

const out = fs.createWriteStream("index.json");

(async () => {
  out.write("[");
  for (let i = 0; i < COUNT; i++) {
    const chunk = (i ? "," : "") + JSON.stringify(row());
    if (!out.write(chunk)) await new Promise((r) => out.once("drain", r));
  }
  out.end("]", () => console.log(`${COUNT} rows -> index.json`));
})();
