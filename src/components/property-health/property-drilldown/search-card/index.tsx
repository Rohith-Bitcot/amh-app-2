"use client";

import Image from "next/image";
import { useState } from "react";

interface SearchCardProps {
    onReset: () => void;
    onApply: (searchTerm: string, sortOrder: 'asc' | 'desc') => void;
    currentSearch?: string;
    currentSort?: 'asc' | 'desc';
}

export const SearchCard = ({ onReset, onApply, currentSearch = "", currentSort = "asc" }: SearchCardProps) => {
    const [searchTerm, setSearchTerm] = useState(currentSearch);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(currentSort);

    return (
        <div className="w-[194px] h-[220px] bg-white rounded-[15px] p-4 border border-neutral-100 shadow-card text-left flex flex-col justify-between">
            <div>
                <h3 className="text-[13px] font-bold text-text-black mb-2 font-heading">Search Property</h3>

                <div className="relative mb-3">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="e,x, AZ0001"
                        className="w-full h-[34px] pl-3 pr-8 rounded-[8px] border border-neutral-200 text-[12px] focus:outline-none focus:border-primary-blue font-heading placeholder:text-axis-gray placeholder:font-normal"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Image src="/assets/svgs/search.svg" alt="search" width={14} height={14} />
                    </div>
                </div>

                <div className="mb-3">
                    <Image src="/assets/svgs/divider.svg" alt="divider" width={162} height={1} className="w-full" />
                </div>

                <div className="space-y-1.5 mb-2">
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
                        setSearchTerm("");
                        setSortOrder("asc");
                        onReset();
                    }}
                    className="flex-1 h-[32px] rounded-[6px] border border-primary-blue text-primary-blue text-[12px] font-bold hover:bg-primary-blue/5 transition-colors font-heading"
                >
                    Reset
                </button>
                <button
                    type="button"
                    onClick={() => onApply(searchTerm, sortOrder)}
                    className="flex-1 h-[32px] rounded-[6px] bg-primary-blue text-white text-[12px] font-bold hover:bg-primary-blue/90 transition-colors font-heading"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};
