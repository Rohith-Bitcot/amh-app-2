"use client";

import PageHeader from "@/components/ui/page-header/page-header";
import Card from "@/components/ui/cards";
import FutureLeaseChart from "@/components/property-health/future-lease-chart";
import {
  futureExpirationData,
} from "@/utils/data/property-health";
import { PropertyHealthComponent } from "./property-health-section";
import { PropertyDrilldownTable } from "./property-drilldown";

const PropertyHealth = () => {
  return (
    <div className="space-y-5">
      <PageHeader title="Property Health" />

      {/* Property Health Chart + District Table */}
      <PropertyHealthComponent />

      {/* Property Drilldown Table */}
      <PropertyDrilldownTable />

      {/* Future Leases Expiration & Upcoming Delivery */}
      <Card
        title="Future Lease Expiration & Upcoming Delivery (T 13M)"
        subtitle="vs. projected absorption"
        subtitleClassName="font-heading font-normal text-[12.64px] leading-[18px] tracking-[0px] capitalize text-[#0077CA]"
      >
        <FutureLeaseChart data={futureExpirationData} height={400} />
      </Card>
    </div>
  );
};

export default PropertyHealth;
