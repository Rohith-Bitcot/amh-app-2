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
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 min-h-[32px]">
                <div>
                    <h3 className="text-sm font-heading text-(--color-foreground) absolute top-0 left-0 right-1" style={{
                        fontWeight:500
                    }}>
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-[10px] font-heading text-neutral-500">
                            {subtitle}
                        </p>
                    )}
                </div>
                {toggle && (
                    <div className="flex bg-gray-100 rounded-full text-[10px] font-heading">
                        {toggle.options.map((opt, i) => (
                            <button
                                key={opt}
                                onClick={() => setActiveToggle(i)}
                                className={`px-3 py-1 rounded-full transition-colors ${activeToggle === i ? "bg-sky-600 text-white" : "text-gray-600"
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="overflow-x-auto flex-1 border border-neutral-200 rounded-lg">
                <table className="w-full h-full border-collapse">
                    <thead style={{
                        background: "var(--colour-dark-strong-blue-gradient)"
                    }}>
                        <tr className="">
                            {columns.map((col, idx) => (
                                <th
                                    key={col}
                                    className={`px-4 py-3 text-white text-sm font-heading whitespace-nowrap last:border-r-0 ${idx === 0 ? "text-left" : "text-center"
                                        }`}
                                    style={{ fontWeight: 500 }}
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
                                        className={`px-4 py-4 text-sm font-heading text-(--color-text-black) whitespace-nowrap border-r border-t border-neutral-200 last:border-r-0 ${colIdx === 0 ? "text-left font-semibold" : "text-center"
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
    );
}
