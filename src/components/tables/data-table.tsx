"use client";
"use no memo";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { cn } from "@/utils/helper-functions";
import Image from "next/image";

interface DataTableProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  data: T[];
  compact?: boolean;
}

export default function DataTable<T>({
  columns,
  data,
  compact,
}: DataTableProps<T>) {
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
    <div className="overflow-hidden rounded-lg">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-linear-to-r from-sky-700 to-sky-600 rounded-t-md"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={cn(
                    "text-white text-xs font-medium font-heading text-left border-r border-white/20 last:border-r-0",
                    compact ? "px-3 py-2" : "px-5 py-3",
                    header.column.getCanSort() &&
                      "cursor-pointer select-none hover:bg-white/10",
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-1">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {header.column.getCanSort() && (
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
                "border-b border-neutral-200 transition-colors hover:bg-sky-50/50",
                rowIndex % 2 === 0 ? "bg-white" : "bg-sky-50",
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn(
                    "text-neutral-800 text-sm font-normal font-heading border-r border-neutral-200 last:border-r-0",
                    compact ? "px-3 py-2" : "px-5 py-3",
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
