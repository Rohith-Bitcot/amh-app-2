"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import { performanceTableData } from "@/utils/data/executive-overview";
import { FilterIcon } from "@/utils/helper-functions";
import { useRouter } from "next/navigation";
import { KpiCardsComponent } from "./kpi-cards";
import DemandOverviewComponent from "./demand-overview";
import { ChartsRowComponent } from "./charts-row";

const { headers, rows } = performanceTableData;

const colClass = (header: string) =>
  header === "Geo" ? "" : header === "YoY" ? "w-[80px]" : "w-[95px]";

export default function ExecutiveOverview() {
  const router = useRouter();

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      <KpiCardsComponent />

      {/* Charts Row - 3 charts side by side - RESPONSIVE GRID */}
      <ChartsRowComponent />

      {/* Demand Overview Section */}
      <DemandOverviewComponent />

      {/* Performance Overview Table */}
      <Card title="Performance Overview" noPadding>
        <div className="overflow-x-auto">
          <div className="overflow-hidden rounded-xl border border-sentiment-border m-4 mt-0">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-primary-blue text-white">
                  {headers.map((header, i) => (
                    <th
                      key={header}
                      className={`px-4 py-3 text-[13px] font-bold font-heading text-white border-white/20 cursor-pointer select-none hover:bg-white/10 first:rounded-tl-lg last:rounded-tr-lg ${i !== 0 ? "border-l" : ""} ${colClass(header)}`}
                    >
                      <div className={`flex items-center gap-2 ${i === 0 ? "justify-start" : "justify-end"}`}>
                        {header}
                        <FilterIcon className="w-3.5 h-3.5 opacity-80" />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`border-b border-sentiment-border last:border-0 transition-colors text-neutral-800 text-table-text-dark ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}
                  >
                    {headers.map((header, i) => {
                      const key = header === "Geo" ? "metric" : header;
                      const value = row[key as keyof typeof row];
                      return (
                        <td
                          key={header}
                          className={`px-4 py-3 text-[13px] font-heading border-sentiment-border ${colClass(header)} ${i === 0
                            ? "font-medium whitespace-nowrap opacity-90"
                            : "font-normal text-right border-l-[0.5px]"
                            }`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
