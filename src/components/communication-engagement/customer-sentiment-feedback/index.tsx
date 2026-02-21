import Card from "@/components/ui/cards";
import { getHeatmapColor } from "@/utils/constants";
import { sentimentFields, sentimentFeedbackData } from "@/utils/data/communication-engagement";
import { cn } from "@/utils/helper-functions";

export const CustomerSentimentFeedbackComponent = () => {
    return (
        <Card title="Customer Sentiment Feedback" noPadding>
            <div className="p-4">
                <div className="overflow-x-auto rounded-lg border border-neutral-200">
                    <table className="w-full border-collapse table-fixed">
                        <thead>
                            <tr className="bg-[#1E6191]">
                                <th className="px-4 py-3 text-white text-[12px] font-medium font-heading text-left border-r border-white/10 w-[20%]">
                                    Property
                                </th>
                                {sentimentFields.map((field, idx) => (
                                    <th
                                        key={field.key}
                                        className={cn(
                                            "px-4 py-3 text-white text-[12px] font-medium font-heading text-right align-middle w-[10%]",
                                            idx < sentimentFields.length - 1
                                                ? "border-r border-white/10"
                                                : "",
                                        )}
                                    >
                                        {field.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {sentimentFeedbackData.map((row, rowIdx) => (
                                <tr
                                    key={row.district}
                                    className={cn(
                                        "border-b border-neutral-200 last:border-0",
                                        rowIdx % 2 === 0 ? "bg-white" : "bg-neutral-50/30",
                                    )}
                                >
                                    <td className="px-4 py-3 text-sm font-bold font-heading text-neutral-800 border-r border-neutral-200 text-left align-middle">
                                        {row.district}
                                    </td>
                                    {sentimentFields.map((field, cellIdx) => {
                                        const value = row[field.key as keyof typeof row] as
                                            | string
                                            | number;
                                        const colorClass = getHeatmapColor(value);
                                        return (
                                            <td
                                                key={field.key}
                                                className={cn(
                                                    "px-4 py-3 text-sm font-heading text-right align-middle text-neutral-700",
                                                    colorClass,
                                                    cellIdx < sentimentFields.length - 1
                                                        ? "border-r border-neutral-200"
                                                        : "",
                                                )}
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