import { Row } from "./types";

export const COLS: { key: keyof Row; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "campaign", label: "Campaign" },
    { key: "region", label: "Region" },
    { key: "date", label: "Date" },
    { key: "impressions", label: "Impressions" },
    { key: "clicks", label: "Clicks" },
    { key: "totalLeads", label: "Leads" },
    { key: "totalSales", label: "Sales" },
    { key: "spend", label: "Spend" },
    { key: "ctr", label: "CTR %" },
    { key: "roas", label: "ROAS" },
];


export const ROW_HEIGHT = 40;
export const VIEWPORT_HEIGHT = 600;
export const OVERSCAN = 8;