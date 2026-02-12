export const chartTheme = {
  fontFamily: "'Familjen Grotesk', sans-serif",
  fontSize: 12,
  colors: {
    axis: "var(--color-axis-gray)",
    grid: "var(--color-grid-gray)",
    tooltip: {
      bg: "#ffffff",
      border: "var(--color-grid-gray)",
      text: "var(--color-foreground)",
    },
  },
  axis: {
    tick: {
      fill: "var(--color-axis-gray)",
      fontSize: 11,
      fontFamily: "'Familjen Grotesk', sans-serif",
    },
    label: {
      fill: "var(--color-axis-gray)",
      fontSize: 12,
      fontFamily: "'Familjen Grotesk', sans-serif",
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
      fontFamily: "'Familjen Grotesk', sans-serif",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
    },
    itemStyle: {
      fontSize: "12px",
      fontFamily: "'Familjen Grotesk', sans-serif",
    },
  },
};
