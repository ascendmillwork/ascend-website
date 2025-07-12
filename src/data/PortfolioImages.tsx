import { PortfolioTabsData } from "./PortfolioTabsData";

export const groupedPortfolio: Record<string, typeof PortfolioTabsData> =
  PortfolioTabsData.reduce((acc, item) => {
    const key = item.commonTag || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof PortfolioTabsData>);
