"use client";
"use no memo";

import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { cn } from "@/utils/helper-functions";
import Image from "next/image";
import { DataTableProps } from "@/types/common-types";

export default function DataTable<TData, TValue = unknown>({
    columns,
    data,
    compact = false,
    getRowClassName,
    headerClassName,
    showSortIcon = true,
    containerClassName,
}: Readonly<DataTableProps<TData, TValue>>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className={cn("overflow-x-auto rounded-lg", containerClassName)}>
            <table className="w-full text-left border-collapse">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className={cn("bg-linear-to-r from-sky-700 to-sky-600 rounded-t-md", headerClassName)}
                        >
                            {headerGroup.headers.map((header, i) => (
                                <th
                                    key={header.id}
                                    className={cn(
                                        "text-white text-[13px] font-bold font-heading border-white/20",
                                        compact ? "px-3 py-2" : "px-4 py-3",
                                        i !== 0 && "border-l",
                                        header.column.getCanSort() &&
                                        "cursor-pointer select-none hover:bg-white/10",
                                        "first:rounded-tl-lg last:rounded-tr-lg",
                                        (header.column.columnDef.meta as { className?: string })
                                            ?.className,
                                    )}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <div className={cn(
                                        "flex items-center gap-2",
                                        i === 0 ? "justify-start" : "justify-center",
                                    )}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                        {showSortIcon && header.column.getCanSort() && (
                                            <span className="ml-1">
                                                <Image
                                                    src="/assets/svgs/sort.svg"
                                                    alt="Sort"
                                                    width={12}
                                                    height={12}
                                                    className="opacity-70"
                                                />
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, rowIndex) => (
                        <tr
                            key={row.id}
                            className={cn(
                                "border-b border-sentiment-border last:border-0 transition-colors text-neutral-800",
                                rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]",
                                getRowClassName?.(row.original, rowIndex)
                            )}
                        >
                            {row.getVisibleCells().map((cell, i) => (
                                <td
                                    key={cell.id}
                                    className={cn(
                                        "border-sentiment-border text-[13px] font-heading",
                                        compact ? "px-3 py-2" : "px-4 py-3",
                                        i === 0
                                            ? "font-medium whitespace-nowrap opacity-90 text-left"
                                            : "font-normal text-center border-l-[0.5px]",
                                        (cell.column.columnDef.meta as { className?: string })
                                            ?.className,
                                    )}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
