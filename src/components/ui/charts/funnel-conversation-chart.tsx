"use client";

import { useRef, useState, useEffect } from "react";
import { chartTheme } from "@/utils/chart-theme";

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

  const margin = { top: 65, right: 15, bottom: 35, left: 15 };
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

  // Funnel backdrop points - tracing the tops of all bars
  const funnelTopPoints = bars
    .map((bar) => `${bar.x},${bar.y} ${bar.x + bar.w},${bar.y}`)
    .join(" ");

  // Funnel polygon points
  const funnelPoints =
    bars.length > 1
      ? `${funnelTopPoints} ${bars[bars.length - 1].x + bars[bars.length - 1].w},${baseline} ${bars[0].x},${baseline}`
      : "";

  return (
    <div ref={containerRef} style={{ width: "100%", height }}>
      {width > 0 && (
        <svg width={width} height={height}>
          <defs>
            <linearGradient id="funnelGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="37.17%" stopColor="var(--color-funnel-base-from)" />
              <stop offset="100%" stopColor="var(--color-funnel-base-to)" />
            </linearGradient>
          </defs>

          {/* Funnel backdrop */}
          {funnelPoints && (
            <polygon points={funnelPoints} fill="url(#funnelGradient)" />
          )}

          {/* Bars */}
          {bars.map((bar, i) => (
            <g key={`bar-${i}`}>
              <rect
                x={bar.x}
                y={bar.y}
                width={bar.w}
                height={bar.h}
                rx={0}
                fill={bar.color}
              />
              {/* Value label inside bar */}
              <text
                x={bar.x + bar.w / 2}
                y={bar.y + bar.h / 2 + 5}
                textAnchor="middle"
                fontSize={12}
                fontWeight={600}
                fill="white"
                fontFamily={chartTheme.fontFamily}
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
                  fontWeight={500}
                  fill="var(--color-text-black)"
                  fontFamily={chartTheme.fontFamily}
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
            // Center the label vertically in the backdrop area
            const backdropTopAtCx = (prev.y + bar.y) / 2;
            const labelY = (backdropTopAtCx + baseline) / 2;

            return (
              <g key={`conv-${i}`}>
                <text
                  x={cx}
                  y={labelY}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={700}
                  fill="var(--color-foreground)"
                  fontFamily={chartTheme.fontFamily}
                >
                  {bar.conversionPct}
                </text>
                {bar.priorYearPct && (
                  <text
                    x={cx}
                    y={labelY + 15}
                    textAnchor="middle"
                    fontSize={10.5}
                    fill={
                      bar.pyPositive
                        ? "var(--color-green-success)"
                        : "var(--color-live)"
                    }
                    fontFamily={chartTheme.fontFamily}
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
            const boxW = bar.w;
            const boxH = 55;
            const boxX = bar.x;
            const boxY = bar.y - boxH;

            return (
              <g key={`callout-${i}`}>
                {/* 3-sided dashed border (Left, Top, Right) */}
                <polyline
                  points={`${boxX},${boxY + boxH} ${boxX},${boxY} ${boxX + boxW},${boxY} ${boxX + boxW},${boxY + boxH}`}
                  fill="none"
                  stroke="var(--color-light-blue)"
                  strokeWidth={1.5}
                  strokeDasharray="6 4"
                />
                <text
                  x={bar.x + bar.w / 2}
                  y={boxY - 8}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={500}
                  fill="var(--color-light-blue)"
                  fontFamily={chartTheme.fontFamily}
                >
                  {bar.callout.label}
                </text>
                <text
                  x={bar.x + bar.w / 2}
                  y={boxY + boxH / 2 + 6}
                  textAnchor="middle"
                  fontSize={16}
                  fontWeight={700}
                  fill="var(--color-light-blue)"
                  fontFamily={chartTheme.fontFamily}
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
