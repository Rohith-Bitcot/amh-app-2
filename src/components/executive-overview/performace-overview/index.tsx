import Card from "@/components/ui/cards";
import { performanceTableData } from "@/utils/data/executive-overview";
import { FilterIcon } from "@/components/ui/filterIcon";
export const PerformanceOverviewComponent = () => {
    const { headers, rows } = performanceTableData;

const colClass = (header: string) => {
  if (header === "Geo") return "";
  if (header === "YoY") return "w-[80px]";
  return "w-[95px]";
};
    return(
             <Card title="Performance Overview" noPadding>
        <div className="">
          <div className="overflow-x-auto rounded-xl border border-sentiment-border m-4 mt-0">
            <table className="w-full border-collapse text-left min-w-[600px]">
              <thead>
                <tr className="bg-primary-blue text-white">
                  {headers.map((header, i) => (
                    <th
                      key={header}
                      className={`px-4 py-3 text-[13px] font-bold font-heading text-white border-white/20 cursor-pointer select-none first:rounded-tl-lg last:rounded-tr-lg ${i === 0 ? "" : "border-l"} ${colClass(header)}`}
                    >
                      <div className={`flex items-center gap-1 ${i === 0 ? "justify-start" : "justify-end"}`}>
                        {header}
                        <FilterIcon />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={row.metric}
                    className={`border-b border-sentiment-border last:border-0 transition-colors text-neutral-800 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}
                  >
                    {headers.map((header, i) => {
                      const key = header === "Geo" ? "metric" : header;
                      const value = row[key as keyof typeof row];
                      return (
                        <td
                          key={header}
                          className={`px-4 py-3 text-[13px] font-heading border-sentiment-border ${colClass(header)} ${i === 0
                            ? "font-normal whitespace-nowrap opacity-90"
                            : "font-medium text-right border-l-[0.5px]"
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
    )
}