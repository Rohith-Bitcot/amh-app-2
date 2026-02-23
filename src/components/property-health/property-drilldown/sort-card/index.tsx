"use client";

import Image from "next/image";
import { useState } from "react";

interface SortCardProps {
    onReset: () => void;
    onApply: (selectedCategories: string[], sortOrder: 'asc' | 'desc') => void;
    currentSelected?: string[];
    currentSort?: 'asc' | 'desc';
}

const categories = [
    "Hold Recent App",
    "Hold Recent Photos",
    "Marketing Review",
    "Marketing Old Pics",
    "Dispo Review"
];

export const SortCard = ({ onReset, onApply, currentSelected = [], currentSort = "asc" }: SortCardProps) => {
    const [selected, setSelected] = useState<string[]>(currentSelected);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(currentSort);

    const toggleCategory = (cat: string) => {
        if (selected.includes(cat)) {
            setSelected(selected.filter(s => s !== cat));
        } else {
            setSelected([...selected, cat]);
        }
    };

    return (
        <div className="w-[194px] h-[320px] bg-white rounded-[15px] p-4 border border-neutral-100 shadow-card text-left flex flex-col justify-between">
            <div>
                <h3 className="text-[13px] font-bold text-text-black mb-3 font-heading">Select Category</h3>

                <div className="space-y-2.5 mb-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className="flex items-center gap-2 cursor-pointer group w-full text-left"
                            onClick={() => toggleCategory(cat)}
                        >
                            <Image
                                src={selected.includes(cat) ? "/assets/svgs/Rectangle 3468542.svg" : "/assets/svgs/Rectangle 3468541.svg"}
                                alt={selected.includes(cat) ? "checked" : "unchecked"}
                                width={14}
                                height={14}
                            />
                            <span className={`text-[12px] font-medium font-heading transition-colors ${selected.includes(cat) ? 'text-primary-blue' : 'text-text-black group-hover:text-primary-blue'}`}>
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="mb-3">
                    <Image src="/assets/svgs/divider.svg" alt="divider" width={162} height={1} className="w-full" />
                </div>

                <div className="space-y-1.5">
                    <p className="text-[12px] font-bold text-text-black font-heading">Sort by</p>
                    <div className="flex flex-col gap-1">
                        <button
                            type="button"
                            onClick={() => setSortOrder('asc')}
                            className={`block text-[12px] font-medium transition-colors font-heading text-left ${sortOrder === 'asc' ? 'text-primary-blue' : 'text-axis-gray'}`}
                        >
                            A To Z
                        </button>
                        <button
                            type="button"
                            onClick={() => setSortOrder('desc')}
                            className={`block text-[12px] font-medium transition-colors font-heading text-left ${sortOrder === 'desc' ? 'text-primary-blue' : 'text-axis-gray'}`}
                        >
                            Z To A
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mt-auto">
                <button
                    type="button"
                    onClick={() => {
                        setSelected([]);
                        setSortOrder("asc");
                        onReset();
                    }}
                    className="flex-1 h-[32px] rounded-[6px] border border-primary-blue text-primary-blue text-[12px] font-bold hover:bg-primary-blue/5 transition-colors font-heading"
                >
                    Reset
                </button>
                <button
                    type="button"
                    onClick={() => onApply(selected, sortOrder)}
                    className="flex-1 h-[32px] rounded-[6px] bg-primary-blue text-white text-[12px] font-bold hover:bg-primary-blue/90 transition-colors font-heading"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};
