"use client";

import { useState } from "react";

export default function MiniTable({
    title,
    subtitle,
    columns,
    rows,
    toggle,
}: Readonly<{
    title: string;
    subtitle?: string;
    columns: string[];
    rows: Record<string, string>[];
    toggle?: { options: string[]; active: number };
}>) {
    const [activeToggle, setActiveToggle] = useState(toggle?.active ?? 0);
    return (
        <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 flex flex-col h-full">
            <div className="flex flex-col gap-1 mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                    <div className="flex flex-col">
                        <h3 className="text-sm font-heading font-medium text-(--color-foreground)">
                            {title}
                        </h3>
                        {subtitle && (
                            <p className={`text-[12px] font-heading text-(--color-text-black) opacity-60 mt-1 sm:-mt-1 font-medium`}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {toggle && (
                        <div className="flex bg-gray-100 rounded-full text-[10px] font-heading w-fit p-0.5 shrink-0">
                            {toggle.options.map((opt, i) => (
                                <button
                                    key={opt}
                                    onClick={() => setActiveToggle(i)}
                                    className={`px-3 py-1 rounded-full transition-colors whitespace-nowrap ${activeToggle === i ? "bg-sky-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-1 border text-(--color-text-black) border-sentiment-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto w-full h-full">
<table className="w-full h-full min-w-[450px] border-separate" style={{ borderSpacing: 0 }}>                    
    <thead style={{background: "var(--colour-dark-strong-blue-gradient)"}}>
                        <tr className="">
                            {columns.map((col, idx) => (
                                <th
                                    key={col}
                                    className={`px-4 py-3 text-white text-sm font-heading font-medium whitespace-nowrap border-0 ${idx === 0 ? "text-left" : "text-center"
                                        }`}
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr
                                key={idx + 1}
                                className={`${idx % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
                                style={{ height: `${100 / rows.length}%` }}
                            >
                                {columns.map((col, colIdx) => (
                                    <td
                                        key={col}
                                        className={`px-4 py-4 text-sm font-heading text-(--color-text-black) border-l border-sentiment-border whitespace-nowrap ${colIdx === 0 ? "text-left font-semibold border-0" : "text-center border-l border-sentiment-border"
                                            }`}
                                    >
                                        {row[col]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}
