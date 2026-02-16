export const chartTheme = {
  fontFamily: "var(--font-familjen)",
  fontSize: 12,
  colors: {
    axis: "var(--color-axis-gray)",
    grid: "var(--color-grid-gray)",
    tooltip: {
      bg: "#ffffff",
      border: "var(--color-grid-gray)",
      text: "var(--color-foreground)",
    },
    palette: {
      newLeads: "#0077CA",
      returning: "#FFB217",
      actual: "#66B1EA",
      benchmark: "#1a1a1a",
      gradientStart: "#004F86",
      gradientEnd: "#123E5D",
      approval: "#66EA9D",
      cancellation: "#F66969",
      google: "#01497B",
      meta: "#66B1EA",
      tiktok: "#66EA9D",
      olderPeriod: "#4A90E2",
      newerPeriod: "#66EA9D",
      leaseExpiration: "#1B3A5C",
      upcomingDelivery: "#60A5FA",
      projectedAbsorption: "#3ACA76",
    },
  },
  axis: {
    tick: {
      fill: "var(--color-axis-gray)",
      fontSize: 11,
      fontFamily: "var(--font-familjen)",
    },
    label: {
      fill: "var(--color-axis-gray)",
      fontSize: 12,
      fontFamily: "var(--font-familjen)",
    },
  },
  grid: {
    stroke: "var(--color-grid-gray)",
    strokeDasharray: "3 3",
  },
  tooltip: {
    contentStyle: {
      backgroundColor: "#ffffff",
      border: "1px solid var(--color-grid-gray)",
      borderRadius: "8px",
      padding: "8px 12px",
      fontSize: "12px",
      fontFamily: "var(--font-familjen)",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
    },
    itemStyle: {
      fontSize: "12px",
      fontFamily: "var(--font-familjen)",
    },
  },
};
