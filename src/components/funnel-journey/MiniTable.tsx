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
        <div className="bg-white rounded-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-3 sm:p-4 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3 min-h-[52px]">
                <div>
                    <h3 className="text-sm font-bold font-heading text-neutral-800">
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
                    <thead>
                        <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
                            {columns.map((col, idx) => (
                                <th
                                    key={col}
                                    className={`px-4 py-3 text-white text-sm font-semibold font-heading whitespace-nowrap border-r border-sky-600 last:border-r-0 ${idx === 0 ? "text-left" : "text-center"
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
                                        className={`px-4 py-4 text-sm font-heading text-neutral-700 whitespace-nowrap border-r border-t border-neutral-200 last:border-r-0 ${colIdx === 0 ? "text-left font-semibold" : "text-center"
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
