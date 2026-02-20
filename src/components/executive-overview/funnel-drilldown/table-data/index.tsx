"use client";

import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    type ColumnDef,
    type SortingState,
} from "@tanstack/react-table";
import { cn, FilterIcon } from "@/utils/helper-functions";
import { useState } from "react";

interface ReusableTableProps<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: ColumnDef<T, any>[];
    data: T[];
    compact?: boolean;
    getRowClassName?: (row: T, index: number) => string;
    headerClassName?: string;
    showSortIcon?: boolean;
}

export default function ReusableTable<T>({
    columns,
    data,
    compact = false,
    getRowClassName,
    headerClassName,
    showSortIcon = true,
}: ReusableTableProps<T>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <div className="overflow-hidden rounded-xl border border-sentiment-border m-4 mt-0">
                <table className="w-full border-collapse text-left">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr
                                key={headerGroup.id}
                                className={cn("bg-primary-blue text-white", headerClassName)}
                            >
                                {headerGroup.headers.map((header, i) => (
                                    <th
                                        key={header.id}
                                        className={cn(
                                            "px-4 py-3 text-[13px] font-bold font-heading text-white border-white/20",
                                            i !== 0 && "border-l",
                                            header.column.getCanSort() &&
                                            "cursor-pointer select-none hover:bg-white/10",
                                            "first:rounded-tl-lg last:rounded-tr-lg",
                                            (header.column.columnDef.meta as { className?: string })
                                                ?.className,
                                        )}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        <div
                                            className={cn(
                                                "flex items-center gap-2",
                                                i === 0 ? "justify-start" : "justify-end",
                                            )}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                            {showSortIcon && header.column.getCanSort() && (
                                                <FilterIcon className="w-3.5 h-3.5 opacity-80" />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row, index) => (
                            <tr
                                key={row.id}
                                className={cn(
                                    "border-b border-sentiment-border last:border-0 transition-colors bg-white text-neutral-800",
                                    getRowClassName?.(row.original, index),
                                )}
                            >
                                {row.getVisibleCells().map((cell, i) => (
                                    <td
                                        key={cell.id}
                                        className={cn(
                                            "px-4 py-3 text-[13px] font-heading border-sentiment-border",
                                            i === 0
                                                ? "font-medium whitespace-nowrap opacity-90"
                                                : "font-normal text-right border-l-[0.5px]",
                                            compact && "py-2",
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
        </div>
    );
}
