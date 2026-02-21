import { ArrowDown, ArrowUp } from "lucide-react";
import KpiCard from "./kpi-cards";
import { KPI_CARD_DATA } from "@/utils/data/executive-overview";
import { CURRENT_FULLY_MARKETED_INVENTORY_BAR_DATA, LEASES_SIGNED_BAR_DATA } from "@/utils/constants";

export const KpiCardsComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-11 gap-3">
      {/* 1. Leases Signed (MTD) */}
      <KpiCard leasesSigned={true}>
        <div className="text-[10px] font-medium font-heading text-white/90">
          {KPI_CARD_DATA.leasesSigned.title}
        </div>
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col h-full">
            <div className="text-4xl font-bold font-heading text-white">
              {KPI_CARD_DATA.leasesSigned.value}
            </div>
            <div className="flex items-center gap-2 mt-1 text-[10px] font-heading">
              <span className="flex items-center gap-1 text-red-500 font-heading">
                <ArrowDown className="w-3 h-3" /> Current{" "}
                {KPI_CARD_DATA.leasesSigned.current}
              </span>
              <span className="flex items-center gap-0.5 text-green-600">
                <ArrowUp className="w-3 h-3" /> Prior Day{" "}
                {KPI_CARD_DATA.leasesSigned.priorDay}
              </span>
            </div>
            <div className="text-[12px] font-heading mt-1 w-full text-white">
              {KPI_CARD_DATA.leasesSigned.pendingText}
            </div>
          </div>
          <div className="flex items-end justify-center w-[120px] sm:w-[130px] h-full pb-1">
            <div className="flex items-end gap-[4px] sm:gap-[5px] h-full shrink-0">
              {LEASES_SIGNED_BAR_DATA.map((bar, index) => (
                <div
                  key={`lease-bar-${bar.day}-${index}`}
                  className="flex flex-col items-center justify-end gap-1 h-full"
                >
                  <div
                    className={`w-[6px] rounded-full ${bar.isSpecial ? "" : "bg-white/70"}`}
                    style={{
                      height: bar.h,
                      background: bar.isSpecial
                        ? "linear-gradient(to bottom, transparent 35%, var(--color-primary-blue) 35%), repeating-linear-gradient(135deg, var(--color-leases), var(--color-leases) 1px, var(--color-primary-blue) 1px, var(--color-primary-blue) 2px)"
                        : undefined,
                    }}
                  />
                  <span className="text-[9px] text-white/80 font-bold leading-none">
                    {bar.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </KpiCard>

      {/* 2. Lease Pacing */}
      <KpiCard>
        <div className="text-[10px] font-medium font-heading text-white">
          {KPI_CARD_DATA.leasePacing.title}
        </div>
        <div className="flex flex-col justify-start items-start mt-1">
          <div>
            <div className="text-4xl font-bold font-heading text-white">
              {KPI_CARD_DATA.leasePacing.value}
            </div>
            <div className="text-[10px] font-heading text-white">
              {KPI_CARD_DATA.leasePacing.subLabel}
            </div>
          </div>
          <div className="mt-1">
            <div className="text-[10px] font-heading mb-0.5 text-white">
              {KPI_CARD_DATA.leasePacing.approvedApps} approved applications
            </div>
            <div className="bg-white/60 rounded-full overflow-hidden w-[167px] h-[5px]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${KPI_CARD_DATA.leasePacing.progressPercent}%`,
                  background:
                                        "linear-gradient(90deg, var(--color-chart-blue-main) 0%, var(--color-purple-accent) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </KpiCard>

      {/* 3. Leasing Spread */}
      <KpiCard>
        <div className="text-[10px] font-medium font-heading text-white">
          {KPI_CARD_DATA.leasingSpread.title}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-auto pb-1">
          <div>
            <div className="text-[11px] font-heading text-dark-blue font-bold">
              Releasing
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {KPI_CARD_DATA.leasingSpread.releasing.value}
            </div>
            <div className="text-[16px] font-heading text-white font-bold">
              {KPI_CARD_DATA.leasingSpread.releasing.change}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-heading text-dark-blue font-bold">
              Renewal
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {KPI_CARD_DATA.leasingSpread.renewal.value}
            </div>
            <div className="text-[16px] font-heading text-white font-bold">
              {KPI_CARD_DATA.leasingSpread.renewal.change}
            </div>
          </div>
        </div>
      </KpiCard>

      {/* 4. Current Fully Marketed Inventory */}
      <KpiCard>
        <div className="text-[10px] font-medium font-heading text-white">
          {KPI_CARD_DATA.inventory.title}
        </div>
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <div className="text-[40px] font-bold font-heading text-white leading-tight">
              {KPI_CARD_DATA.inventory.value}
            </div>
            <div className="text-[12px] font-heading text-white/90">
              {KPI_CARD_DATA.inventory.agedPercent} aged{" "}
              {KPI_CARD_DATA.inventory.agedDays}
            </div>
          </div>
          <div className="flex items-center justify-center w-[70px] sm:w-[80px] h-[65px] self-end pr-2">
            <div className="flex items-end gap-[6px] h-full shrink-0">
              {CURRENT_FULLY_MARKETED_INVENTORY_BAR_DATA.map((bar) => (
                  <div
                    key={bar.id}
                    className="w-[8px] rounded-full"
                    style={{
                      height: bar.h,
                      background: bar.isSplit
                        ? "linear-gradient(179.15deg, var(--color-purple-accent) -41.63%, var(--color-primary-blue) 91.18%) top / 100% 23px no-repeat, var(--color-grid-gray)"
                        : "var(--color-grid-gray)",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </KpiCard>

      {/* 5. Lead Pacing */}
      <KpiCard>
        <div className="text-[10px] font-medium font-heading text-white">
          {KPI_CARD_DATA.leadPacing.title}
        </div>
        <div className="flex flex-col justify-end h-full gap-1 pb-1">
          <div className="text-[44px] font-bold font-heading text-white leading-none truncate">
            {KPI_CARD_DATA.leadPacing.value}
          </div>
          <div className="text-[12px] font-heading text-white/90">
            {KPI_CARD_DATA.leadPacing.subLabel}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-heading text-green-success mt-1">
            <ArrowUp className="w-3 h-3" />
            {KPI_CARD_DATA.leadPacing.pacingNote}
          </div>
        </div>
      </KpiCard>
    </div>
  );
};
