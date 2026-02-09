"use client";

import { useRef, useState, useEffect } from "react";

interface FunnelDataPoint {
  stage: string;
  value: number;
  color: string;
  conversionPct: string | null;
  priorYearPct: string | null;
  pyPositive?: boolean;
  callout?: { label: string; value: number };
}

interface FunnelConversionChartProps {
  data: FunnelDataPoint[];
  height?: number;
}

export default function FunnelConversionChart({
  data,
  height = 300,
}: FunnelConversionChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const margin = { top: 55, right: 15, bottom: 35, left: 15 };
  const chartW = width - margin.left - margin.right;
  const chartH = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((d) => d.value));

  // Calculate bar positions
  const barCount = data.length;
  const totalBarWidthRatio = 0.55;
  const barWidth = barCount > 0 ? (chartW * totalBarWidthRatio) / barCount : 0;
  const gap =
    barCount > 1 ? (chartW * (1 - totalBarWidthRatio)) / (barCount - 1) : 0;

  const bars = data.map((d, i) => {
    const x = margin.left + i * (barWidth + gap);
    const barH = maxValue > 0 ? (d.value / maxValue) * chartH : 0;
    const y = margin.top + chartH - barH;
    return { ...d, x, y, w: barWidth, h: barH };
  });

  const baseline = margin.top + chartH;

  // Funnel polygon points
  const funnelPoints =
    bars.length > 1
      ? `${bars[0].x},${bars[0].y} ${bars[bars.length - 1].x + bars[bars.length - 1].w},${bars[bars.length - 1].y} ${bars[bars.length - 1].x + bars[bars.length - 1].w},${baseline} ${bars[0].x},${baseline}`
      : "";

  return (
    <div ref={containerRef} style={{ width: "100%", height }}>
      {width > 0 && (
        <svg width={width} height={height}>
          {/* Funnel backdrop */}
          {funnelPoints && (
            <polygon
              points={funnelPoints}
              fill="rgba(190, 210, 230, 0.15)"
              stroke="rgba(170, 190, 210, 0.25)"
              strokeWidth={1}
            />
          )}

          {/* Bars */}
          {bars.map((bar, i) => (
            <g key={`bar-${i}`}>
              <rect
                x={bar.x}
                y={bar.y}
                width={bar.w}
                height={bar.h}
                rx={4}
                fill={bar.color}
              />
              {/* Value label inside bar */}
              <text
                x={bar.x + bar.w / 2}
                y={bar.y + bar.h / 2 + 7}
                textAnchor="middle"
                fontSize={18}
                fontWeight={700}
                fill="white"
                fontFamily="'Familjen Grotesk', sans-serif"
              >
                {bar.value}
              </text>
              {/* X-axis label */}
              {bar.stage.split("\n").map((line, li) => (
                <text
                  key={li}
                  x={bar.x + bar.w / 2}
                  y={baseline + 16 + li * 14}
                  textAnchor="middle"
                  fontSize={12}
                  fill="#6b7280"
                  fontFamily="'Familjen Grotesk', sans-serif"
                >
                  {line}
                </text>
              ))}
            </g>
          ))}

          {/* Conversion % and PY labels between bars */}
          {bars.map((bar, i) => {
            if (i === 0 || !bar.conversionPct) return null;
            const prev = bars[i - 1];
            const cx = prev.x + prev.w + gap / 2;
            const labelY =
              Math.min(prev.y, bar.y) + Math.abs(prev.y - bar.y) / 2 + 10;

            return (
              <g key={`conv-${i}`}>
                <text
                  x={cx}
                  y={labelY}
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={700}
                  fill="#374151"
                  fontFamily="'Familjen Grotesk', sans-serif"
                >
                  {bar.conversionPct}
                </text>
                {bar.priorYearPct && (
                  <text
                    x={cx}
                    y={labelY + 15}
                    textAnchor="middle"
                    fontSize={11}
                    fill={bar.pyPositive ? "#16a34a" : "#dc2626"}
                    fontFamily="'Familjen Grotesk', sans-serif"
                  >
                    {bar.priorYearPct}
                  </text>
                )}
              </g>
            );
          })}

          {/* Dashed callout boxes */}
          {bars.map((bar, i) => {
            if (!bar.callout) return null;
            const boxW = bar.w + 16;
            const boxH = 40;
            const boxX = bar.x + bar.w / 2 - boxW / 2;
            const boxY = bar.y - boxH - 8;

            return (
              <g key={`callout-${i}`}>
                <rect
                  x={boxX}
                  y={boxY}
                  width={boxW}
                  height={boxH}
                  rx={6}
                  fill="white"
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                  strokeDasharray="6 4"
                />
                <text
                  x={bar.x + bar.w / 2}
                  y={boxY + 15}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#16a34a"
                  fontFamily="'Familjen Grotesk', sans-serif"
                >
                  {bar.callout.label}
                </text>
                <text
                  x={bar.x + bar.w / 2}
                  y={boxY + 32}
                  textAnchor="middle"
                  fontSize={16}
                  fontWeight={700}
                  fill="#374151"
                  fontFamily="'Familjen Grotesk', sans-serif"
                >
                  {bar.callout.value}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
