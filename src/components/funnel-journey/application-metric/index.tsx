import Card from "@/components/ui/cards";
import ReusableTable from "@/components/ui/reusable-table";
import { applicationMatricData } from "@/utils/data/funnel-journey";

export const ApplicationMetricComponent = () => {
    return (
        <Card title="Application metric" noPadding>
            <ReusableTable
                columns={[
                    {
                        accessorKey: "geo",
                        header: "Geo",
                        enableSorting: true,
                        cell: (info) => (
                            <div className="text-center font-semibold">
                                {info.getValue() as string}
                            </div>
                        ),
                    },
                    {
                        accessorKey: "denialRate",
                        header: "Denial Rate",
                        enableSorting: true,
                        cell: (info) => (
                            <div className="text-center">{info.getValue() as string}</div>
                        ),
                    },
                    {
                        accessorKey: "cancellationRate",
                        header: "Cancellation Rate",
                        enableSorting: true,
                        cell: (info) => (
                            <div className="text-center">{info.getValue() as string}</div>
                        ),
                    },
                    {
                        accessorKey: "selfService",
                        header: "Self Service",
                        enableSorting: true,
                        cell: (info) => (
                            <div className="text-center">{info.getValue() as string}</div>
                        ),
                    },
                    {
                        accessorKey: "avgApplicants",
                        header: "Avg Applicants per Application",
                        enableSorting: true,
                        cell: (info) => (
                            <div className="text-center font-bold">
                                {info.getValue() as number}
                            </div>
                        ),
                    },
                ]}
                data={applicationMatricData}
            />
        </Card>
    );
}