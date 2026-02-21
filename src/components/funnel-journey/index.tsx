"use client";

import { chartTheme } from "@/utils/chart-theme";
import { useState } from "react";
import PageHeader from "@/components/ui/page-header";
import TabGroup from "@/components/ui/tab-group";
import {
  funnelTabs,
} from "@/utils/data/funnel-journey";

import { LeadCountsComponent } from "./lead-counts-registrations";
import { NewVsReturningComponent } from "./new-vs-returning";
import { TimingDistributionComponent } from "./timing-distribution";
import { LeadCountsBySourceComponent } from "./lead-count-source";
import { TimingStagesComponent } from "./timing-stages";
import { LeasingConversionsComponent } from "./leasing-conversions";
import { ApplicationMetricComponent } from "./application-metric";
import { AppStagesDuration } from "./app-stages-duration";
import { CancellationApprovalDataComponent } from "./cancellation-approval-rate";
import { ApprovalCancellationSource } from "./approval-cancellation-source";
import { DenialReasonDistributionComponent } from "./denial-reason-distribution";
import { WebsiteComponent } from "./website-bar";
import { PageViewMarketComponent } from "./page-view-market";
import { UniqueShowingsComponent } from "./unique-showings";
import { ApplicationComponent } from "./application";
import { LeasesComponent } from "./leases";

const FunnelJourney = () => {
  const [funnelTab, setFunnelTab] = useState("unique-showings");


  return (
    <div className="space-y-5">
      <PageHeader title="Funnel Journey" />

      {/* Section 1: Lead Counts + New vs Returning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Lead Counts & Registration - horizontal progress bars */}
        <LeadCountsComponent />

        {/* Leads: New vs Returning */}
        <NewVsReturningComponent />

      </div>

      {/* Section 2: Performance Overview heading */}
      <h2 className="text-sky-700 text-xl font-bold font-heading capitalize">
        Performance Overview
      </h2>

      {/* Section 3: Timing Distribution + Lead Counts by Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Timing Distribution - range/bullet chart */}
        <TimingDistributionComponent />

        {/* Lead Counts by Source - small table */}
        <LeadCountsBySourceComponent />
      </div>

      {/* Section 4: Timing Stages - full width stacked bar */}
      <TimingStagesComponent />

      {/* Section 5: Leasing Conversions by Geo & Stage */}
      <LeasingConversionsComponent />

      {/* Section 6: Dark Lead Funnel with tabs */}
      <div
        className="rounded-2xl p-3 sm:p-6"
        style={{
          background: `linear-gradient(to right, ${chartTheme.colors.palette.gradientStart}, ${chartTheme.colors.palette.gradientEnd})`,
        }}
      >
        <TabGroup
          tabs={funnelTabs}
          activeTab={funnelTab}
          onTabChange={setFunnelTab}
          variant="underline-dark"
        />

        {/* Content changes based on active tab */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          {funnelTab === "unique-showings" && (
            <UniqueShowingsComponent />
          )}

          {funnelTab === "application" && (
            <ApplicationComponent />
          )}

          {funnelTab === "leases" && (
            <LeasesComponent />
          )}
        </div>
      </div>

      {/* Section 7: Application Metric */}
      <ApplicationMetricComponent />

      {/* Section 8: App Stages Duration */}
      <AppStagesDuration />

      {/* Section 9: Cancellation/Dropout Rate + Approval & Cancellation by Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CancellationApprovalDataComponent />
        <ApprovalCancellationSource />
      </div>

      {/* Section 10: Denial Reason Distribution */}
      <DenialReasonDistributionComponent />

      {/* Section 11: Website + Page View / Market */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <WebsiteComponent />
        <PageViewMarketComponent />
      </div>
    </div>
  );
};

export default FunnelJourney;
