"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import FutureLeaseChart from "@/components/property-health/future-lease-chart";
import ReusableTable from "@/components/ui/reusable-table";
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
        <ReusableTable
          columns={drilldownColumns}
          data={propertyDrilldownData}
        />
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
