import Card from "@/components/ui/cards";
import { FilterIcon } from "@/components/ui/filterIcon";
import { drilldownColumns, propertyDrilldownData } from "@/utils/data/property-health";

export const PropertyDrilldownTable = () => {
    return (

              <Card title="Property Drilldown" noPadding>
        <div className="overflow-x-auto">
          <div className="overflow-hidden rounded-xl border-[0.5px] border-sentiment-border m-4 mt-0">
            <table className="w-full border-collapse text-left table-fixed">
              <thead>
                <tr className="bg-primary-blue text-white text-[13px] font-heading">
                  {drilldownColumns.map((col, i) => {
                    const header = typeof col.header === "string" ? col.header : String(col.header);
                    const widthClass = i === 0 ? "w-[15%]" : "w-[9.44%]";

                    const renderHeader = (text: string) => {
                      if (text === "Website Pageviews") return <>Website<br />Pageviews</>;
                      if (text === "Neg. Home Issue") return <>Neg.<br />Home Issue</>;
                      if (text === "Neg. Access Issue") return <>Neg.<br />Access Issue</>;
                      return text;
                    };
                    
                    return (
                      <th
                        key={String(col.accessorKey ?? i)}
                        className={`px-2 py-1.5 border-white/20 cursor-pointer select-none hover:bg-white/10 first:rounded-tl-lg last:rounded-tr-lg ${widthClass} ${i === 0 ? "" : "border-l"}`}
                      >
                        <div className="flex items-start gap-1.5 justify-start">
                          <span className="leading-[1.1]">{renderHeader(header)}</span>
                          <FilterIcon className="w-2.5 h-2.5 opacity-80 mt-0.5 shrink-0" />
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {propertyDrilldownData.map((row, rowIndex) => {
                  return (
                    <tr key={row.property} className={`border-b-[0.5px] border-sentiment-border last:border-0 transition-colors text-text-black ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}>
                    {drilldownColumns.map((col, i) => {
                      const key = String(col.accessorKey ?? "");
                      const value = row[key as keyof typeof row];
                      const widthClass = i === 0 ? "w-[15%]" : "w-[9.44%]";

                      return (
                        <td
                          key={key}
                          className={`px-3 py-1.5 text-[13px] font-heading border-sentiment-border text-left ${widthClass} ${i === 0 ? "text-[14px] font-medium opacity-90" : "font-normal border-l-[0.5px]"}`}
                        >
                          {value}
                        </td>
                    );
                  })}
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    )
}