"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import FutureLeaseChart from "@/components/property-health/future-lease-chart";
import { FilterIcon } from "@/utils/helper-functions";
import {
  propertyDrilldownData,
  futureExpirationData,
  drilldownColumns,
} from "@/utils/data/property-health";
import { PropertyHealthComponent } from "./property-health-section";

const PropertyHealth = () => {
  return (
    <div className="space-y-5">
      <PageHeader title="Property Health" />

      {/* Property Health Chart + District Table */}
      <PropertyHealthComponent />

      {/* Property Drilldown Table */}
      <Card title="Property Drilldown" noPadding>
        <div className="overflow-x-auto">
          <div className="overflow-hidden rounded-xl border border-sentiment-border m-4 mt-0">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-primary-blue text-white">
                  {drilldownColumns.map((col, i) => {
                    const header = typeof col.header === "string" ? col.header : String(col.header);
                    return (
                      <th
                        key={String(col.accessorKey ?? i)}
                        className={`px-4 py-3 text-[13px] font-bold font-heading text-white cursor-pointer select-none hover:bg-white/10 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap ${i === 0 ? "" : "border-l border-white/20"}`}
                      >
                        <div className={`flex items-center gap-2 ${i === 0 ? "justify-start" : "justify-end"}`}>
                          {header}
                          <FilterIcon className="w-3.5 h-3.5 opacity-80" />
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {propertyDrilldownData.map((row, rowIndex) => (
                  <tr
                    key={row.property}
                    className={`border-b border-sentiment-border last:border-0 transition-colors text-neutral-800 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}
                  >
                    {drilldownColumns.map((col, i) => {
                      const key = String(col.accessorKey ?? "");
                      const value = row[key as keyof typeof row];
                      return (
                        <td
                          key={key}
                          className={`px-4 py-3 text-[13px] font-heading border-sentiment-border ${i === 0 ? "font-medium whitespace-nowrap opacity-90" : "font-normal text-right border-l-[0.5px]"}`}
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

      {/* Future Leases Expiration & Upcoming Delivery */}
      <Card
        title="Future Lease Expiration & Upcoming Delivery (T 13M)"
        subtitle="Vs. Projected Absorption"
      >
        <FutureLeaseChart data={futureExpirationData} height={400} />
      </Card>
    </div>
  );
};

export default PropertyHealth;
