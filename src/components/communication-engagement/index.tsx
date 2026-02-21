"use client";

import PageHeader from "@/components/ui/page-header/page-header";
import { InteractionLevelComponent } from "./interaction-levels";
import { CustomerSentimentFeedbackComponent } from "./customer-sentiment-feedback";
import { MessageSentimentSurveryComponent } from "./messages-sentiment-survey";
import { DetailedActivityComponent } from "./detailed-activity-log";

export default function CommunicationEngagement() {
  return (
    <div className="space-y-5">
      <PageHeader title="Communication & Engagement" />

      {/* Interaction Levels in Funnel Stages */}
      <InteractionLevelComponent />

      {/* Customer Sentiment Feedback - Heatmap Table */}
      <CustomerSentimentFeedbackComponent />

      {/* Messages / Sentiment / Survey Drilldown */}
      <MessageSentimentSurveryComponent />

      {/* Detailed Activity Log */}
      <DetailedActivityComponent />
    </div>
  );
}
